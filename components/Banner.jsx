import Image from "next/image";
import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

export default function Banner() {
  const slides = [
    {
      url: "/banner1.jpg",
    },
    {
      url: "/banner2.jpg",
    },
    {
      url: "/banner3.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () =>
    setCurrentIndex((currentIndex) =>
      currentIndex === 0 ? slides.length - 1 : currentIndex - 1
    );

  const nextSlide = () =>
    setCurrentIndex((currentIndex) =>
      currentIndex === slides.length - 1 ? 0 : currentIndex + 1
    );

  const auto = 3000;

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, auto);
    return () => clearInterval(slideInterval);
  });

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="overflow-hidden relative group">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <Image
            key={index}
            src={slide.url}
            alt=""
            width={2000}
            height={2000}
          />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prevSlide}
          className=" hidden group-hover:block p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <BsChevronCompactLeft size={30} />
        </button>
        <button
          onClick={nextSlide}
          className=" hidden group-hover:block p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <BsChevronCompactRight size={30} />
        </button>
      </div>
      <div className="flex justify-center absolute bottom-4 left-0 right-0 gap-3">
        {slides.map((_slide, slideindex) => (
          <div
            key={slideindex}
            onClick={() => goToSlide(slideindex)}
            className={`transition-all w-2 h-2 bg-white rounded-full ${
              currentIndex === slideindex ? "p-[6px]" : "bg-opacity-50"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

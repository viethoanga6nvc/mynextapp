/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import { CartContext } from "./CartContext";

function ProductItem({ product }) {
  const { addProduct } = useContext(CartContext);

  return (
    <div className="w-80 bg-[#f2f2f4] mb-3 px-4 py-3 mx-auto  grid grid-rows-[192px_minmax(24px,_1fr)_32px] gap-2">
      <div className="flex justify-center items-center">
        <img
          alt=""
          className="mx-auto w-[200px] h-48"
          src={product.images[0].url}
        />
      </div>
      <div>{product.title}</div>
      <div className="flex justify-between">
        <p className="font-semibold leading-8">$ {product.price}</p>
        <button
          className="bg-blue-600 py-1 px-3 rounded-lg"
          onClick={() => addProduct(product._id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-white"
          >
            <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ProductItem;

import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header>
      <div className="mx-28 grid grid-cols-2 py-1">
        <div>
          <Link href={"/"}>
            <Image
              src={"/Logo.PNG"}
              alt="logo"
              width={165}
              height={30}
              className="mx-auto"
            />
          </Link>
        </div>
        <form className="py-3">
          <div className=" border-gray-500 border-[1px] rounded-3xl mx-7 flex justify-between">
            <input
              type="text"
              name="search"
              placeholder="Search here"
              className="leading-5 ml-3 w-full text-lg py-1 focus:outline-0"
            />
            <button type="submit" className="leading-5 mr-1">
              <svg
                className="h-5 w-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </header>
  );
}

export default Header;

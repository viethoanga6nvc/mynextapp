import React, { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { CartContext } from "./CartContext";

function Menu() {
  const inactiveLink = "p-4 w-fit text-center";
  const activeLink = inactiveLink + " bg-white text-yellow-600 uppercase";
  const { pathname } = useRouter();

  const { cartProducts } = useContext(CartContext);
  return (
    <div className="bg-yellow-600 text-white font-semibold text-xl ">
      <nav className="flex justify-center">
        <Link href="/" className={pathname === "/" ? activeLink : inactiveLink}>
          Home
        </Link>
        <Link
          href="/products"
          className={pathname.includes("/products") ? activeLink : inactiveLink}
        >
          Products
        </Link>
        <Link
          href="/categories"
          className={
            pathname.includes("/categories") ? activeLink : inactiveLink
          }
        >
          Categories
        </Link>
        <Link
          href="/account"
          className={pathname.includes("/account") ? activeLink : inactiveLink}
        >
          Account
        </Link>
        <Link
          href="/cart"
          className={pathname.includes("/cart") ? activeLink : inactiveLink}
        >
          Cart ({!cartProducts.length ? 0 : cartProducts.length})
        </Link>
      </nav>
    </div>
  );
}

export default Menu;

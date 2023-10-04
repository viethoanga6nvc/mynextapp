import { createContext, useState } from "react";

export const CartContext = createContext({});

export function CartProvider({ children }) {
  const [cartProducts, setCartProduct] = useState([]);
  function addProduct(productId) {
    setCartProduct((prev) => [...prev, productId]);
  }
  return (
    <CartContext.Provider value={{ cartProducts, setCartProduct, addProduct }}>
      {children}
    </CartContext.Provider>
  );
}

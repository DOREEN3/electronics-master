import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();//createcontext to keep everything for the cart

export const CartProvider = ({ children }) => { //wraps all your app components
  const [cart, setCart] = useState(() => { //check if the cart exists in local storage when app loads
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]); //saves cart to storage everytime it changes

  const addToCart = (product) => { // check if products exist in cart
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (productId, qty) => { //if quantity is 0 remove product
    if (qty <= 0) return removeFromCart(productId);
    setCart((prev) =>
      prev.map((p) => (p.id === productId ? { ...p, quantity: qty } : p))
    );
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((p) => p.id !== productId));
  };

  const clearCart = () => setCart([]); // remove everything from the cart

  return (
    <CartContext.Provider //provide values to the entire app
      value={{ cart, addToCart, removeFromCart, clearCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => { //custom hook
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
};


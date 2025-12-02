import { useState, useEffect } from "react";

export const useCart = () => {
  // Initialize state from localStorage
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Save to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add item to cart
  const addToCart = (product) => {
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

  // Update quantity
  const updateQuantity = (productId, qty) => {
    if (qty <= 0) return removeFromCart(productId);
    setCart((prev) =>
      prev.map((p) => (p.id === productId ? { ...p, quantity: qty } : p))
    );
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((p) => p.id !== productId));
  };

  // Clear cart
  const clearCart = () => setCart([]);

  return { cart, addToCart, removeFromCart, clearCart, updateQuantity };
};

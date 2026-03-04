import { createContext, useContext, useState } from "react";

const CartContext = createContext();

// Hook personalizado (para usar más fácil el context)
export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // 🔹 Agregar producto
  const addItem = (item, quantity) => {
    const itemInCart = cart.find(prod => prod.id === item.id);

    if (itemInCart) {
      const updatedCart = cart.map(prod =>
        prod.id === item.id
          ? { ...prod, quantity: prod.quantity + quantity }
          : prod
      );
      setCart(updatedCart);
    } else {
      setCart(prev => [...prev, { ...item, quantity }]);
    }
  };

  // 🔹 Eliminar producto por id
  const removeItem = (id) => {
  setCart(prevCart => prevCart.filter(item => item.id !== id));
};

  // 🔹 Vaciar carrito
  const clearCart = () => {
  setCart([]);
  };

  // 🔹 Total de unidades
  const getTotalQuantity = () => {
    return cart.reduce((acc, prod) => acc + prod.quantity, 0);
  };

  // 🔹 Total precio
  const getTotalPrice = () => {
    return cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        getTotalQuantity,
        getTotalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
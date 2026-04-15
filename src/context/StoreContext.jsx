import React, { createContext, useContext, useState, useEffect } from 'react';
import { products as initialProducts } from '../data/mockData';

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [products, setProducts] = useState(initialProducts);
  const [cart, setCart] = useState([]);
  const [posCart, setPosCart] = useState([]);
  const [sales, setSales] = useState([]);

  // Add to E-commerce Cart
  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Add to POS Cart
  const addToPosCart = (product) => {
    if (product.stock <= 0) return;
    setPosCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromPosCart = (id) => {
    setPosCart(prev => prev.filter(item => item.id !== id));
  };

  const clearPosCart = () => setPosCart([]);

  // Process POS Sale
  const processPosSale = () => {
    const total = posCart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const sale = {
      id: Date.now(),
      items: [...posCart],
      total,
      date: new Date().toISOString()
    };

    setSales(prev => [...prev, sale]);

    // Update Stock
    setProducts(prev => prev.map(p => {
      const soldItem = posCart.find(item => item.id === p.id);
      if (soldItem) {
        return { ...p, stock: p.stock - soldItem.quantity };
      }
      return p;
    }));

    clearPosCart();
    return sale;
  };

  const updateStock = (id, newStock) => {
    setProducts(prev => prev.map(p => p.id === id ? { ...p, stock: parseInt(newStock) } : p));
  };

  const addProduct = (product) => {
    setProducts(prev => [...prev, { ...product, id: Date.now() }]);
  };

  return (
    <StoreContext.Provider value={{
      products,
      cart,
      posCart,
      sales,
      addToCart,
      addToPosCart,
      removeFromPosCart,
      clearPosCart,
      processPosSale,
      updateStock,
      addProduct
    }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);

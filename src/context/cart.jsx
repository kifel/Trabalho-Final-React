import { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [productsCart, setProductsCart] = useState([]);

  function handleAddItemToCart(id, fotoLink, nome, valor) {
    const itemObject = [...productsCart];
    const item = itemObject.find((product) => product.id === id);
    if (!item) {
      itemObject.push({
        id: id,
        fotoLink: fotoLink,
        nome: nome,
        valor: valor,
        quantidade: 1,
      });
    } else {
      item.quantidade = item.quantidade + 1;
    }

    setProductsCart(itemObject);
  }

  function handleRemoveItemToCart(id) {
    const itemObject = [...productsCart];
    const item = itemObject.find((product) => product.id === id);

    if (item && item.quantidade > 1) {
      item.quantidade = item.quantidade - 1;
      setProductsCart(itemObject);
    } else {
      const arrayFiltered = itemObject.filter((product) => product.id !== id);
      setProductsCart(arrayFiltered);
    }
  }

  function removalItem(id) {
    const itemObject = [...productsCart];

    const arrayFiltered = itemObject.filter((product) => product.id !== id);
    setProductsCart(arrayFiltered);
  }

  function clearCart() {
    setProductsCart([]);
  }

  return (
    <CartContext.Provider
      value={{
        productsCart,
        handleAddItemToCart,
        handleRemoveItemToCart,
        removalItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

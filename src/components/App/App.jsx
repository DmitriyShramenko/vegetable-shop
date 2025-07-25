import { useState } from 'react';
import { AppShell } from '@mantine/core';
import Header from '../Header/Header';
import Catalog from '../Catalog/Catalog';

function App() {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    setCartItems(items => {
      const index = items.findIndex(item => item.name === product.name);
      if (index !== -1) {
        const newItems = [...items];
        newItems[index].qty += product.qty;
        return newItems;
      }
      return [...items, { ...product, qty: product.qty }];
    });
  }

  return (
    <AppShell
      header={{ height: 60 }}
    >
      <AppShell.Header>
        <Header
          items={cartItems}
          setCartItems={setCartItems}
        />
      </AppShell.Header>
      <AppShell.Main>
        <Catalog
          addToCart={addToCart}

        />
      </AppShell.Main>
    </AppShell >
  );
}

export default App
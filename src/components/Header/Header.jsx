import { useState } from 'react';
import './header.css';
import { Popover, Button, Image, Text } from '@mantine/core';

import Cart from '../Cart/Cart';

function Header({ items }) {

   const [opened, setOpened] = useState(false);

   const total = items.reduce((acc, item) => acc + item.price * item.qty, 0);

   return (

      <div className="header-container">
         <div className="vegetable-logo">
            <span>Vegetable</span>
            <span className="shop-logo">SHOP</span>
         </div>

         <Popover
            opened={opened}
            onChange={setOpened}
            width={300}
            position="bottom-end"
            withArrow
            shadow="md"
         >
            <Popover.Target>
               <Button
                  onClick={() => setOpened((o) => !o)}
                  variant="filled"
                  color="#54B46A"
                  size="xs"
               >
                  Cart
               </Button>
            </Popover.Target>

            <Popover.Dropdown>
               {items.length === 0 ? (
                  <>
                     <Image src="../../public/image/cart_empty.svg" />
                     <Text>корзина пуста</Text>
                  </>
               ) : (
                  <Cart items={items} total={total} />
               )}
            </Popover.Dropdown>
         </Popover>
      </div >
   );
};

export default Header;
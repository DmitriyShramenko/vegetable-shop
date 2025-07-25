import { useState } from 'react';
import './header.css';
import { Popover, Button, Text, Image, Group, Box } from '@mantine/core';

import Cart from '../Cart/Cart';

function Header({ items, setCartItems }) {

   const [opened, setOpened] = useState(false);

   const total = items.reduce((acc, item) => acc + item.price * item.qty, 0);
   const itemCount = items.reduce((sum, item) => sum + item.qty, 0);

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
                  px="xs"
                  w={120}
               >
                  <Group gap={6} align="center" justify="center" wrap="nowrap">
                     <Box
                        style={{
                           backgroundColor: 'white',
                           borderRadius: '999px',
                           width: 15,
                           height: 15,
                           display: 'flex',
                           alignItems: 'center',
                           justifyContent: 'center',
                        }}
                     >
                        <Text size="xs" fw={500} c="black">{itemCount}</Text>
                     </Box>

                     <Text size="sm" fw={600} c="white">
                        Cart
                     </Text>
                     <Image
                        src="../../public/image/cart.svg"
                        h={15}
                        w={15}
                     />
                  </Group>
               </Button>
            </Popover.Target>

            <Popover.Dropdown>
               {items.length === 0 ? (
                  <>
                     <Image src="../../public/image/cart_empty.svg" />
                     <Text>корзина пуста</Text>
                  </>
               ) : (
                  <Cart
                     items={items}
                     total={total}
                     setCartItems={setCartItems}
                  />
               )}
            </Popover.Dropdown>
         </Popover>
      </div >
   );
};

export default Header;
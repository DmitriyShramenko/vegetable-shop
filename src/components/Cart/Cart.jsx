import { Box, Group, Text, Image, Divider, ActionIcon, } from '@mantine/core';
import { IconMinus, IconPlus } from '@tabler/icons-react';

function Cart({ items, total, setCartItems }) {

  const increment = (index) => {
    const updated = [...items];
    updated[index].qty += 1;
    setCartItems(updated);
  };

  const decrement = (index) => {
    const updated = [...items];
    updated[index].qty = Math.max(0, updated[index].qty - 1);
    setCartItems(updated);
  };

  return (

    <>
      {items.map((item, idx) => (
        <Box key={idx} mb="sm">
          <Group position="apart" align="flex-start">
            <Group>
              <Image src={item.image} w={40} h={40} />
              <Box>
                <Text size="sm" fw={500}>
                  {item.name.split(' ')[0]}{' '}
                  <Text component="span" size="xs" c="dimmed">
                    1 kg
                  </Text>
                </Text>
                <Text size="sm" fw={500}>${item.price}</Text>
              </Box>
            </Group>

            <Group spacing={4}>
              <ActionIcon
                variant="light"
                size="24"
                color="#495057"
                onClick={() => decrement(idx)}
              >
                <IconMinus size={12} color="black" />
              </ActionIcon>
              <Text size="sm">{item.qty}</Text>
              <ActionIcon
                variant="light"
                size="24"
                color="#495057"
                onClick={() => increment(idx)}
              >
                <IconPlus size={12} color="black" />
              </ActionIcon>
            </Group>
          </Group>
          {idx < items.length - 1 && <Divider my="xs" />}
        </Box>
      ))}

      <Divider my="xs" />
      <Group position="apart">
        <Text weight={600} size="sm">
          Total
        </Text>
        <Text weight={600} size="sm">
          ${total}
        </Text>
      </Group>
    </>
  );

}

export default Cart;
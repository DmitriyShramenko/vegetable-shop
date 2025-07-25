import { useState } from "react";
import { Card, Flex, Image, Text, Button, Group, ActionIcon } from '@mantine/core';
import { IconPlus, IconMinus } from '@tabler/icons-react';


function VegetableCard({ product, addToCart }) {

  const [count, setCount] = useState(1);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => Math.max(0, c - 1));
  const [vegetableName, vegetableWeigh] = product.name.split(' - ')

  return (
    <Card
      padding="lg"
      radius="lg"
      withBorder
      style={{ height: 414, width: 276 }} >
      <Card.Section className="product-image">
        <Image
          src={product.image}
          height={276}
          width={276}
          fit="contain"
          alt={product.name}
        />
      </Card.Section>

      <Flex
        className="product-name"
        justify="space-between"
        align="center"
        mt="md"
        mb="xs"
      >
        <Text fw={500}>{vegetableName}</Text>
        <Text fw={500} size="sm" c="dimmed">{vegetableWeigh}</Text>

        <Group >
          <ActionIcon
            variant="light"
            size="26"
            radius="md"
            color="#495057"
            onClick={decrement}
          >
            <IconMinus size="1.25rem" color="black" />
          </ActionIcon>

          <Text size="lg">{count}</Text>

          <ActionIcon
            variant="light"
            size="26"
            radius="md"
            color="#495057"
            onClick={increment}
          >
            <IconPlus size="1.25rem" color="black" />
          </ActionIcon>
        </Group>

      </Flex>

      <Flex
        className="product-priceAndButton"
        gap="xl"
        justify="center"
        align="center"
        direction="row"
      >
        <Text size="lg" fw={700}>
          ${product.price}
        </Text>
        <Button
          rightSection={
            <Image src="../../public/image/cart.svg" />
          }
          color="#E7FAEB"
          size="lg"
          radius="md"
          onClick={() => addToCart(product)}
        >
          <Text fw={500} c="#3B944E">Add to cart</Text>
        </Button>
      </Flex>

    </Card >

  );

};

export default VegetableCard;
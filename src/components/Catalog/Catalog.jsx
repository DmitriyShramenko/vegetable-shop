import { useEffect, useState } from "react";
import { Loader } from '@mantine/core';
import './catalog.css';
import VegetableCard from "../VegetableCard/VegetableCard";

function Catalog({ addToCart }) {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Ошибка при загрузке данных:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <Loader color="#54B46A" size={50} />
      </div>
    );
  };

  return (
    <div className="catalog">
      <h1>Catalog</h1>
      <div className="cardList">
        {products.map((product) => (
          <VegetableCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
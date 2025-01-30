import React, { useState } from "react";
import { useEffect } from "react";
import ProductCard from "./card";
let BaseUrl = "https://fakestoreapi.com/products";
const Cards = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch(BaseUrl)
      .then((data) => data.json())
      .then((data) => setdata(data))
      .catch();
  }, []);
  return (
    <div className="grid grid-cols-4 gap-10">
      {data.map((value) => (
        <ProductCard
          key={value.id}
          title={value.title}
          image={value.image}
          price={value.price}
          description={value.description}
          category={value.category}
          rate={value.rating.rate}
          count={value.rating.count}
        />
      ))}
    </div>
  );
};

export default Cards;

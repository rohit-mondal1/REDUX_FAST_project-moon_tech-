import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../Components/ProductCard";

const Home = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((rse) => rse.json())
      .then((data) => setProduct(data));
  }, []);

  // redux get data  in one components
  const stor = useSelector(stor => stor);

  console.log(stor);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
      {products.map((produc) => (
        <ProductCard key={produc._id} product={produc} />
      ))}
    </div>
  );
};

export default Home;

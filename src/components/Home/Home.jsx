import { useEffect, useState } from "react";
import React from "react";
import "./home.css";
import { getProduct } from "../../Apiservices/Api";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, Setproducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProduct();
      Setproducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div className="product" key={product.id}>
         
         <img className="img" src={product.image} alt="alternative" />
         
          <h2 className="h2">{product.title}</h2>
          <p>
            <span className="price">'${product.price}</span>
          </p>

          <Link to={`/product/${product.id}`}>
            <button className="button">Product Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;

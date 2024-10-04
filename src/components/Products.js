"use client";
import React, { useState, useEffect } from "react";
const Products = () => {
  const [isOpen, setisOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const dropdownOpen = () => {
    setisOpen(!isOpen);
  };
  const getAllProducts = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      setProducts(await res.json());
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div className="container">
      <nav className="products-nav">
        <div className="flex">
          <div>{products.length}</div>
          <p>HIDE FILTER</p>
        </div>

        <select>
          <option>RECOMMENDED</option>
          <option>NEWEST FIRST</option>
          <option>POPULAR</option>
          <option>PRICE : HIGH TO LOW</option>
          <option>PRICE : LOW TO HIGH</option>
        </select>
      </nav>
      <div className="flex">
        <div className="products-side-nav">
          <div className="flex">
            <input type="checkbox" />
            <p>CUSTOMIZBLE</p>
          </div>
          <div class="dropdown">
            <button class="dropbtn" onClick={() => dropdownOpen()}>
              Select Categories
            </button>
            {isOpen && (
              <div class="dropdown-content">
                <label class="checkbox-label">
                  <input type="checkbox" name="category" value="men" /> Men
                </label>
                <label class="checkbox-label">
                  <input type="checkbox" name="category" value="women" /> Women
                </label>
                <label class="checkbox-label">
                  <input type="checkbox" name="category" value="baby-kids" />{" "}
                  Baby & Kids
                </label>
              </div>
            )}
          </div>
        </div>
        <div className="grid-container">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.title}
                style={{ width: "100px" }}
              />
              <h4>{product.title}</h4>
              <p>Price: ${product.price}</p>
              {/* <p>{product.description}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;

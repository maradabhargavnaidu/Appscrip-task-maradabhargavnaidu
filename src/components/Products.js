"use client";
import React, { useState, useEffect } from "react";
import ArrowDown from "@/app/icons/ArrowDown";
import ArrowUp from "@/app/icons/ArrowUp";

const Products = () => {
  const [isOpen, setisOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [sideNav, setSideNav] = useState(false);
  const [filters, setFilters] = useState({
    men: false,
    women: false,
    jewelery: false,
    electronics: false,
    ascprice: false,
    descprice: false,
  });
  const [sort, setSort] = useState("");
  const handleFilter = (event) => {
    const { name, checked } = event.target;
    setFilters({
      ...filters,
      [name]: checked,
    });
  };

  const dropdownOpen = () => {
    setisOpen(!isOpen);
  };

  // Fetch all products initially
  const getAllProducts = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };
  const fetchFilteredProducts = async () => {
    try {
      let queryString = "";
      if (filters.men)
        queryString =
          "https://fakestoreapi.com/products/category/men's clothing";
      else if (filters.women)
        queryString =
          "https://fakestoreapi.com/products/category/women's clothing";
      else if (filters.jewelery)
        queryString = "https://fakestoreapi.com/products/category/jewelery";
      else if (filters.electronics)
        queryString = "https://fakestoreapi.com/products/category/electronics";
      else queryString = "https://fakestoreapi.com/products";

      const response = await fetch(queryString);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching filtered products:", error);
    }
  };

  const handleSortChange = (event) => {
    const sortValue = event.target.value;
    setSort(sortValue);

    let sortedProducts = [...products];

    if (sortValue === "PRICE : HIGH TO LOW") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortValue === "PRICE : LOW TO HIGH") {
      sortedProducts.sort((a, b) => a.price - b.price);
    }

    setProducts(sortedProducts);
  };

  useEffect(() => {
    getAllProducts();
    // getAllCategories();
  }, []);

  useEffect(() => {
    fetchFilteredProducts();
  }, [filters]);

  return (
    <div className="container">
      <nav className="products-nav">
        <div className="flex" style={{ alignItems: "center" }}>
          <div>{products.length}</div>
          <p
            onClick={() => setSideNav(!sideNav)}
            style={{
              cursor: "pointer",
              textDecoration: "underline",
              fontSize: "14px",
            }}
          >
            {sideNav ? "SHOW FILTER" : "HIDE FILTER"}
          </p>
        </div>

        <select
          value={sort}
          className="products-nav-dropdown"
          onChange={handleSortChange}
        >
          <option value="">RECOMMENDED</option>
          <option value="PRICE : HIGH TO LOW">PRICE : HIGH TO LOW</option>
          <option value="PRICE : LOW TO HIGH">PRICE : LOW TO HIGH</option>
        </select>
      </nav>

      <div className="flex">
        <div className={"products-side-nav " + (sideNav ? "none" : "")}>
          <div className="dropdown">
            <button className="dropbtn" onClick={dropdownOpen}>
              Select Categories {isOpen ? <ArrowUp /> : <ArrowDown />}
            </button>
            {isOpen && (
              <div className="dropdown-content">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="men"
                    onChange={handleFilter}
                    checked={filters.men}
                  />
                  Men
                </label>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="women"
                    onChange={handleFilter}
                    checked={filters.women}
                  />
                  Women
                </label>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="jewelery"
                    onChange={handleFilter}
                    checked={filters.jewelery}
                  />
                  Jewelery
                </label>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="electronics"
                    onChange={handleFilter}
                    checked={filters.electronics}
                  />
                  electronics
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;

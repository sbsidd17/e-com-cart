import React from "react";
import "./style.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProductList } from "../../../redux/productSlice";
import SingleProduct from "../singleProduct/SingleProduct";

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productSlice.productList);
  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, []);
  
  async function getProducts() {
    const resp = await fetch("https://fakestoreapi.com/products");
    const data = await resp.json();
    dispatch(createProductList(data));
  }

  return (
    <div className="productList">
      {products.map((item) => {
        return (
          <SingleProduct
            key = {item.id}
            product = {item}
          />
        );
      })}
    </div>
  );
}

export default ProductList;

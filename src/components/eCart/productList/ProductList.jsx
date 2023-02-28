import React from "react";
import "./style.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../../redux/productSlice";
import SingleProduct from "../singleProduct/SingleProduct";
import Loader from "../loading/Loader";

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productSlice.productList);
  useEffect(() => {
    dispatch(fetchData());
    // eslint-disable-next-line
  }, []);

  const status = useSelector((state) => state.productSlice.status);
  if(status === 'loading'){
    return <Loader />
  }

  return (
    <div className="productList">
      {products.map((item) => {
        return <SingleProduct key={item.id} product={item} />;
      })}
    </div>
  );
}

export default ProductList;

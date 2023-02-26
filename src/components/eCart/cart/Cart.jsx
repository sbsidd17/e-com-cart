import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import SingleProduct from "../singleProduct/SingleProduct";
import "./style.css";

function Cart() {
  const [disc, setDisc] = useState(20)
  const product = useSelector((state) => state.cartSlice.cart);
  let totalMRP =0;
  product.forEach(item => totalMRP += item.price*item.quantity)
  let charg = 2;
  return (
    <>
      <div className="cart">
        {product.map((item) => (
          <SingleProduct key={item.id} product={item} />
        ))}
      </div>
      <div className="placeOrder">
        <h4>Price Details : </h4>
        <hr />
        <p>Total MRP : <span>{(totalMRP).toFixed(2)}$</span></p>
        <p>Discount on MRP : <span>-{(totalMRP*disc/100).toFixed(2)}$ ({disc}%)</span></p>
        <p>Coupon Discount : <span className="coupon">Apply Coupon</span></p>
        <p>Dilivery Charges : <span>+{charg}$</span></p>
        <hr />
        <h3>Total Amount : <span>{(totalMRP - (totalMRP*disc/100) + charg).toFixed(2)}$</span></h3>
        <button>Place Order</button>
      </div>
    </>
  );
}

export default Cart;

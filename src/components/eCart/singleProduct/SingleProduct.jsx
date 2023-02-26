import React from "react";
import { AiFillStar } from "react-icons/ai";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { useDispatch, useSelector, } from "react-redux";
import { addToCart, removeFromCart } from "../../../redux/cartSlice";
import "./style.css";

function SingleProduct({product}) {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cartSlice.cart)
  const cartItem = cart.find(item => item.id === product.id);
  const itemQuantity = cartItem ? cartItem.quantity : 0;
  return (
    <div className="card">
      <div className="productCard">
        <div className="productImg">
          <img
            src={product.image}
            alt="product-img"
          />
        </div>
        <div className="details">
          <div className="ratings">
            <p>{product.rating.rate}</p>
            <AiFillStar color="green" />
            <div className="virticleLine"></div>
            <p>{product.rating.count}</p>
          </div>
          <div className="addToCart">
            <button onClick={()=>dispatch(removeFromCart(product))}>
              <CiSquareMinus size={20} />
            </button>
            <p>{itemQuantity}</p>
            <button onClick={()=>dispatch(addToCart(product))}>
              <CiSquarePlus size={20} />
            </button>
          </div>
        </div>
        <div className="title">
          <h3>{product.title}</h3>
        </div>
        <div className="price">
          <h4>{`Price : ${product.price} $`}</h4>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;

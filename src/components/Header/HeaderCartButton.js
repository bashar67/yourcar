import { useContext, useEffect, useState } from "react";

import CartIcon from "./Cart/CartIcon";
import CartContext from "../store/Cart-Context";
import classes from "./HeaderCart.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberCartItems = cartCtx.items.reduce((curnum, item) => {
    return curnum + item.amount;
  }, 0);

  return (
    <button onClick={props.onClick}>
      <span className="relative ">
        <CartIcon />
      </span>
      <span className={classes["header-cart-button"]}>{numberCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;

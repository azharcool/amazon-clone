import {
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartProductCard from "./CartProductCard";
import emptyCart from "../Assets/images/emptyCart.png";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import CheckoutButton from "./CheckoutButton";
import ClearCartAction from "./../Actions/ClearCartAction";

const useStyles = makeStyles({
  main: {
    background: "#EAEDED",
    marginTop: "4rem",
    display: "flex",
    minHeight: "100vh",
  },
  mDiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  mLeftDiv: {
    margin: "2rem 3rem",
    width: "60rem",
    marginRight: "2rem",
    
    alignContent: "center",
   
  },
  mRightDiv: {
   marginLeft:"3rem",
  marginTop:"-23px",
    background: "white",
    height: "10rem",
    width:"43rem",
    padding: "2rem",
    borderRadius: "0.2rem",
   paddingLeft:"15rem",
  },
  mLowerRightDiv: {
    marginLeft: "3rem",
    marginTop:"0px",
    top: "0px",
    background: "white",
    width:"60rem",
    height: "5rem",
    
    borderRadius: "0.2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  mInnerleftDiv: {
    padding: "1rem",
    background: "white",
    marginTop: "2rem",
  },
  mFooter: {
    fontSize: "0.8rem",
    marginTop: "2rem",
  },
  mDivider: {
    margin: "0.7rem 0",
    height: "0.1rem",
    color: "#DDDDDD",
  },
  mHeading: {
    fontSize: "2rem",
  },
  mNoItemsDiv: {
    margin: "2rem",
    padding: "1rem",
    background: "white",
    display: "flex",
    width: "80%",
    height: "40vh",
  },
  mNoItems: {
    margin: "1rem 2rem",
    fontSize: "2rem",
    fontWeight: "bold",
  },
  mLink: {
    textDecoration: "none",
    color: "#007185",
  },
  mGoToProducts: {
    fontSize: "1.3rem",
    margin: "3rem 2rem",
  },
  mSubTotal: {
    textAlign: "end",
    paddingRight: "1rem",
    
   
  },
  mSubTotalText: {
    fontSize: "1.7rem",
    marginTop: "1rem",
  },
  mFreeDelivery: {
    color: "#067D62",
    fontSize: "0.85rem",
    fontSize: "1.2rem",
  },
  mCheckIcon: {
    color: "#067D62",
    marginRight: "0.5rem",
    fontSize: "2rem",
  },
  mCheckoutText: {
    fontSize: "0.85rem",
    marginLeft: "1.5rem",
    fontSize: "1.5rem",
  },
  mCheckoutLink: {
    textDecoration: "none",
    color: "#007185",
    fontSize: "1.2rem",
    "&:hover": {
      color: "#D2511F",
      textDecoration: "underline",
    },
  },
  mContinueShopping: {
    fontSize: "1.4rem",
    background: "#FFD814",
    padding: "0.4rem 3.1rem",
    borderRadius: "0.3rem",
    color: "black",
    "&:hover": {
      background: "#F7CA00",
    },
  },
  mClearCart: {
    fontSize: "1.5rem",
    color: "#007185",
     
    "&:hover": {
      cursor: "pointer",
      color: "#C7511F",
      textDecoration: "underline",
    },
  },
  mFooter:{
   padding:"2rem 2rem 2rem 2rem",
   fontSize:"1rem",
   paddingRight:"4rem",
  
  
  },
  leftDiv: {
    margin: "2rem 1rem",
    width: "72%",
  },
  rightDiv: {
    margin: "2rem 1rem",
    background: "white",
    height: "10rem",
    padding: "2rem",
    borderRadius: "0.2rem",
  },
  lowerRightDiv: {
    margin: "1rem",
    background: "white",
    height: "5rem",
    padding: "1rem",
    borderRadius: "0.2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  innerleftDiv: {
    padding: "1rem",
    background: "white",
   
  },
  footer: {
    fontSize: "0.8rem",
    marginTop: "2rem",
  },
  divider: {
    margin: "0.7rem 0",
    height: "0.1rem",
    color: "#DDDDDD",
  },
  heading: {
    fontSize: "2rem",
  },
  noItemsDiv: {
    margin: "2rem",
    padding: "1rem",
    background: "white",
    display: "flex",
    width: "80%",
    height: "40vh",
  },
  noItems: {
    margin: "1rem 2rem",
    fontSize: "2rem",
    fontWeight: "bold",
  },
  link: {
    textDecoration: "none",
    color: "#007185",
  },
  goToProducts: {
    fontSize: "1.3rem",
    margin: "3rem 2rem",
  },
  subTotal: {
    textAlign: "end",
    paddingRight: "1rem",
  },
  subTotalText: {
    fontSize: "1.2rem",
    marginTop: "1rem",
  },
  freeDelivery: {
    color: "#067D62",
    fontSize: "0.85rem",
  },
  checkIcon: {
    color: "#067D62",
    marginRight: "0.5rem",
  },
  checkoutText: {
    fontSize: "0.85rem",
    marginLeft: "1.5rem",
  },
  checkoutLink: {
    textDecoration: "none",
    color: "#007185",
    "&:hover": {
      color: "#D2511F",
      textDecoration: "underline",
    },
  },
  continueShopping: {
    fontSize: "1rem",
    background: "#FFD814",
    padding: "0.3rem 3rem",
    borderRadius: "0.3rem",
    color: "black",
    "&:hover": {
      background: "#F7CA00",
    },
  },
  clearCart: {
    fontSize: "1.2rem",
    color: "#007185",
    "&:hover": {
      cursor: "pointer",
      color: "#C7511F",
      textDecoration: "underline",
    },
  },
});
function Cart() {
  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const classes = useStyles();
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = useSelector((state) => state.cart.count);
  const dispatch = useDispatch();
  const calcTotal = () => {
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
      total = cartItems[i].price * cartItems[i].quantity + total;
    }
    return Math.floor(total);
  };

  const clearCart = () => {
    //dispatch action clear cart
    dispatch(ClearCartAction());
  };
  return (
    <div className={classes.main}>
    {isMatch ?
      <div className={classes.mDiv}>
      <div className={classes.mLeftDiv}>
        {cartItems.length === 0 ? (
          <div className={classes.mNoItemsDiv}>
            <img src={emptyCart} alt="" />
            <div>
              <Typography className={classes.mNoItems}>
                Your Amazon Cart is empty
              </Typography>
              <Link to="/" className={classes.mLink}>
                <Typography className={classes.mGoToProducts}>
                  Show Products
                </Typography>
              </Link>
            </div>
          </div>
        ) : (
          <div className={classes.mInnerleftDiv}>
            <Typography className={classes.mHeading}>Shopping Cart</Typography>

            {cartItems.map((item, i) => {
              return (
                <div key={i}>
                  <Divider className={classes.mDivider} />
                  <CartProductCard details={item} key={i} />
                </div>
              );
            })}
            
          </div>
        )}
        
        </div>
        {cartItems.length !== 0 && (
          <div >
            <div className={classes.mRightDiv}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <FaCheckCircle className={classes.mCheckIcon} />
                <Typography className={classes.mFreeDelivery}>
                  Your order is eligible for FREE Delivery.
                </Typography>
              </div>
              <Typography className={classes.mCheckoutText}>
                Select this option at checkout.{" "}
                <a
                  href="https://www.amazon.in/gp/help/customer/display.html?nodeId=200904360&pop-up=1"
                  target="blank"
                  className={classes.mCheckoutLink}
                >
                  Details
                </a>
              </Typography>
              <Typography className={classes.mSubTotalText}>
                Subtotal ({cartCount} items) :{" "}
                <b>₹ {calcTotal().toLocaleString()}</b>
              </Typography>
              <CheckoutButton quantity={0} />
            </div>
            <div className={classes.mLowerRightDiv}>
              <Link to="/" className={classes.mLink}>
                <Typography className={classes.mContinueShopping}>
                  Continue Shopping
                </Typography>
              </Link>
            </div>
          </div>
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "start",
            paddingLeft: "3rem",
            paddingTop: "1rem",
            
          }}
        >
        {cartItems.length !== 0 && (
          <Typography onClick={clearCart} className={classes.mClearCart}>
            Clear Cart
          </Typography>
        )}
          
        </div>
        <Typography className={classes.mFooter}>
        The price and availability of items at Amazon.in are subject to
        change. The shopping cart is a temporary place to store a list of your
        items and reflects each item's most recent price. Do you have a
        promotional code? We'll ask you to enter your claim code when it's
        time to pay.
      </Typography>
       
      
      </div> 
      :
      <>
      <div className={classes.leftDiv}>
      {cartItems.length === 0 ? (
        <div className={classes.noItemsDiv}>
          <img src={emptyCart} alt="" />
          <div>
            <Typography className={classes.noItems}>
              Your Amazon Cart is empty
            </Typography>
            <Link to="/" className={classes.link}>
              <Typography className={classes.goToProducts}>
                Show Products
              </Typography>
            </Link>
          </div>
        </div>
      ) : (
        <div className={classes.innerleftDiv}>
          <Typography className={classes.heading}>Shopping Cart</Typography>

          {cartItems.map((item, i) => {
            return (
              <div key={i}>
                <Divider className={classes.divider} />
                <CartProductCard details={item} key={i} />
              </div>
            );
          })}
          <div className={classes.subTotal}>
            <Typography className={classes.subTotalText}>
              Subtotal ({cartCount} items) :{" "}
              <b>₹ {calcTotal().toLocaleString()}</b>
            </Typography>
          </div>
        </div>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          paddingRight: "2rem",
          paddingTop: "1rem",
        
        }}
      >
        {cartItems.length !== 0 && (
          <Typography onClick={clearCart} className={classes.clearCart}>
            Clear Cart
          </Typography>
        )}
      </div>
      <Typography className={classes.footer}>
        The price and availability of items at Amazon.in are subject to
        change. The shopping cart is a temporary place to store a list of your
        items and reflects each item's most recent price. Do you have a
        promotional code? We'll ask you to enter your claim code when it's
        time to pay.
      </Typography>
    </div>
    {cartItems.length !== 0 && (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className={classes.rightDiv}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <FaCheckCircle className={classes.checkIcon} />
            <Typography className={classes.freeDelivery}>
              Your order is eligible for FREE Delivery.
            </Typography>
          </div>
          <Typography className={classes.checkoutText}>
            Select this option at checkout.{" "}
            <a
              href="https://www.amazon.in/gp/help/customer/display.html?nodeId=200904360&pop-up=1"
              target="blank"
              className={classes.checkoutLink}
            >
              Details
            </a>
          </Typography>
          <Typography className={classes.subTotalText}>
            Subtotal ({cartCount} items) :{" "}
            <b>₹ {calcTotal().toLocaleString()}</b>
          </Typography>
          <CheckoutButton quantity={0} />
        </div>
        <div className={classes.lowerRightDiv}>
          <Link to="/" className={classes.link}>
            <Typography className={classes.continueShopping}>
              Continue Shopping
            </Typography>
          </Link>
        </div>
      </div>
    )}
      </>}
     
    </div>
  );
}

export default Cart;

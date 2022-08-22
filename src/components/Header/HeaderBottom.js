import React from "react";
import classes from "./HeaderBottom.module.css";
import HeaderSideBar from "./HeaderSideBar";

function HeaderBottom() {
  return (
    <div className={classes.headerBottom}>
      <HeaderSideBar />
      <div className={classes.headerBottomText}>Mobile</div>
      <div className={classes.headerBottomText}>Amazon Pay</div>
      <div className={classes.headerBottomText}>Fashion</div>
      <div className={classes.headerBottomText}>Electronics</div>
      <div className={classes.headerBottomText}>Prime</div>
      <div className={classes.headerBottomText}>New Release</div>
      <div className={classes.headerBottomText}>Customer Service</div>
      <div className={classes.headerBottomText}>Computers</div>
      <div className={classes.headerBottomText}>Home & Kitchen</div>
      <div className={classes.headerBottomText}>Best Seller</div>
      <div className={classes.headerBottomText}>Mobile</div>
      <div className={classes.headerBottomText}>Amazon Pay</div>
      <div className={classes.headerBottomText}>Fashion</div>
      <div className={classes.headerBottomText}>Electronics</div>
      <div className={classes.headerBottomText}>Prime</div>
      <div className={classes.headerBottomText}>New Release</div>
    </div>
  );
}

export default HeaderBottom;

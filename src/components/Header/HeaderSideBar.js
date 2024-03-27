import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import classes from "./HeaderSideBar.module.css";

function HeaderSideBar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className={classes.headerSideBar} onClick={handleShow}>
        <div className={classes.optionImg}></div>
        <span className={classes.optionText}>All</span>
      </div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header
          closeButton
          closeVariant="white"
          className={classes.sideBarHeader}
        >
          <Offcanvas.Title className={classes.sideBarTitle}>
            <div className={classes.avatar}></div>

            <strong>
              Hello,
              <Link to="/login" className={classes.link}>
                {" "}
                Sign in
              </Link>
            </strong>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Offcanvas.Title>
            <strong>Trending</strong>
          </Offcanvas.Title>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default HeaderSideBar;

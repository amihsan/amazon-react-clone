import React, { useState } from "react";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../../store/StateProvider";
import { auth } from "../../firebase";
import Flag from "react-world-flags";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Button from "react-bootstrap/Button";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [showFlagPopover, setShowFlagPopover] = useState(false);
  const [showLoginPopover, setShowLoginPopover] = useState(false);

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };
  const handleFlagOnMouseEnter = () => {
    setShowFlagPopover(true);
  };
  const handleFlagOnMouseLeave = () => {
    setShowFlagPopover(false);
  };
  const handleLoginOnMouseEnter = () => {
    setShowLoginPopover(true);
  };
  const handleLoginOnMouseLeave = () => {
    setShowLoginPopover(false);
  };

  const flagPopover = (
    <Popover
      id="popover-basic"
      onMouseEnter={handleFlagOnMouseEnter}
      onMouseLeave={handleFlagOnMouseLeave}
    >
      <Popover.Header as="h3">Location and language Popover</Popover.Header>
      <Popover.Body>
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
      </Popover.Body>
    </Popover>
  );
  const loginPopover = (
    <Popover
      id="popover-basic"
      onMouseEnter={handleLoginOnMouseEnter}
      onMouseLeave={handleLoginOnMouseLeave}
    >
      <Popover.Header>
        {!user && (
          <Button variant="warning" size="sm" onClick={handleAuthenticaton}>
            Sign in
          </Button>
        )}
      </Popover.Header>
      <Popover.Body>
        {user && (
          <div className={classes.signOut} onClick={handleAuthenticaton}>
            Sign out
          </div>
        )}
      </Popover.Body>
    </Popover>
  );

  return (
    <div className={classes.header}>
      <Link to="/" className={classes.link}>
        <div className={classes.logo}>
          <div className={classes.logoIcon}></div>
          <span className={classes.de}>.de</span>
        </div>
      </Link>

      <div className={classes.location}>
        <div className={classes.locationIcon}></div>
        <div className={classes.option}>
          <span className={classes.optionLineOne}>Hello</span>
          <span className={classes.optionLineTwo}>Select your address</span>
        </div>
      </div>

      <div className={classes.search}>
        <div className={classes.dropdownMenu}>
          <select className={classes.dropdown}>
            <option value="All">All</option>
            <option value="Alexa">Alexa apple apple</option>
            <option value="Books">Books</option>
            <option value="Baby">Baby</option>
            <option value="Beauty">Beauty</option>
            <option value="Clothes">Clothes</option>
          </select>
        </div>
        <div className={classes.searchInputBox}>
          <input type="text" className={classes.searchInput} />
        </div>
        <div className={classes.searchIconBox}>
          <div className={classes.searchIcon} />
        </div>
      </div>

      <div className={classes.nav}>
        <div className={classes.flag}>
          <Flag code={276} />
          <OverlayTrigger
            show={showFlagPopover}
            placement="bottom"
            overlay={flagPopover}
          >
            <ArrowDropDownOutlinedIcon
              className={classes.dropdownIcon}
              onMouseEnter={handleFlagOnMouseEnter}
              onMouseLeave={handleFlagOnMouseLeave}
            />
          </OverlayTrigger>
        </div>

        <Link to={!user ? "/login" : "/profile"} className={classes.link}>
          <div className={classes.login}>
            <span className={classes.optionLineOne}>
              Hello, {!user ? "Sign in" : user.email}
            </span>
            <div>
              <span className={classes.optionLineTwo}>Account & Lists</span>
              <OverlayTrigger
                show={showLoginPopover}
                placement="bottom"
                overlay={loginPopover}
              >
                <ArrowDropDownOutlinedIcon
                  className={classes.dropdownIcon}
                  onMouseEnter={handleLoginOnMouseEnter}
                  onMouseLeave={handleLoginOnMouseLeave}
                />
              </OverlayTrigger>
            </div>
          </div>
        </Link>

        <Link to="/orders" className={classes.link}>
          <div className={classes.order}>
            <span className={classes.optionLineOne}>Returns </span>
            <span className={classes.optionLineTwo}>& Orders</span>
          </div>
        </Link>

        <Link to="/checkout" className={classes.link}>
          <div className={classes.optionBasket}>
            <div className={classes.image}></div>
            <span className={classes.item}>{basket?.length}</span>
            <div className={classes.option}>
              <span className={classes.optionLineOne}>Shopping- </span>
              <span className={classes.optionLineTwo}>Basket</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default Header;

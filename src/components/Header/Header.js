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
import Modal from "react-bootstrap/Modal";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [showFlagPopover, setShowFlagPopover] = useState(false);
  const [showLoginPopover, setShowLoginPopover] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      className={classes.flagPopoverBasic}
      onMouseEnter={handleFlagOnMouseEnter}
      onMouseLeave={handleFlagOnMouseLeave}
    >
      <Popover.Body>
        <div className={classes.flagPopoverBody}>
          <span className={classes.navItem}>
            <span className={classes.languageText}>
              Change language
              <Link to="/help" className={classes.learnMore}>
                Learn more
              </Link>
            </span>
          </span>
          <span className={classes.navText}>
            <i className={classes.leftIcon}></i>
            <span>Deutsch - DE</span>
          </span>
          <div className={classes.navDivider}></div>
          <span>
            <span className={classes.navText}>
              <i className={classes.leftIcon}></i>
              <span>English - EN</span>
            </span>
            <span className={classes.navText}>
              <i className={classes.leftIcon}></i>
              <span>čeština - CS</span>
            </span>
            <span className={classes.navText}>
              <i className={classes.leftIcon}></i>
              <span>Nederlands - NL</span>
            </span>
            <span className={classes.navText}>
              <i className={classes.leftIcon}></i>
              <span>polski - PL</span>
            </span>
            <span className={classes.navText}>
              <i className={classes.leftIcon}></i>
              <span>Türkçe - TR</span>
            </span>
          </span>
          <div className={classes.navDivider}></div>
          <span className={classes.navItem}>
            <span className={classes.navCurrencyText}>
              Change currency
              <Link to="/help" className={classes.learnMore}>
                Learn more
              </Link>
            </span>
          </span>
          <span className={classes.navItem}>
            <span className={classes.navCurrencyText}>
              <span>
                <span>€ </span>- <span>EUR </span>- Euro
                <span className={classes.changeCurrency}>Change</span>
              </span>
            </span>
          </span>
          <div className={classes.navDivider}></div>
          <span className={classes.navItem}>
            <span className={classes.navCurrentLocationText}>
              <i className={classes.navFlag}></i>
              You are shopping on
              <br /> Amazon.de
            </span>
          </span>
          <span className={classes.navText}>
            <div className={classes.changeCountry}>Change country/region</div>
          </span>
        </div>
      </Popover.Body>
    </Popover>
  );
  const loginPopover = (
    <Popover
      id="popover-basic"
      className={classes.loginPopoverBasic}
      onMouseEnter={handleLoginOnMouseEnter}
      onMouseLeave={handleLoginOnMouseLeave}
    >
      <Popover.Header className={classes.loginPopoverHeader}>
        {!user && (
          <div className={classes.loginPopoverHeaderButton}>
            <Button
              className={classes.signInButton}
              variant="warning"
              size="sm"
              onClick={handleAuthenticaton}
            >
              Sign in
            </Button>
            <div className={classes.newUserText}>
              New customer ?{" "}
              <Link to="/login" className={classes.newUserTextLink}>
                Start here.
              </Link>
            </div>
          </div>
        )}
      </Popover.Header>
      <Popover.Body className={classes.loginPopoverBody}>
        <div className={classes.account}>
          <div className={classes.accountLeft}>
            <div className={classes.accountLeftHead}>Your Lists</div>

            <span className={classes.popoverText}>Your Account</span>
            <span className={classes.popoverText}>Your Orders</span>
            <span className={classes.popoverText}>Your Lists</span>
            <span className={classes.popoverText}>Your Lists</span>
            <span className={classes.popoverText}>Your Prime Video</span>
            <span className={classes.popoverText}>Your Prime Membership</span>
            <span className={classes.popoverText}>Your Watchlist</span>
            <span className={classes.popoverText}>My Prime Music</span>
          </div>
          <div className={classes.accountRight}>
            <div className={classes.accountRightHead}>Your Account</div>
            <span className={classes.popoverText}>Your Account</span>
            <span className={classes.popoverText}>Your Orders</span>
            <span className={classes.popoverText}>Your Lists</span>
            <span className={classes.popoverText}>Your Prime Video</span>
            <span className={classes.popoverText}>Your Prime Membership</span>
            <span className={classes.popoverText}>Your Watchlist</span>
            <span className={classes.popoverText}>My Prime Music</span>
            <span className={classes.popoverText}>Your Orders</span>
            <span className={classes.popoverText}>Your Lists</span>
            <span className={classes.popoverText}>Your Prime Video</span>
            <span className={classes.popoverText}>Your Prime Membership</span>
            <span className={classes.popoverText}>Your Watchlist</span>
            <span className={classes.popoverText}>My Prime Music</span>
            <span className={classes.popoverText}>Your Orders</span>
            <span className={classes.popoverText}>Your Lists</span>
            <span className={classes.popoverText}>Your Prime Video</span>
            <span className={classes.popoverText}>Your Prime Membership</span>
            <span className={classes.popoverText}>Your Watchlist</span>
            <span className={classes.popoverText}>My Prime Music</span>

            {user && (
              <div className={classes.signOut} onClick={handleAuthenticaton}>
                <span className={classes.popoverText}>Sign out</span>
              </div>
            )}
          </div>
        </div>
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

      <div className={classes.location} onClick={handleShow}>
        <div className={classes.locationIcon}></div>
        <div className={classes.option}>
          <span className={classes.optionLineOne}>Hello</span>
          <span className={classes.optionLineTwo}>Select your address</span>
        </div>
      </div>
      <Modal
        centered
        scrollable={true}
        restoreFocus={false}
        show={show}
        onHide={handleClose}
        animation={false}
      >
        <Modal.Header>
          <Modal.Title>
            <h5>
              <strong>Choose your location</strong>
            </h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={classes.bodyPartOne}>
            <div>
              Delivery options and delivery speeds may vary for different
              locations
            </div>
            <div className={classes.modalButton}>
              <Link to="/login">
                <Button variant="warning" size="sm">
                  Sign in to see your addresses
                </Button>
              </Link>
            </div>
          </div>
          <div className={classes.bodyPartTwo}>
            <div>or enter a postal code in Germany</div>
            <div>
              <input type="text"></input>
              <Button type="submit" variant="light" size="sm">
                Apply
              </Button>
            </div>
            <div>or</div>
            <div>
              <DropdownButton
                id="dropdown-basic-button"
                variant="light"
                size="sm"
                title="Deliver outside Germany"
              >
                <Dropdown.Item href="#/action-1">Austria</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Netherland</Dropdown.Item>
                <Dropdown.Item href="#/action-3">England</Dropdown.Item>
              </DropdownButton>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" size="sm" onClick={handleClose}>
            Done
          </Button>
        </Modal.Footer>
      </Modal>

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

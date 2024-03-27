import React, { useState } from "react";
import classes from "./Footer.module.css";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import LanguageIcon from "@mui/icons-material/Language";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";

import { Link } from "react-router-dom";
import Flag from "react-world-flags";
import { OverlayTrigger, Popover } from "react-bootstrap";

function Footer() {
  const [showLanguagePopover, setShowLanguagePopover] = useState(false);

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const handleLanguageOnMouseEnter = () => {
    setShowLanguagePopover(true);
  };
  const handleLanguageOnMouseLeave = () => {
    setShowLanguagePopover(false);
  };
  const languagePopover = (
    <Popover
      id="popover-basic"
      className={classes.languagePopoverBasic}
      onMouseEnter={handleLanguageOnMouseEnter}
      onMouseLeave={handleLanguageOnMouseLeave}
    >
      <Popover.Body>
        <div className={classes.languagePopoverBody}>
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
        </div>
      </Popover.Body>
    </Popover>
  );

  return (
    <div>
      <div className={classes.footer}>
        <div className={classes.backToTop} onClick={handleClick}>
          <ExpandLessIcon />
          <span className={classes.backToTopText}>Back to top </span>
        </div>

        <div className={classes.footerRow}>
          <div className={classes.footerCol}>
            <div className={classes.footerColHead}>Get to Know Us</div>
            <ul>
              <li>About</li>
              <li>Career</li>
              <li>Press</li>
              <li>Amazon Cares</li>
              <li>Gift a smile</li>
            </ul>
          </div>
          <div className={classes.footerCol}>
            <div className={classes.footerColHead}>Connect with us</div>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
          <div className={classes.footerCol}>
            <div className={classes.footerColHead}>Make Money with Us</div>
            <ul>
              <li>Sell on fake Amazon</li>
              <li>Sell under fake Amazon</li>
              <li>Become an Affiliate</li>
              <li>Fulfilment by Amazon</li>
              <li>Amazon Pay</li>
            </ul>
          </div>
          <div className={classes.footerCol}>
            <div className={classes.footerColHead}>Connect with us</div>
            <ul>
              <li>COVID-19 and Amazon</li>
              <li>Your Account</li>
              <li>Returns Centre</li>
              <li>100% Purchase Protection</li>
              <li>Amazon App Download</li>
              <li>Amazon Assistant Download</li>
              <li>Help</li>
            </ul>
          </div>
        </div>

        <div className={classes.footerLine}></div>

        <div className={classes.footerBottom}>
          <Link to="/">
            <div className={classes.logoIcon}></div>
          </Link>

          <div className={classes.language}>
            <LanguageIcon className={classes.iconResize} />
            <span className={classes.optionLineOne}>English</span>
            <OverlayTrigger
              show={showLanguagePopover}
              placement="bottom"
              overlay={languagePopover}
            >
              <UnfoldMoreIcon
                className={classes.unfoldIconResize}
                onMouseEnter={handleLanguageOnMouseEnter}
                onMouseLeave={handleLanguageOnMouseLeave}
              />
            </OverlayTrigger>
          </div>
          <div className={classes.flag}>
            <Flag code={276} className={classes.flagResize} />
            <span className={classes.optionLineOne}>Germany</span>
          </div>
          <span className={classes.footerBottomMessage}>
            Amazon Clone with React & Firebase
          </span>
        </div>
      </div>
      <div className={classes.footerNavigation}>
        <span>Fake amazon clone developed by @Ihsan</span>
      </div>
    </div>
  );
}

export default Footer;

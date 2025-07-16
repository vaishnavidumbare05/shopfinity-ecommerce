import React from "react";
import "./footer.css";
import Logo from "../imgs/logo2.png";

function Footer() {
  return (
    <>
      <div className="footer">
        
      </div>
      <div className="extra-data">
        <div className="link-section">
          <div className="first-row">
            <p className="bold">Get to Know Us</p>
            <p>Make Money with Us</p>
            <p>SHOPfinity Payment</p>
            <p>Let Us Help You</p>
          </div>
          <div className="second-row">
            <p className="bold">About Shopfinity</p>
            <p>Sell products on Amazon</p>
            <p>SHOPfinity Business Card</p>
            <p>SHOPfinity and COVID-19</p>
          </div>
          <div className="third-row">
            <p className="bold">Connect with Us</p>
            <p>Sell apps on SHOPfinity</p>
            <p>Shop with Points</p>
            <p>Shipping Rates & Policies</p>
          </div>
          <div className="fourth-row">
            <p className="bold">Shopfinity Cares</p>
            <p>Become an Affiliate</p>
            <p>Reload Your Balance</p>
            <p>Returns & Replacements</p>
          </div>
        </div>
        <div className="link-section2">
          <div className="first-one">
            <div className="first-row">
              <p className="bold">Get to Know Us</p>
              <p>Make Money with Us</p>
              <p>SHOPfinity Payment</p>
              <p>Let Us Help You</p>
            </div>
            <div className="second-row">
              <p className="bold">About Amazon</p>
              <p>Sell products on Amazon</p>
              <p>SHOPfinity Business Card</p>
              <p>SHOPfinity and COVID-19</p>
            </div>
          </div>
          <div className="second-one">
            <div className="third-row">
              <p className="bold">Connect with Us</p>
              <p>Sell apps on Amazon</p>
              <p>Shop with Points</p>
              <p>Shipping Rates & Policies</p>
            </div>
            <div className="fourth-row">
              <p className="bold">Amazon Cares</p>
              <p>Become an Affiliate</p>
              <p>Reload Your Balance</p>
              <p>Returns & Replacements</p>
            </div>
          </div>
        </div>
        <div className="developer">
          <img src={Logo} className="amazon-img" />
          <div className="dev-data">
            <p>&copy; 2025 | Developed by </p>
            <a
              className="dev-link"
              href="https://www.linkedin.com/in/vaishnavi-dumbare/"
              target="_blank"
            >
              Vaishnavi Dumbare
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

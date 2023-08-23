import React from "react";
import logoImage from "src/assets/Logo.png";
import './Footer.scss';

const Footer = () => {
  return (
    <>
      <div className="footer-background">
        <div className="foot-container container">
          <div className="f-about">
            <div className="logo-content">
              <img src={logoImage} />
              <p>
                The biggest marketplace managed by <br /> Ideologist corp, which
                provides various kinds of daily needs and hobbies.
              </p>
            </div>

            <div className="foot-links-container">
              <ul className="f-links">
                <li className="link-directing">About Lenny</li>
                <li className="f-link">Information</li>
                <li className="f-link">Store Lactor</li>
                <li className="f-link">Bulk Purchase</li>
                <li className="f-link">Alteration Services</li>
                <li className="f-link">Gift Delivery Service</li>
                <li className="f-link">Live Station</li>
              </ul>

              <ul className="f-links">
                <li className="link-directing">About Lenny</li>
                <li className="f-link">FAQ</li>
                <li className="f-link">Return Policy</li>
                <li className="f-link">Privacy Policy</li>
                <li className="f-link">Accessibillity</li>
                <li className="f-link">Contact Us</li>
              </ul>

              <ul className="f-links">
                <li className="link-directing">Account</li>
                <li className="f-link">Membership</li>
                <li className="f-link">Address</li>
                <li className="f-link">Cupons</li>
              </ul>

              <div className="contact">
                <ul className="contact-us">
                  <li className="link-directing">Contact Us</li>
                  <li className="list">
                    For Lenny Consumer Complaint Services
                  </li>
                  <li className="list">
                    (684) 555-0102 and curtis.weaver@example.com
                  </li>
                </ul>
                <ul className="service">
                  <li className="list">Customers Complaint Service</li>
                  <li className="list">
                    Directorate Generate of the Republic of Indonesia
                  </li>
                  <li className="list">(480) 555-0103</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copy-right">
          <div className="copy-right-container container">
            <p>COPYRIGHT © LENNY CO., LTD. ALL RIGHTS RESERVED.</p>
            <div className="terms-privacy">
              <span>Terms of use</span>
              <span>Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

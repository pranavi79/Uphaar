import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
      </div>

      <div className="midFooter">
        <h1>Uphaar.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2021 &copy; Uphaar</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com">Instagram</a>
        <a href="http://github.com">GitHub</a>
        <a href="http://instagram.com">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
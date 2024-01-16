import React from "react";
import "./footer.css";
import logo from "../../assets/images/logo-footer.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo text-center">
          <img src={logo} alt="logo" />
        </div>
        <div className="right-section footer-section mb-4 mt-4">
          <div className="menu-container">
            <ul className="menu m-0">
              <li className="menu-item">
                <a href="/">الرئيسية</a>
              </li>
              <li className="menu-item">
                <a href="/">صوتيات</a>
              </li>
              <li className="menu-item">
                <a href="/">كتب</a>
              </li>
              <li className="menu-item">
                <a href="/">مقالات</a>
              </li>
              <li className="menu-item">
                <a href="/">صور</a>
              </li>
              <li className="menu-item">
                <a href="/">تواصل معنا</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copy-rights text-center">
          <p className="m-0">
            .حقوق الطبع والنشر &copy; 2023. جميع الحقوق محفوظة د/عمر كامل
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

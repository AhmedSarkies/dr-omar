import React from "react";
import "./hero-section.css";

import drOmar from "../../assets/images/dr.omar.png";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-container d-flex justify-content-between align-items-center">
        <div className="hero-img">
          <img src={drOmar} alt="hero-img" />
        </div>
        <div className="hero-text pe-3 pe-md-5">
          <h1 className="text-end text-white">
            الدكتور
            <br />
            <span className="name">عُـمــر كـامـــل </span>
            <br />
            <span className="next-prayer">الصلاة القادمة: </span>
            العصر
            <br />
            الموعد بعد : 02:46:32
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

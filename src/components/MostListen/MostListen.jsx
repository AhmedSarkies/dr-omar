import React from "react";

import icon from "../../assets/images/Vector (1).svg";
import musicIcon from "../../assets/images/music-icon.svg";
import favoriteIcon from "../../assets/images/favorite-icon.svg";
import playIcon from "../../assets/images/play.svg";
import downloadIcon from "../../assets/images/download.svg";
import prevIcon from "../../assets/images/Previous.svg";
import nextIcon from "../../assets/images/Next.svg";
import loopIcon from "../../assets/images/loop.svg";
import imgCard from "../../assets/images/image000.jpg";
import img1 from "../../assets/images/image 2 (0).png";
import img2 from "../../assets/images/image 2 (1).png";
import img3 from "../../assets/images/image 2 (2).png";
import img4 from "../../assets/images/image 2 (3).png";
import img5 from "../../assets/images/image 2 (4).png";

import "./most-listen.css";
import { Col, Row } from "reactstrap";

const listeningList = [
  {
    id: 1,
    img: img1,
    name: "عمر عبد الكافي",
    numAudio: 45,
  },
  {
    id: 2,
    img: img2,
    name: "أحمد بن يوسف السيد",
    numAudio: 19,
  },
  {
    id: 3,
    img: img3,
    name: "طارق بن محمد",
    numAudio: 20,
  },
  {
    id: 4,
    img: img4,
    name: "عبد الحي يوسف",
    numAudio: 32,
  },
  {
    id: 5,
    img: img5,
    name: "عبد العزيز بن عبد الله",
    numAudio: 14,
  },
];

const MostListen = () => {
  return (
    <section className="most-listen mt-3">
      <Row>
        <Col lg={4} md={12} className="text-center pe-3 pe-lg-5">
          <div className="right-side d-flex justify-content-center align-items-center mb-4">
            متابعة الاستماع
          </div>
          <Col
            lg="12"
            className="d-flex justify-content-center align-items-center"
          >
            <div className="card-listen d-flex flex-column justify-content-center align-items-center w-100">
              <div className="card-head text-center mb-3">
                <img src={imgCard} alt="img" />
              </div>
              <div className="card-body">
                <h6 className="title m-0">فضل شهر رمضان</h6>
                <span className="name">محمد صالح المنجد</span>
              </div>
              <div className="card-footer w-100">
                <input type="range" className="audio-bar w-100" />
                <div className="d-flex justify-content-between align-items-center gap-2">
                  <span>-2:36</span>
                  <span>1:21</span>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <img src={downloadIcon} alt="download icon" />
                  <img src={prevIcon} alt="prev icon" />
                  <img src={playIcon} alt="play icon" />
                  <img src={nextIcon} alt="next icon" />
                  <img src={loopIcon} alt="loop icon" />
                </div>
              </div>
            </div>
          </Col>
        </Col>
        <Col lg={8}>
          <div className="books-header d-flex justify-content-between align-items-center mb-4 mt-3 mt-lg-0">
            <div className="left-side">
              <a href="/">عرض المزيد</a>
            </div>
            <div className="right-side d-flex justify-content-center align-items-center gap-2">
              الاكثر إستماعاً
              <span className="icon">
                <img src={icon} alt="icon" />
              </span>
            </div>
          </div>
          {listeningList.map((item) => (
            <div
              className="books-item listening-item d-flex justify-content-center justify-content-lg-between align-items-center"
              key={item.id}
            >
              <Col lg="4" md="3" className="left d-flex justify-content-start align-items-center gap-1 gap-lg-4">
                <img className="play" src={playIcon} alt="" />
                <img className="favorite" src={favoriteIcon} alt="" />
              </Col>
              <Col className="center d-flex justify-content-center align-items-center">
                <p className="d-flex justify-content-center align-items-center gap-2 m-0">
                  <span className="d-flex justify-content-center align-items-center gap-0 gap-lg-2">
                    ملف صوتي
                    <span>{item.numAudio}</span>
                  </span>
                  <img src={musicIcon} alt="music icon" />
                </p>
              </Col>
              <Col className="right d-flex justify-content-end align-items-center gap-2 gap-lg-3">
                <h6>{item.name}</h6>
                <img src={item.img} alt={item.name} />
              </Col>
            </div>
          ))}
        </Col>
      </Row>
    </section>
  );
};

export default MostListen;

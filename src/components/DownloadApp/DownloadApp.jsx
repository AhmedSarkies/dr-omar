import React from "react";

import appStore from "../../assets/images/Group (1).png";
import googlePlay from "../../assets/images/Group.png";
import app from "../../assets/images/Group 1261153309.png";

import "./download-app.css";

const DownloadApp = () => {
  return (
    <section className="download-app mb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="left-side">
              <h2>تنزيل التطبيق مجانــاً</h2>
              <p>تصفح جميع الكتب والصوتيات المفضله لك</p>
            </div>
            <div className="download-btns-container">
              <div className="download-btns mt-lg-4 mt-0">
                <img src={appStore} alt="" />
                <img src={googlePlay} alt="" />
              </div>
              <div className="right-side">
                <img src={app} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;

import React from "react";
import Navbar from "../../components/Navbar";
import DownloadSteps from "../../components/DownloadSteps";
import Footer from "../../components/Footer";
import "./download.css";

// ------------------
import playStore from "../../images/Google play button.svg";
import barCode from "../../images/qrCode.svg";
import downloadPhone from "../../images/downloadIphone.svg";

const Download = () => {
  return (
    <div id="download">
      <Navbar />
      <div className="download-page">
        <div className="download-page-left">
          <h2>Get Started Right Now!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, lin elementum tellus.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Etiam eu turpis molestie, lin elementum
            tellus.
          </p>
          <div className="download-page-images">
            <img src={playStore} alt="play store" srcset="" />
            <img src={barCode} alt="bar code" srcset="" />
          </div>

          <div className="download-page-stats">
            <div>
              {" "}
              <span> 25K </span> <span> Users </span>
            </div>
            <div>
              {" "}
              <span> 30+ </span> <span> Partners </span>
            </div>
            <div>
              {" "}
              <span> 100+ </span> <span>Downloads </span>
            </div>
          </div>
        </div>

        <div className="download-page-right">
          <img src={downloadPhone} alt="iphone" srcset="" />
        </div>
      </div>
      {/* -------- Steps ------- */}
      <section className="download-steps">
        <DownloadSteps />
      </section>
      <Footer bgcolor="#00605F" linksColor="#fff" />
    </div>
  );
};

export default Download;

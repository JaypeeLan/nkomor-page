import React from "react";
import img1 from "../images/step1image.svg";
import img2 from "../images/step2image.svg";
import img3 from "../images/step3image.svg";
import arrow from "../images/Arrow 14.svg";
import "../downloadSteps.css"

const DownloadSteps = () => {
  return (
    <div id="download-steps">
      <div>
        <h2>step 1</h2>
        <img src={img1} alt="" srcset="" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <img src={arrow} alt="" srcset="" />
      <div>
        <h2>step 2</h2>
        <img src={img2} alt="" srcset="" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <img src={arrow} alt="" srcset="" />
      <div>
        <h2>step 3</h2>
        <img src={img3} alt="" srcset="" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  );
};

export default DownloadSteps;

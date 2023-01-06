import React from "react";
import "./features.css"


const Features = ({feature_header, feature_text, feature_img}) => {
  return (
    <div className="feature">
      <div className="feature-text">
        <h3>{feature_header}</h3>
        <p>
         {feature_text}
        </p>
      </div>

      <div className="feature-image">
        <img src={feature_img} alt="feature" srcset="" />
      </div>
    </div>
  );
};

export default Features;

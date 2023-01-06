import React from "react";
// -------------------------------------
import Navbar from "../../components/Navbar";
import Features from "../../components/Features";
import "./home.css";
// ------------------------------------
import circles from "../../images/circles.svg";
import iphones from "../../images/iphones.svg";
import GooglePlayStore from "../../images/Google play button.svg";
import line from "../../images/verical-line.png";
import youtube from "../../images/youtube.png";
import faq from "../../images/faq.svg";
import arrow from "../../images/faqArrow.png";

// ---------------------
import feat1 from "../../images/feature1.svg";
import feat2 from "../../images/Feature 2.svg";
import feat3 from "../../images/feature 3.svg";
import feat4 from "../../images/Feature 4.svg";

// -------------------------------------

const Home = () => {
  return (
    <>
      <div id="home">
        <Navbar
          navItemOne="Home"
          navItemTwo="About"
          navItemThree="Contact Us"
          navItemFour="FAQ"
          btnTitle="Download"
        />
        {/* ------------------------------------- */}

        <div className="home-details">
          {/* -------------------------------------------------- */}
          <div>
            <h1>Digital Health Payments Wallet</h1>
            <p>
              Nkomor app offers a Health Payments and Savings Wallet for
              Consumer Healthcare Expenses
            </p>
          </div>

          {/* ---------------------------------------- */}
          <div>
            <p>Used by many in Accra, Ghana</p>
            <img src={circles} alt="circles" />
            <img src={iphones} alt="iphones" />
          </div>

          {/* --------------------------------------- */}
        </div>

        <div>
          <img src={GooglePlayStore} alt="play store" />
        </div>

        {/* --------------- Divider ---------------------- */}
        <img src={line} alt="divider" style={{ width: "80%" }} />

        {/* --------------- Features ---------------- */}
        <section id="features">
          <h2>Our Features</h2>
          <Features
            feature_header="Health Payments Wallet"
            feature_text="Make payments to health agencies and redeem offers and discounts at hospitals, pharmacies, clinics, medical labs, retailers and healthcare companies using nkomorPay Wallet."
            feature_img={feat1}
          />
          <Features
            feature_header="Save towards your Personal Health Needs"
            feature_text="Safeguard against health scares and emergencies by locking funds for months or weeks. The Nkomor app allows your to deposit funds for immediate expenses payments at partner facilities."
            feature_img={feat2}
          />
          <Features
            feature_header="Access Health Services Instantly"
            feature_text="Nkomor caters to a range of healthcare services including in-app payments for requests such as lab test from diagnostic centres, booking a ward, Physician Callback Service and helpdesk chat."
            feature_img={feat3}
          />
          <Features
            feature_header="National Health Insurance Schemes"
            feature_text="Nkomor App partners with local, states and federal governments of African countries to drive adoption, implementation and usage of their national health insurance coverage and policies for citizens."
            feature_img={feat4}
          />
        </section>

        {/* --------- who are we-------- */}
        <section id="about">
          <div className="circle circle1"></div>
          <div>
            <h3>Who We Are</h3>
            <p>
              Nkomor Mobile App is a leading product of NewHealth Technologies
              Ltd. NewHealth is building the infrastructure for Modern
              Healthcare Services for Africa and is on a mission to accelerate
              Health Equity through Innovative and Patient-centered Healthcare
              and Financial Solutions.
            </p>
            <button>learn more</button>
          </div>
          <div className="circle circle2"></div>
        </section>

        {/* -------------- video ------------ */}
        <section id="video">
          <h3>Check out our video</h3>
          <div>
            <img src={youtube} alt="introduction video" srcset="" />
          </div>
        </section>

        {/* -------------- FAQ -------------------- */}
        <section id="faq">
          <div>
            <h3>Check out our FAQ</h3>

            <div>
              <p>View our recently asked questions</p>

              <a href="/">
                <img src={arrow} alt="arrow" srcset="" />
              </a>
            </div>
          </div>

          <div>
            <img src={faq} alt="questions" />
          </div>
        </section>

        {/* ------------------ Get Started ------------------ */}
        <section id="get-started">
          <h3>Ready to Get Started?</h3>
          <p>Download Our App Today!</p>
          <button>Download</button>
        </section>
      </div>
    </>
  );
};

export default Home;

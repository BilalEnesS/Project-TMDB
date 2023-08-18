import React from "react";
import { Link } from "react-router-dom";
import './GetPremiumPage.css'; // Yeni bir CSS dosyası oluşturun ve import edin
import Navbar from "./Navbar";
import Footer from "./Footer";
import FooterBottom from "./FooterBottom";

const GetPremiumPage = () => {
  return (
    <div>
      <Navbar />
      <div >
        <div className="premium-container">
        <h1 className="title-premium">Get Premium Packages</h1>
        <div className="premium-box-container">
          <div className="premium-box basic" style={{marginLeft:'10%'}}>
            <h2>Basic Package</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Price: $9.99/month</p>
            <Link to="/payment/basic" className="premium-link">
              Choose Plan
            </Link>
          </div>
          <div className="premium-box standard">
            <h2>Standard Package</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Price: $19.99/month</p>
            <Link to="/payment/standard" className="premium-link">
              Choose Plan
            </Link>
          </div>
          <div className="premium-box premium" style={{marginRight:'10%'}}>
            <h2>Premium Package</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Price: $29.99/month</p>
            <Link to="/payment/premium" className="premium-link">
              Choose Plan
            </Link>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    <FooterBottom/>
    </div>
  );
};

export default GetPremiumPage;

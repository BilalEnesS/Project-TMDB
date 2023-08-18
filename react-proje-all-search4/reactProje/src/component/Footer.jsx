import React from 'react';
import './footer.css';
import facebook from '../assets/facebook.jpg';
import twitter from '../assets/twitter.jpg';
import instagram from '../assets/instagram.jpg';
import youtube from '../assets/youtube.jpg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-3">
              <div className="footer-box">
                <h3>THE BASICS</h3>
                <p>About TMDB</p>
                <p>Contact Us</p>
                <p>Support Forums</p>
                <p>API</p>
                <p>System Status</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3">
              <div className="footer-box">
                <h3>GET INVOLVED</h3>
                <p>Contribution Bible</p>
                <p>3rd Party Applications</p>
                <p>Add New Movie</p>
                <p>Add New TV Show</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3">
              <div className="footer-box">
                <h3>COMMUNITY</h3>
                <p>Guidelines</p>
                <p>Discussions</p>
                <p>Leaderboard</p>
                <p>Twitter</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3">
              <div className="footer-box">
                <h3>SOCIAL</h3>
                <img src={facebook} alt="Facebook" />
                <img style={{marginLeft:'3%'}} src={instagram} alt="Instagram" />
                <img style={{marginLeft:'3%'}} src={twitter} alt="Twitter" />
                <img style={{marginLeft:'3%'}} src={youtube} alt="Youtube" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React, { useState, useEffect } from 'react';
import './ProfilPage.css';
import SerkanFoto from '../assets/iamageserkan.png';
import Navbar from './Navbar';
import apiPopular from '../apiPopular';
import SavedMovie from './SavedMovie';
import Footer from './Footer';
import FooterBottom from './FooterBottom';


const ProfilePage = () => {
    

  return (
    <div >
        <Navbar/>
        <div className='container'>
        <div className="profile-container">
      <div className="profile-image">
        <img src={SerkanFoto} alt="Profil Fotoğrafı" />
      </div>
      <div className="profile-details">
        <h2>Serkan Konakçı</h2>
        <p><b>Yaş:</b> 30</p>
        <p><b>Şehir:</b> İstanbul</p>
        <p><b>Telefon:</b> 0567 987 5678</p>
        <p><b>E-posta:</b> serkan@example.com</p>
        <h2 style={{marginTop:'40px'}}>Sevdiği Film Türleri</h2>
        <ul className="genre-list">
          <li>
            <span>Aksiyon:</span> <div className="percentage-bar" data-percent="70"></div>
          </li>
          <li>
            <span>Komedi:</span> <div className="percentage-bar" data-percent="40"></div>
          </li>
          <li>
            <span>Dram:</span> <div className="percentage-bar" data-percent="25"></div>
          </li>
          <li>
            <span>Bilim Kurgu:</span> <div className="percentage-bar" data-percent="15"></div>
          </li>
          <li>
            <span>Korku:</span> <div className="percentage-bar" data-percent="75"></div>
          </li>
        </ul>
      </div>
    </div>
    </div>
    <SavedMovie />
    <Footer/>
    <FooterBottom/>

    </div>
  );
};

export default ProfilePage;

import React from "react";
import './navbar.css';
import navbarfoto from '../assets/navbarfoto.png';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
const Navbar = () => {
    return (
      
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        
        <div className="container-fluid">
          <a style={{ marginLeft: '6%' }} className="navbar-brand" href="/">
            MUVIME
          </a>
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul style={{ marginLeft: '20%' }} className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Filmler
                </a>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/diziler">
                Diziler
              </Link>
            </li>
              <li className="nav-item">
                <a className="nav-link" href="/people">
                  Kişiler
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Daha Fazla+
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Filmler
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Diziler
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div style={{ marginRight: '5%' }} className="navbar-right ml-auto">
            <button
              
              className="button-eng" style={{marginTop:'-7px'}}
            >
              En
            </button>
            <span className="developer">
            <Link to="/profile" className="profile-link">
              <div
                style={{
                  color: '#000',
                  textAlign: 'right',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  lineHeight: 'normal',
                }}
              >
                Serkan Konakçı
              </div>
              <div
                style={{
                  color: '#000',
                  textAlign: 'right',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '10px',
                  fontStyle: 'normal',
                  fontWeight: 300,
                  lineHeight: 'normal',
                }}
              >
                Frontend Developer
              </div>
              </Link>
            </span>
            <span className="logo-right">
              <img src={navbarfoto} alt="" />
            </span>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  
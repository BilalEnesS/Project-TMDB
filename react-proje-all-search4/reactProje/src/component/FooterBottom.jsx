import React from 'react';
import './footerBottom.css';

const FooterBottom = () => {
  return (
    <footer className="footer-bottom">
      <div className="container">
        <div className="row my-2">
          <div
            style={{
              color: '#000',
              fontFamily: 'Inter, sans-serif',
              marginTop: '-5px',
              fontSize: '24px',
              fontStyle: 'normal',
              fontWeight: '800',
              lineHeight: 'normal',
            }}
            className="col-2"
          >
            MUVIME
          </div>
          <div
            style={{
              color: '#545454',
              fontFamily: 'Inter, sans-serif',
              fontSize: '12px',
              fontStyle: 'normal',
              fontWeight: '800',
              lineHeight: 'normal',
            }}
            className="col-3 me-auto"
          >
            © 2021 Tübitak. All rights reserved.
          </div>
          <div className="col-4">
            <div className="footer-right">
              <div>Terms of Use</div>
              <div style={{ marginLeft: '2%' }}>API Terms of Use</div>
              <div style={{ marginLeft: '2%' }}>Privacy Policy</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBottom;

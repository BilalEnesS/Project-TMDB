import React from 'react';
import { useParams } from 'react-router-dom'; // useParams kancasını import edin
import CastDetail from './CastDetail';
import Navbar from './Navbar';
import Footer from './Footer';
import FooterBottom from './FooterBottom';

const CastDetailPage = () => {
  const { id } = useParams(); // useParams kancasını kullanarak ID'yi alın

  return (
    <div>
        <Navbar/>
        <div className='container'>
            <h2 className='headerCast'>Cast Detail Page</h2>
            <CastDetail castId={id} />
        </div>
        <Footer/>
        <FooterBottom/>
    </div>
  );
};

export default CastDetailPage;

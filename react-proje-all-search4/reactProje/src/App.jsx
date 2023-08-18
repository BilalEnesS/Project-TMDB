import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home1 from './Home1';
import SearchResults from './SearchResults';
import Details from './Details';
import PeoplePage from './component/PeoplePage';
import SeriesList from './component/SeriesList';
import GetPremiumPage from './component/GetPremiumPage';
import CastDetailPage from './component/CastDetailPage'; // CastDetailPage bileşenini import edin
import ProfilePage from './component/ProfilPage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home1 />} />
          <Route path='/SearchResults' element={<SearchResults />} />
          <Route path='/Details/:id' element={<Details />} />
          <Route path="/people" element={<PeoplePage />} />
          <Route path="/diziler" element={<SeriesList />} />
          <Route path="/get-premium" element={<GetPremiumPage />} />
          <Route path="/castDetailPage/:id" element={<CastDetailPage />} /> {/* CastDetailPage rotasını ekleyin */}
          <Route path="/profile" element= {<ProfilePage/>}/>
          </Routes>
      </Router>
    </div>
  )
}

export default App;

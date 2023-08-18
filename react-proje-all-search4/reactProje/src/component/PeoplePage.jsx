import React, { useEffect, useState } from 'react';
import fetchPeople from './fetchPeople'; // İnsan verilerini çeken API işlevini içe aktarın
import Navbar from './Navbar';
import './PeoplePage.css'

function PeoplePage() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedPeople = await fetchPeople();
      setPeople(fetchedPeople);
    };

    fetchData();
  }, []);

  const groupSize = 4; 

  // Kişileri gruplara ayırmak
  const groupedPeople = [];
  for (let i = 0; i < people.length; i += groupSize) {
    groupedPeople.push(people.slice(i, i + groupSize));
  }

  return (
    <div>
    <Navbar/>
    <div className='container'>
      <h1 className='Popular-h1'>Popular People</h1>
      {groupedPeople.map((group, groupIndex) => (
        <div key={groupIndex} className="row">
          {group.map((person) => (
            <div key={person.id} className="col-md-3">
              <div className='card5' style={{marginBottom:'20px'}}>
                <img src={`https://image.tmdb.org/t/p/w200/${person.profile_path}`} alt={`${person.name} profile`} />
                <h5>{person.name}</h5>
                <p className='ratingPerson'>{person.popularity}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
      </div>
      
    </div>
  );
}

export default PeoplePage;

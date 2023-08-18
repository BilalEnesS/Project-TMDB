// import React from "react";
// import { Link } from "react-router-dom"; 

// const TMDBInfo = () => {
//     return (
//       <div style={{ textAlign: 'center' }}>
//         <Link to="/get-premium"> {/* Link bileşeni kullanarak GetPremiumPage'e yönlendirme */}
//         <button
//           style={{
            
//             borderRadius: '3px',
//             background: '#02B2E3',
//             padding: '6px 12px',
//             alignItems: 'flex-start',
//             gap: '10px',
//           }}
//           type="button"
//           className="btn btn-primary"
//         >
//           Get Premium
//         </button>
//       </Link>
//         <div
//           style={{
//             color: '#B8B8B8',
//             marginTop: '.5rem',
//             textAlign: 'center',
//             fontFamily: 'Inter, sans-serif',
//             fontSize: '16px',
//             fontStyle: 'normal',
//             fontWeight: 400,
//             lineHeight: '150%',
//           }}
//         >
//           <p>The TMDB Advantage</p>
//         </div>
//         <h2
//           style={{
//             color: '#424242',
//             textAlign: 'center',
//             fontFamily: 'Inter, sans-serif',
//             fontSize: '32px',
//             fontStyle: 'normal',
//             fontWeight: 400,
//             lineHeight: '120%',
//           }}
//         >
//           Millions of movies, TV shows and people to discover. Explore now.
//         </h2>
//         <p
//           style={{
//             color: '#545454',
//             textAlign: 'center',
//             marginLeft: '25%',
//             marginRight: '25%',
//             fontFamily: 'Inter, sans-serif',
//             fontSize: '16px',
//             fontStyle: 'normal',
//             fontWeight: 400,
//             lineHeight: '120%',
//           }}
//         >
//           The Movie Database (TMDB) is a community built movie and TV database. Every piece of data has been added by our
//           amazing community dating back to 2008. TMDb's strong international focus and breadth of data is largely unmatched
//           and something we're incredibly proud of. Put simply, we live and breathe community and that's precisely what
//           makes us different.
//         </p>
//       </div>
//     );
//   };
  
//   export default TMDBInfo;
import React from "react";
import { Link } from "react-router-dom";
import "./TMDBInfo.css"; // Stil dosyasını içe aktarın
import 'bootstrap/dist/css/bootstrap.css';


const TMDBInfo = () => {
  return (
    <div className={"tmdb-info-container"}>
      <Link to="/get-premium">
        <button className={"tmdb-info-button"} type="button">
          Get Premium
        </button>
      </Link>
      <div className={"tmdb-info-text"}>
        <p>The TMDB Advantage</p>
      </div>
      <p className={""} id="tmdb-info-heading">
        Millions of movies, TV shows and people to discover. Explore now.
      </p>
      <p className={""} id="tmdb-info-paragraph">
        The Movie Database (TMDB) is a community built movie and TV database. Every piece of data has been added by our
        amazing community dating back to 2008. TMDb's strong international focus and breadth of data is largely unmatched
        and something we're incredibly proud of. Put simply, we live and breathe community and that's precisely what
        makes us different.
      </p>
    </div>
  );
};

export default TMDBInfo;

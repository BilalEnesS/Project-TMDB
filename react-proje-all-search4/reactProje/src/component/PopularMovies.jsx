
const PopularMovies = () => {
    const [images, setImages] = useState([]);
  
    useEffect(() => {
      // Fetch popular movies data from the API when the component mounts
      const fetchPopularMovies = async () => {
        try {
          const results = await apiPopular();
          setImages(results);
        } catch (error) {
          console.error('Error fetching popular movies:', error);
        }
      };
  
      fetchPopularMovies();
    }, []);
  
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 style={{ marginLeft: '2%' }}>What's Popular</h1>
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <button className="btn btn-light" style={{ marginRight: '2%', width: '69px', height: '38px', textAlign: 'center' }}>More</button>
          </div>
        </div>
        <div className="container">
          <div className="card-container">
            {images.slice(0, 6).map((image, index) => (
              <div key={index} className="card">
                <img src={`https://image.tmdb.org/t/p/w500/${image.poster_path}`} alt="" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{image.title}</h5>
                  <p className="card-text">{image.genre}</p>
                  <div className="rate-box">
                    <p className="card-text">{image.duration} / {image.year}</p>
                    <p style={{ color: 'white' }} className="rating">{image.rating}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default PopularMovies;
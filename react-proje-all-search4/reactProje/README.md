# 🎬 TMDB Movie Application

A modern React-based movie application that allows users to search, browse, and discover movies using The Movie Database (TMDB) API.

## 🌟 Features

- **Movie Search**: Search for movies by title with real-time results
- **Popular Movies**: Browse trending and popular movies on the homepage
- **Movie Details**: View detailed information about movies including cast, genres, and runtime
- **Cast Information**: Explore actor profiles and their filmography
- **TV Series**: Browse and discover TV series
- **Responsive Design**: Modern UI that works on desktop and mobile devices
- **Premium Features**: Get premium access for enhanced features

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd react-proje-all-search4/reactProje
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173/`

## 📁 Project Structure

```
src/
├── component/           # React components
│   ├── Navbar.jsx     # Navigation component
│   ├── Footer.jsx     # Footer component
│   ├── CardItem.jsx   # Movie card component
│   ├── CastCard.jsx   # Actor card component
│   ├── PeoplePage.jsx # Actors/People page
│   ├── SeriesList.jsx # TV series listing
│   └── ...           # Other components
├── api.jsx            # TMDB API integration
├── apiPopular.jsx     # Popular movies API
├── apiDetails.jsx     # Movie details API
├── App.jsx            # Main application component
├── Home1.jsx          # Homepage component
├── SearchResults.jsx  # Search results page
└── Details.jsx        # Movie details page
```

## 🛠️ Technologies Used

- **React 18** - Frontend framework
- **Vite** - Build tool and development server
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API requests
- **Bootstrap** - CSS framework for styling
- **TMDB API** - Movie database API

## 📱 Pages & Routes

- `/` - Homepage with popular movies and search
- `/SearchResults` - Search results page
- `/Details/:id` - Movie details page
- `/people` - Actors and people page
- `/diziler` - TV series page
- `/get-premium` - Premium features page
- `/castDetailPage/:id` - Actor details page
- `/profile` - User profile page

## 🔧 API Configuration

The application uses TMDB API for movie data. The API key is configured in the following files:
- `src/api.jsx`
- `src/apiPopular.jsx`
- `src/apiDetails.jsx`

**Note**: You need to replace the API key with your own TMDB API key.

## 🎨 Key Components

### Home1.jsx
- Displays popular movies on the homepage
- Integrates search functionality
- Shows movie cards in a responsive grid

### SearchResults.jsx
- Handles movie search functionality
- Displays search results with movie information

### Details.jsx
- Shows detailed movie information
- Displays cast, genres, and movie metadata

### Navbar.jsx
- Navigation component with links to different pages
- Responsive design for mobile devices

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔒 Security

The project includes security vulnerabilities that should be addressed:
```bash
npm audit fix
```

## 📝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🤝 Support

For support and questions, please open an issue in the repository.

---

**Made with ❤️ using React and TMDB API**

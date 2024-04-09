import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './HomePage-Components/Navbar.css';
import './HomePage-Components/Discover.css';
import './HomePage-Components/BookShelf.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

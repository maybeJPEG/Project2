import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const AppHeader: React.FC = () => {
  const location = useLocation();

  return (
    <header>
      <h1>BooksBooks</h1>
      <nav>
        {location.pathname === '/' && (
          // Render the About link only on the Home screen
          <NavLink to="/AboutScreen">About</NavLink>
        )}
        {location.pathname === '/AboutScreen' && (
          // Render the Home link only on the About screen
          <NavLink to="/">Home</NavLink>
        )}
      </nav>
    </header>
  );
};

export default AppHeader;
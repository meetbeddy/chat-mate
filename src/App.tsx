import React, { useEffect } from 'react';
import { RouterProvider, useLocation } from 'react-router-dom';
import './App.css';
import { router } from './routes/Router';
import ReactGA from 'react-ga4';

const App: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize('G-1B4PL71XRD');
    ReactGA.send('pageview');
  }, []);

  useEffect(() => {

    ReactGA.send({ hitType: 'pageview', page: location.pathname });
  }, [location]);

  return (
    <RouterProvider router={router} />
  );
};

export default App;

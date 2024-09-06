import React from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes/Router';


const App: React.FC = () => {

  return (
    <RouterProvider router={router} />
  );
};

export default App;

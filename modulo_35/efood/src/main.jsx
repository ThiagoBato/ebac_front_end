import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './GlobalStyle.js';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import Home from './pages/Home/index.jsx';
import Profile from './pages/Profile/index.jsx';
import NoPage from './pages/NoPage/index.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'Home',
        element: <Home />,
      },
      {
        path: 'Perfil',
        element: <Profile />,
      },
      {
        path: '*',
        element: <NoPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
);

import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home/index.jsx';
import Profile from '../pages/Restaurants/index.jsx';
import NoPage from '../pages/NoPage/index.jsx';

const Router = () => (
  <Routes>
    <Route path="/" index element={<Home />} />
    <Route path="restaurante/:id" element={<Profile />} />
    <Route path="*" element={<NoPage />} />
  </Routes>
);

export default Router;

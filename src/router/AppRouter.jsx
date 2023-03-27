import { Route, Routes } from 'react-router-dom';

import Login from '../auth/pages/Login';
import Navbar from '../ui/components/navbar';
import HeroesRoutes from '../heroes/routes/HeroesRoutes';

function AppRouter() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/*' element={<HeroesRoutes />} />
      </Routes>
    </>
  )
};

export default AppRouter;

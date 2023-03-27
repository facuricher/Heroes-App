import { Navigate, Route, Routes } from 'react-router-dom';

import Dc from '../pages/Dc';
import Marvel from '../pages/Marvel';
import Navbar from '../../ui/components/navbar';
import Search from '../pages/Search';
import Hero from '../pages/Hero';

function HeroesRoutes() {
  return (
		<>
			<Navbar />
			<div className="container">
				<Routes>
					<Route path='/marvel' element={<Marvel />}/>
					<Route path='/dc' element={<Dc />} />
					<Route path='/search' element={<Search />} />
					<Route path='/hero' element={<Hero />} />

					<Route path='/' element={<Navigate to='/marvel' />} />
				</Routes>
			</div>
		</>
  )
};

export default HeroesRoutes;
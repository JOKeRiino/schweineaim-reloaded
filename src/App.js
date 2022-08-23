import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './Components/Sidebar';
import CookieBanner from './Components/CookieBanner';
import CookiePolicy from './Components/CookiePolicy';
import Footer from './Components/Footer';
import Analytics from './Pages/Analytics';
import Dashboard from './Pages/Dashboard';
import Maps from './Pages/Maps';
import Team from './Pages/Team';
import Map from './Pages/Map';
import MemberPage from './Pages/MemberPage';

function App() {
	return (
		<div className="App">
			<div className='AppGlass'>
				<Sidebar />
				<Routes>
					<Route path="/" element={<Dashboard />} />
					<Route path="/team" element={<Team />} />
					<Route path="/team/:name" element={<MemberPage />} />
					<Route path="/maps" element={<Maps />} />
					<Route path="/analytics" element={<Analytics />} />
					<Route path="/maps/:id" element={<Map />} />
					<Route path="/cookie-policy" element={<CookiePolicy />} />
				</Routes>
			</div>
			<Footer />
			<CookieBanner />
		</div>
	);
}

export default App;

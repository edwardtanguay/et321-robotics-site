import './App.scss';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { PageInfo } from './pages/PageInfo';
import { PageAbout } from './pages/PageAbout';
import { PageStartseite } from './pages/PageStartseite';

function App() {
	return (
		<div className="App">
			<h1>Info Site</h1>
			<nav>
				<NavLink to="/startseite">Startseite</NavLink>
				<NavLink to="/info">Info</NavLink>
				<NavLink to="/about">About</NavLink>
			</nav>

			<Routes>
				<Route path="/startseite" element={<PageStartseite />} />
				<Route path="/info" element={<PageInfo />} />
				<Route path="/about" element={<PageAbout />} />
				<Route path="/" element={<Navigate to="/startseite" replace />} />
			</Routes>
		</div>
	);
}

export default App;

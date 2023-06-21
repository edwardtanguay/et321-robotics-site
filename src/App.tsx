import './App.scss';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { PageAbout } from './pages/PageAbout';
import { PageStartseite } from './pages/PageStartseite';
import { PageProdukte } from './pages/PageProdukte';

function App() {
	return (
		<div className="App">
			<h1>Info Site</h1>
			<nav>
				<NavLink to="/startseite">Startseite</NavLink>
				<NavLink to="/produkte">Produkte</NavLink>
				<NavLink to="/about">About</NavLink>
			</nav>

			<Routes>
				<Route path="/startseite" element={<PageStartseite />} />
				<Route path="/produkte" element={<PageProdukte />} />
				<Route path="/about" element={<PageAbout />} />
				<Route path="/" element={<Navigate to="/startseite" replace />} />
			</Routes>
		</div>
	);
}

export default App;

import './App.scss';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { PageStartseite } from './pages/PageStartseite';
import { PageProdukte } from './pages/PageProdukte';
import { PageTechnologie } from './pages/PageTechnologie';
import { PageDownloads } from './pages/PageDownloads';

function App() {
	return (
		<div className="App">
			<h1>Info Site</h1>
			<nav>
				<NavLink to="/startseite">Startseite</NavLink>
				<NavLink to="/produkte">Produkte</NavLink>
				<NavLink to="/technologie">Technologie</NavLink>
				<NavLink to="/downloads">Downloads</NavLink>
			</nav>

			<Routes>
				<Route path="/startseite" element={<PageStartseite />} />
				<Route path="/produkte" element={<PageProdukte />} />
				<Route path="/technologie" element={<PageTechnologie />} />
				<Route path="/downloads" element={<PageDownloads />} />
				<Route path="/" element={<Navigate to="/startseite" replace />} />
			</Routes>
		</div>
	);
}

export default App;

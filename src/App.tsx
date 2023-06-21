import './App.scss';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { PageStartseite } from './pages/PageStartseite';
import { PageProdukte } from './pages/PageProdukte';
import { PageTechnologie } from './pages/PageTechnologie';
import { PageDownloads } from './pages/PageDownloads';
import { PageUnternehmen } from './pages/PageUnternehmen';
import { PageLoesungen } from './pages/PageLoesungen';

function App() {
	return (
		<div className="App">
			<h1>Nabtesko</h1>
			<nav>
				<NavLink to="/startseite">Startseite</NavLink>
				<NavLink to="/produkte">Produkte</NavLink>
				<NavLink to="/technologie">Technologie</NavLink>
				<NavLink to="/loesungen">Lösungen</NavLink>
				<NavLink to="/downloads">Downloads</NavLink>
				<NavLink to="/unternehmen">Unternehmen</NavLink>
			</nav>

			<Routes>
				<Route path="/startseite" element={<PageStartseite />} />
				<Route path="/produkte" element={<PageProdukte />} />
				<Route path="/technologie" element={<PageTechnologie />} />
				<Route path="/loesungen" element={<PageLoesungen />} />
				<Route path="/downloads" element={<PageDownloads />} />
				<Route path="/unternehmen" element={<PageUnternehmen />} />
				<Route path="/" element={<Navigate to="/startseite" replace />} />
			</Routes>
		</div>
	);
}

export default App;

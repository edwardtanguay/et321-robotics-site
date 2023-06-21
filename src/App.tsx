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
			<header>
				<div className="header1">
					<div className="Logo">
						<h1>Nabtesko</h1>
						<p>Precision Equipment Company</p>
					</div>
					<nav>
						<ul>
							<li>
								<NavLink to="/startseite">Startseite</NavLink>
							</li>
							<li>
								<NavLink to="/produkte">Produkte</NavLink>
							</li>
							<li>
								<NavLink to="/technologie">Technologie</NavLink>
							</li>
							<li>
								<NavLink to="/loesungen">Lösungen</NavLink>
							</li>
							<li>
								<NavLink to="/downloads">Downloads</NavLink>
							</li>
							<li>
								<NavLink to="/unternehmen">Unternehmen</NavLink>
							</li>
						</ul>
					</nav>
				</div>
				<div className="header2">
					<div className="contact">
						<a href="mailto:recipient@example.com" target="_blank">
							E-mail senden
						</a>
						<a href="tel:+123456789">+49 211 17379-0</a>
					</div>

					<form>
						<input type="text" name="query" placeholder="Suche" />
						<img src="./img/icon.png" alt="" />
					</form>

					<div className="sprache">
						<select id="language" name="language">
							<option value="en">English</option>
							<option value="de">Deutsch</option>
						</select>
						<input type="submit" value="Change Language" />
					</div>
				</div>
			</header>

			<Routes>
				<Route path="/startseite" element={<PageStartseite />} />
				<Route path="/produkte" element={<PageProdukte />} />
				<Route path="/technologie" element={<PageTechnologie />} />
				<Route path="/loesungen" element={<PageLoesungen />} />
				<Route path="/downloads" element={<PageDownloads />} />
				<Route path="/unternehmen" element={<PageUnternehmen />} />
				<Route
					path="/"
					element={<Navigate to="/startseite" replace />}
				/>
			</Routes>
		</div>
	);
}

export default App;

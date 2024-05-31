// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { Navbar } from './components/Navbar';
import { Guide } from './pages/Guide';
import Intro from './pages/Intro';
import Seguridad from './pages/Seguridad';

function App() {
	return (
		<BrowserRouter>
			<Navbar />

			<Routes>
				<Route path="/" element={<Homepage />}></Route>
				<Route path="/guia" element={<Guide />}></Route>
				<Route path="/intro" element={<Intro />}></Route>
				<Route path="/seguridad" element={<Seguridad />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

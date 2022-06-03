import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
	return (
		<BrowserRouter>
			<div className='app-wrapper'>

				<Header />

				<Navbar />

				<Main />

			</div>
		</BrowserRouter>
	);
};

export default App;

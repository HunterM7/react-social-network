import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Friends from './components/Friends';

const App = () => {
	return (
		<div className='app-wrapper'>

			<Header />

			<Navbar />

			<Main />

			<Friends />

		</div>
	);
};

export default App;

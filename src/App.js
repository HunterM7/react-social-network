import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Friends from './components/Friends/Friends';

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

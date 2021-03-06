import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';

const App = (props) => {
	return (
		<div className='app-wrapper'>

			<Header />

			<Navbar />

			<Main
				state={props.state}
				dispatch={props.dispatch}
			/>

		</div>
	);
};

export default App;

import './App.css';

const App = () => {
	return (
		<div>
			<Header />
			<div className="App">
				Hello
			</div>
			<Footer />
		</div>
	);
};

const Header = () => {
	return (
		<header className="header">Header</header>
	);
};

const Footer = () => {
	return (
		<footer className="footer">Footer</footer>
	);
};



export default App;

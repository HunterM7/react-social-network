import './Main.css'
import Profile from './Profile/Profile';
import Messages from './Messages/Messages';
import { Route, Routes } from 'react-router-dom';
import Feed from './Feed/Feed';

const Main = (props) => {
	return (
		<main className="main">

			<Routes>
				<Route path="/" element={<Feed />} />
				<Route path="/feed/" element={<Feed />} />
				<Route path="/messages/*" element={<Messages state={props.state} />} />
				<Route path="/profile/" element={<Profile />} />
			</Routes>

		</main>
	);
};

export default Main;
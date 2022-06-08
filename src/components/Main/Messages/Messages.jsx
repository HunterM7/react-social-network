import style from './Messages.module.css';
import Conversations from './Conversations/Conversations';
import Dialog from './Dialog/Dialog';
import { Route, Routes } from 'react-router-dom';

const Messages = (props) => {

	let routeItems = props.state.userDB.map(user => {
		return (
			<Route path={user.id.toString()} element={<Dialog
				id={user.id}
				name={user.name}
				status={user.status}
			/>} key={user.id} />
		)
	});

	return (
		<section className={style.messages}>

			<div className={style.conversations}>
				<Conversations state={props.state} />
			</div>

			<div className={style.dialog}>

				<Routes>

					{routeItems}

				</Routes>

			</div>

		</section>
	);
};

export default Messages;
import style from './Messages.module.css';
import Conversations from './Conversations/Conversations';
import Dialog from './Dialog/Dialog';
import { Route, Routes } from 'react-router-dom';

const Messages = () => {
	return (
		<section className={style.messages}>

			<div className={style.conversations}>
				<Conversations />
			</div>

			<div className={style.dialog}>

				<Routes>

					<Route path="1" element={<Dialog
						id='1'
						name='Bred Burkly'
						status='online'
					/>} />

					<Route path="2" element={<Dialog
						id='2'
						name='Kylee Myles'
						status='online'
					/>} />

					<Route path="3" element={<Dialog
						id='3'
						name='Eduardo Romero'
						status='online'
					/>} />

					<Route path="4" element={<Dialog
						id='4'
						name='Adele Santa-Miro'
						status='offline'
					/>} />

					<Route path="5" element={<Dialog
						id='5'
						name='Mark Duglas'
						status='online'
					/>} />

					<Route path="6" element={<Dialog
						id='6'
						name='Jessica Brian'
						status='online'
					/>} />

					<Route path="7" element={<Dialog
						id='7'
						name='Peter Brown'
						status='offline'
					/>} />

					<Route path="8" element={<Dialog
						id='8'
						name='Mila Harris'
						status='offline'
					/>} />

					<Route path="9" element={<Dialog
						id='9'
						name='David Bradley'
						status='offline'
					/>} />

				</Routes>

			</div>

		</section>
	);
};

export default Messages;
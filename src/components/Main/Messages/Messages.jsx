import style from './Messages.module.css';
import Conversations from './Conversations/Conversations';
import Dialog from './Dialog/Dialog';

const Messages = () => {
	return (
		<section className={style.messages}>

			<div className={style.conversations}>
				<Conversations />
			</div>

			<div className={style.dialog}>
				<Dialog />
			</div>

		</section>
	);
};

export default Messages;
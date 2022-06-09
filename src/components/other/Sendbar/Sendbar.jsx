import style from './Sendbar.module.css';
import { useRef } from 'react';

const Sendbar = () => {

	//* Sending message

	let newMessageText = useRef();

	const sendMessage = () => {
		console.log(newMessageText.current.value);
	};

	return (
		<section className={style.sendbar}>

			<div className={style.sendbar__message}>

				<textarea ref={newMessageText} className={style.sendbar__input} placeholder='Type something here...'></textarea>

				<div className={style.sendbar__buttons}>
					<button className={style.sendbar__btn}></button>
					<button className={style.sendbar__btn}></button>
				</div>

			</div>

			<div className={style['send-box']}>
				<button
					onClick={sendMessage}
					className={style.send__btn}
				></button>
			</div>

		</section>
	);
};

export default Sendbar;
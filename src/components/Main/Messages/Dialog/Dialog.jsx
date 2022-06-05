import style from './Dialog.module.css';
import DialogItem from './DialogItem/DialogItem';

const Dialog = (props) => {

	let statusValue = 'Offline now';

	if (props.status === 'online') statusValue = 'Active now';

	return (
		<section className={style.dialog}>

			<div className={style.header}>

				<div className={`
					${style.header__img}
					${style[`header__img--${props.id}`]}
				`}></div>

				<div className={style.header__name}>{props.name}</div>

				<div className={`
					${style.header__status}
					${style[`header__status--${props.status}`]}
				`}>{statusValue}</div>

				<div className={style.header__buttons}>
					<button className={style.header__btn}></button>
					<button className={style.header__btn}></button>
					<button className={style.header__btn}></button>
				</div>

			</div>

			<div className={style.main}>

				<div className={style.main__container}>

					<DialogItem
						id={props.id}
						status={props.status}
					/>

				</div>

			</div>

			<div className={style.footer}>

				<div className={style.footer__message}>

					<textarea className={style.footer__input} placeholder='Type something here...'></textarea>

					<div className={style.footer__buttons}>
						<button className={style.footer__btn}></button>
						<button className={style.footer__btn}></button>
					</div>

				</div>

				<div className={style['send-box']}>
					<button className={style.send__btn}></button>
				</div>

			</div>

		</section>
	);
};

export default Dialog;
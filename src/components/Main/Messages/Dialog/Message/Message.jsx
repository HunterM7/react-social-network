import style from './Message.module.css';

const Message = (props) => {

	let messageStyle = '';

	if (props.isOwner === 'true') messageStyle = 'owner';

	console.log(messageStyle);

	return (
		<div className={`
			${style.message}
			${style[messageStyle]}
		`}>

			<div className={`
				${style.message__img}
				${style[`message__img--id${props.id}`]}
				${style[props.isOwner !== 'true' ? props.status : '']}
			`}></div>

			<p className={style.message__text}>
				{props.message}
			</p>

			<div className={style.message__time}>
				{props.time}
			</div>

			<button className={style.message__btn}></button>

		</div >
	)
};

export default Message;
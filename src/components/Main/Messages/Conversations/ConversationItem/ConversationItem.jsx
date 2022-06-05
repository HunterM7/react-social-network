import style from './ConversationItem.module.css';
import { NavLink } from 'react-router-dom';

const ConversationItem = (props) => {

	//* Status

	let statusValue = `item__img`;

	switch (props.status) {
		case 'online': statusValue += `--online`; break;

		default:
			statusValue += `--offline`; break;
	}

	//* Favorite

	let favoriteValue = `item__favorite--` + props.isFavorite;

	//* Notifications

	let notificationValue = 'item__notification--';

	if (+props.notification > 0) notificationValue += 'enabled';

	return (
		<NavLink
			className={navData => navData.isActive ? `${style.active} ${style.item}` : `${style.item}`}
			to={`./${props.id}`}
		>

			<div className={`${style.item__img} ${style[statusValue]} ${style[`id${props.id}`]}`}></div>

			<div className={style.item__name}>{props.name}</div>

			<div className={style.item__time}>11:26 am</div>

			<div className={style.item__message}>{props.message}</div>

			<div className={`
				${style.item__notification}
				${style[notificationValue]}
			`}>{props.notification}</div>

			<div className={`
				${style.item__favorite}
				${style[favoriteValue]}
			`}></div>

		</NavLink>
	);
};

export default ConversationItem;
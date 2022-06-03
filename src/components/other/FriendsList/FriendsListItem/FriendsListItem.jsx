import style from './FriendsListItem.module.css';

const FriendsListItem = (props) => {

	let status = '';
	let styleName = `card__status`;

	switch (props.status) {
		case 'online': styleName += `--online`; break
		case "offline": styleName += `--offline`; break

		default:
			status = props.status;
	}

	return (
		<section className={style.card}>

			<div className={`${style.card__img} ${style[`id${props.id}`]}`}></div>

			<p className={style.card__name}>{props.name}</p>

			<p className={style[styleName]} >{status}</p>

		</section>
	);
};

export default FriendsListItem;
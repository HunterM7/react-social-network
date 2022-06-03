import style from './FriendsScrollItem.module.css';

const FriendsScrollItem = (props) => {

	return (
		<div className={style.card}>

			<div
				className={`${style.card__img} 
				${style[`id${props.id}`]}`}
			></div>

			<div className={style.card__name}>
				{props.name}
			</div>

			<button className={`${style.card__add} ${style[props.owner]}`}></button>

		</div>
	);
};

export default FriendsScrollItem;
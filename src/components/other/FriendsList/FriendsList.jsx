import style from './FriendsList.module.css';
import FriendsListItem from './FriendsListItem/FriendsListItem';

const FriendsList = () => {
	return (
		<div className={style.friends}>

			<div className={style.friends__header}>

				<div className={style.friends__title}>Friends</div>

				<button className={style.friends__options}></button>

			</div>

			<ul className={style.friends__list}>

				<li className={style.friends__item}>
					<FriendsListItem name='Bred Burkly' id='1' status='2 min' />
				</li>

				<li className={style.friends__item}>
					<FriendsListItem name='Kylee Myles' id='2' status='online' />
				</li>

				<li className={style.friends__item}>
					<FriendsListItem name='Eduardo Romero' id='3' status='8 min' />
				</li>

				<li className={style.friends__item}>
					<FriendsListItem name='Adele Santa-Miro' id='4' status='offline' />
				</li>

				<li className={style.friends__item}>
					<FriendsListItem name='Mark Duglas' id='5' status='online' />
				</li>

				<li className={style.friends__item}>
					<FriendsListItem name='Jessica Brian' id='6' status='online' />
				</li>

				<li className={style.friends__item}>
					<FriendsListItem name='Peter Brown' id='7' status='online' />
				</li>

				<li className={style.friends__item}>
					<FriendsListItem name='Mila Harris' id='8' status='2 hr' />
				</li>

				<li className={style.friends__item}>
					<FriendsListItem name='David Bradley' id='9' status='2h' />
				</li>

			</ul>

		</div>
	);
};

export default FriendsList;
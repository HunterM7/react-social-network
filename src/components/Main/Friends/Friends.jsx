import style from './Friends.module.css';
import Searchbar from '../../other/Searchbar/Searchbar';
import FriendsScroll from '../../other/FriendsScroll/FriendsScroll';
import FriendsList from '../../other/FriendsList/FriendsList';

const Friends = () => {
	return (
		<aside className={style.friends}>

			<div className={style.friends__searchbar}>
				<Searchbar placeholder='Search Friends!' />
			</div>

			<section className={style.friends__scroll}>
				<FriendsScroll />
			</section>

			<section className={style.friends__list}>
				<FriendsList />
			</section>

		</aside>
	);
};

export default Friends;
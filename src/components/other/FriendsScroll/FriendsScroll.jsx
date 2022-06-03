import style from './FriendsScroll.module.css';
import FriendsScrollItem from './FriendsScrollItem/FriendsScrollItem';

const FriendsScroll = () => {
	return (
		<section className={style.friendsscroll}>
			<ul className={style.scroll}>

				<li className={style.scroll__item}>
					<FriendsScrollItem id='0' name='Anton' owner='owner' />
				</li>

				<li className={style.scroll__item}>
					<FriendsScrollItem id='1' name='Bred' />
				</li>

				<li className={style.scroll__item}>
					<FriendsScrollItem id='2' name='Kylee' />
				</li>

				<li className={style.scroll__item}>
					<FriendsScrollItem id='3' name='Eduardo' />
				</li>

				<li className={style.scroll__item}>
					<FriendsScrollItem id='4' name='Adele' />
				</li>

				<li className={style.scroll__item}>
					<FriendsScrollItem id='5' name='Mark' />
				</li>

				<li className={style.scroll__item}>
					<FriendsScrollItem id='6' name='Jessica' />
				</li>

				<li className={style.scroll__item}>
					<FriendsScrollItem id='7' name='Peter' />
				</li>

				<li className={style.scroll__item}>
					<FriendsScrollItem id='8' name='Mila' />
				</li>

				<li className={style.scroll__item}>
					<FriendsScrollItem id='9' name='David' />
				</li>

			</ul>
		</section>
	);
};

export default FriendsScroll;
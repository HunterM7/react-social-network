import style from './Header.module.css';
import { NavLink } from 'react-router-dom';
import Searchbar from '../other/Searchbar/Searchbar';

const Header = () => {
	return (
		<header className={style.header}>

			<div className={style.header__logo}>

				<NavLink to='/feed' className={style.header__link}>Meetmax</NavLink>

			</div>

			<div className={style.header__searchbar}>
				<Searchbar placeholder='Search for something here...' />
			</div>


			<div className={style.header__profile}>

				<button className={style.profile}>
					<p className={style.profile__name}>Anton Hunter</p>
					<div className={style.profile__img}></div>
				</button>

			</div>

		</header>
	);
};

export default Header;
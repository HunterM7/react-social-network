import style from './Header.module.css';

const Header = () => {
	return (
		<header className={style.header}>

			<div className={style.header__logo}>

				<a href="#" className={style.header__link}>Meetmax</a>

			</div>

			<div className={style.header__search}>

				<input type="text" className={style.searchbar} placeholder="Search for something here..." />
				<button className={style.searchbar__btn}></button>

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
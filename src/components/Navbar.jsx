import style from './Navbar.module.css'

const Navbar = () => {
	return (
		<nav className={style.nav}>

			<ul className={style.nav__list}>

				<li className={style.nav__item}>
					<a className={style.nav__link} href="#">Profile</a>
				</li>

				<li className={style.nav__item}>
					<a className={style.nav__link} href="#">Messages</a>
				</li>

				<li className={style.nav__item}>
					<a className={style.nav__link} href="#">News</a>
				</li>

				<li className={style.nav__item}>
					<a className={style.nav__link} href="#">Music</a>
				</li>

				<li className={style.nav__item}>
					<a className={style.nav__link} href="#">Settings</a>
				</li>

			</ul>

		</nav>
	);
};

export default Navbar;
import NavItem from './Nav__item/Nav__item';
import style from './Navbar.module.css';

const Navbar = () => {
	return (
		<nav className={style.nav}>

			<ul className={style.nav__list}>

				<NavItem status='active' />

				<NavItem />

				<NavItem />

				<NavItem />

				<NavItem />

				<NavItem />

				<NavItem />

				<NavItem />

				{/* <li className={style.nav__item}>
					<a className={style.nav__link} href="#">My community</a>
				</li>

				<li className={style.nav__item}>
					<a className={style.nav__link} href="#">Messages</a>
				</li>

				<li className={`${style.nav__item} ${style.alert}`}>
					<a className={style.nav__link} href="#">Notification</a>
				</li>

				<li className={style.nav__item}>
					<a className={style.nav__link} href="#">Explore</a>
				</li>

				<li className={style.nav__item}>
					<a className={style.nav__link} href="#">Profile</a>
				</li>

				<li className={style.nav__item}>
					<a className={style.nav__link} href="#">Settings</a>
				</li>

				<li className={style.nav__item}>
					<a className={style.nav__link} href="#">Logout</a>
				</li> */}

			</ul>

		</nav>
	);
};

export default Navbar;
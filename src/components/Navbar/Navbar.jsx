import NavItem from './Nav__item/Nav__item';
import style from './Navbar.module.css';

const Navbar = () => {
	return (
		<nav className={style.nav}>

			<ul className={style.nav__list}>

				<NavItem name='Feed' status='active' />

				<NavItem name='My Community' />

				<NavItem name='Messages' />

				<NavItem name='Notification' updates='2' />

				<NavItem name='Explore' />

				<NavItem name='Profile' />

				<NavItem name='Settings' />

				<NavItem name='Logout' />

			</ul>

		</nav>
	);
};

export default Navbar;
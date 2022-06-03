import NavItem from './Nav__item/Nav__item';
import style from './Navbar.module.css';

const Navbar = () => {
	return (
		<nav className={style.nav}>

			<ul className={style.nav__list}>

				<NavItem name='Feed' rel='feed' />

				<NavItem name='My Community' rel='community' />

				<NavItem name='Messages' rel='messages' />

				<NavItem name='Notification' rel='notification' updates='2' />

				<NavItem name='Explore' rel='explore' />

				<NavItem name='Profile' rel='profile' />

				<NavItem name='Settings' rel='settings' />

				<NavItem name='Logout' rel='logout' />

			</ul>

		</nav>
	);
};

export default Navbar;
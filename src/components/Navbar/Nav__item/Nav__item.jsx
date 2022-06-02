import style from './Nav__item.module.css';

const NavItem = (props) => {

	let attribute =
		props.status ?
			`${style[props.status]}` :
			'';

	return (
		<li className={`${style.nav__item} ${attribute}`}>
			<a className={style.nav__link} href="#">Feed</a>
		</li>
	);
};

export default NavItem;
import style from './Nav__item.module.css';

const NavItem = (props) => {

	let attribute1 = props.status ? `${style[props.status]}` : '';
	let attribute2 = props.updates ? `${style.alert}` : '';

	return (
		<li className={`${style.nav__item} ${attribute1} ${attribute2}`}>
			<a className={style.nav__link} href="#">
				{props.name}
			</a>
		</li>
	);
};

export default NavItem;
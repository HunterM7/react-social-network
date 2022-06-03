import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Nav__item.module.css';

const NavItem = (props) => {

	let attribute = props.updates ? `${style.alert}` : '';

	return (
		<li className={`${style.nav__item} ${attribute}`}>

			<NavLink
				className={
					navData => navData.isActive ? `${style.active} ${style.nav__link}` : `${style.nav__link}`
				}
				to={`/${props.rel}`} >

				{props.name}

			</NavLink>

		</li >
	);
};

export default NavItem;
import style from './Searchbar.module.css';

const Searchbar = (props) => {

	return (
		<div className={`${style.searchbar}`}>

			<input type="text" className={style.searchbar__input} placeholder={props.placeholder} />

			<button className={style.searchbar__btn}></button>

		</div>
	);
};

export default Searchbar;
import style from './Infocard.module.css';

const Infocard = () => {
	return (
		<section className={style.card}>

			<h3 className={style.card__title}>INTRO</h3>

			<p className={`
				${style.card__text}
				${style['card__text--icon']}
				${style.site}
			`}>codepen.io</p>

			<p className={`
				${style.card__text}
				${style['card__text--icon']}
				${style.sex}
			`}>Male</p>

			<p className={`
				${style.card__text}
				${style['card__text--icon']}
				${style.birth}
			`}>Born July 28, 1992</p>

			<p className={`
				${style.card__text}
				${style['card__text--icon']}
				${style.region}
			`}>Moscow, Russia</p>

			<p className={`
				${style.card__text}
				${style['card__text--icon']}
				${style.fb}
			`}>Facebook hunterm7</p>

			<p className={`
				${style.card__text}
				${style['card__text--icon']}
				${style.tw}
			`}>Twitter hunterm7</p>

			<p className={`
				${style.card__text}
				${style['card__text--icon']}
				${style.inst}
			`}>Instagram hunterm7</p>

			<p className={style.card__text}>108,000 Followers</p>

			<p className={style.card__text}>37 Following</p>

			<button className={style.card__btn}>Edit Details</button>

		</section>
	);
};

export default Infocard;
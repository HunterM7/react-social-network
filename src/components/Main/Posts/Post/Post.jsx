import style from './Post.module.css';

const Post = () => {
	return (
		<section className={style.post}>

			<div className={style.header}>

				<div className={style.header__img}></div>

				<div className={style.header__name}>Mila Harris</div>

				<div className={style.header__metatags}>15h. Public</div>

				<button className={`
					option__btn
					${style.header__btn}
				`}></button>

			</div>

			<div className={style.main}>
				<img className={style.main__photo} src="/img/photos/post.jpeg" alt="post" />
			</div>

		</section>
	);
};

export default Post;
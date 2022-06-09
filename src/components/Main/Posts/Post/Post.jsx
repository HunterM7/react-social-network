import style from './Post.module.css';

const Post = (props) => {

	// id={user.id}
	// authorId={user.authorId}
	// likes={user.likes}
	// comments={user.comments}
	// shares={user.shares}

	// postTime={user.postTime}
	// category={user.category}
	// text={user.text}

	return (
		<section className={style.post}>

			<div className={style.header}>

				<div className={style.header__img} ></div>

				<div className={style.header__name}>UserName</div>

				<div className={style.header__metatags}>{props.postTime}. {props.category}</div>

				<button className={`
					optionBtn
					${style.header__btn}
				`}></button>

			</div>

			<div className={style.main}>

				<p className={style.main__text}>{props.text}</p>

				<ul className={style.main__list}>

					<li className={style.main__item}>
						<img className={style.main__photo} src="/img/photos/post.jpeg" alt="post" />
					</li>

				</ul>

				<div className={style.main__info}>

					<ul className={style.main__likes}>

						<li className={style.main__like}></li>

						<li className={style.main__like}></li>

						<li className={style.main__like}></li>

						<li className={style.main__like}>+9</li>

					</ul>

					<p className={style.main__comments}>{props.likes} Comments</p>

					<p className={style.main__share}>{props.shares} Share</p>

				</div>

				<ul className={style.buttons__list}>

					<li className={style.buttons__item}>
						<button className={`
							iconLink
							${style.button}
						`}>Like</button>
					</li>

					<li className={style.buttons__item}>
						<button className={`
							iconLink
							${style.button}
						`}>Comments</button>
					</li>

					<li className={style.buttons__item}>
						<button className={`
							iconLink
							${style.button}
						`}>Share</button>
					</li>

				</ul>

			</div>

		</section>
	);
};

export default Post;
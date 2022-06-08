import style from './Profile.module.css';
import Infocard from './Infocard/Infocard';
import NewPost from '../Posts/NewPost/NewPost';
import Post from '../Posts/Post/Post';
const Profile = () => {
	return (
		<section className={style.profile}>

			<div className={style.header}>

				<div className={style.header__bg}>
					<button className={style['header__bg-btn']}>Edit Cover Photo</button>
				</div>

				<div className={`${style.card} ${style.header__card}`}>

					<div className={style.card__img}>
						<div className={style.card__upload}>
							<button className={style.card__btn}></button>
						</div>
					</div>
					<p className={style.card__name}>Anton Hunter</p>
					<p className={style.card__desc}>Front-end Developer</p>

				</div>

				<button className={style['header__info-btn']}>Edit basic info</button>

			</div>

			<div className={`
				${style.profile__info}
				${style.main}
			`}>

				<div className={style.main__info}>
					<Infocard />
				</div>

				<div className={style.main__posts}>

					<div className={style.main__newPost}>
						<NewPost />
					</div>

					<div className={style.main__post}>
						<Post />
					</div>

				</div>

				<div className={style.main__sidebar}></div>

			</div>

		</section>
	);
};

export default Profile;
import './Profile.css'

const Profile = () => {
	return (
		<section className='profile'>

			<div className="header">

				<div className="header__bg">
					<button className="header__bg-btn">Edit Cover Photo</button>
				</div>

				<div className="card header__card">

					<div className="card__img"></div>
					<p className="card__name">Anton Hunter</p>
					<p className="card__desc">Front-end Developer</p>

				</div>

				<button className="header__info-btn">Edit basic info</button>

			</div>

			<div className="profile__info"></div>

		</section>
	);
};

export default Profile;
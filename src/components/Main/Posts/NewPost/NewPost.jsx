import style from './NewPost.module.css';

const NewPost = () => {
	return (
		<section className={style.newPost}>

			<form className={style.newPost__form} action="">

				<div className={style.newPost__top}>

					<div className={style.newPost__img}></div>

					<textarea className={style.newPost__text} placeholder="What's happening?" />

				</div>

				<div className={style.newPost__bottom}>

					<button className={style.newPost__live}>Live Video</button>

					<label className={style.newPost__input} >

						<input
							className={style.newPost__file}
							type="file"
							accept="image/*, video/*"
						/>

						Photo/Video

					</label>

					<button className={style.newPost__emoji}>Feeling</button>

					<button type='submit' className={style.newPost__submit}>Post</button>

				</div>

			</form>

		</section>
	);
};

export default NewPost;
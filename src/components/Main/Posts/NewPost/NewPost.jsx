import style from './NewPost.module.css';
import { React, useRef } from 'react';

const NewPost = (props) => {

	//* Pushing post

	let newPostText = useRef(null);

	const post = () => {

		let text = newPostText.current.value;

		props.addPost(text);
	};

	return (
		<section className={style.newPost}>

			<div className={style.newPost__form}>

				<div className={style.newPost__top}>

					<div className={style.newPost__img}></div>

					<textarea ref={newPostText} className={style.newPost__text} placeholder="What's happening?" />

				</div>

				<div className={style.newPost__bottom}>

					<button className={`
						iconLink
						${style.newPost__live}
					`}>Live Video</button>

					<label className={`
						iconLink
						${style.newPost__input}
					`} >

						<input
							className={style.newPost__file}
							type="file"
							accept="image/*, video/*"
						/>
						Photo/Video
					</label>

					<button className={`
						iconLink
						${style.newPost__emoji}
					`}>Feeling</button>

					<button
						// type='submit'
						onClick={post}
						className={style.newPost__submit}
					>Post</button>

				</div>

			</div>

		</section>
	);
};

export default NewPost;
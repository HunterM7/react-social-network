import style from './Feed.module.css';
import Friends from '../Friends/Friends';

const Feed = () => {
	return (
		<section className={style.feed}>

			<div className={style.news}>

			</div>

			<div className={style.friends}>
				<Friends />
			</div>

		</section>
	);
};

export default Feed;
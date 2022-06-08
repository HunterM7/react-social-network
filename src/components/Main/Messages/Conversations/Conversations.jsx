import style from './Conversations.module.css';
import Searchbar from './../../../other/Searchbar/Searchbar';
import ConversationItem from './ConversationItem/ConversationItem';

const Conversations = (props) => {

	let conversationList = props.state.userDB.map(user => {

		if (user.id !== 0) {
			return (
				<li className={style.conversation__item} key={user.id}>
					<ConversationItem
						id={user.id}
						name={user.name}
						status={user.status}
						isFavorite={user.isFavorite}
						notification={user.notification}
						message={user.lastMessage}
					/>
				</li>
			)
		} else { return null }

	});

	return (
		<section className={style.conversation}>

			<div className={style.conversation__header}>

				<div className={style.search}>
					<Searchbar placeholder='Search' />
				</div>

				<div className={style.favorite__container}>
					<button className={style['favorite-btn']}></button>
				</div>

			</div>

			<div className={style.conversation__container}>

				<ul className={style.conversation__list}>

					{conversationList}

				</ul>

			</div>

		</section>
	);
};

export default Conversations;
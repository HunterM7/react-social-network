import style from './Conversations.module.css';
import Searchbar from './../../../other/Searchbar/Searchbar';
import ConversationItem from './ConversationItem/ConversationItem';

const Conversations = () => {
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

					<li className={style.conversation__item}>
						<ConversationItem
							id='5'
							name='Mark Duglas'
							status='online'
							isFavorite='true'
							notification='1'
							message='Thanks buddy, you to...'
						/>
					</li>

					<li className={style.conversation__item}>
						<ConversationItem
							id='4'
							name='Adele Santa-Miro'
							status='offline'
							isFavorite='true'
							notification='0'
							message='We need to start a new...'
						/>
					</li>

					<li className={style.conversation__item}>
						<ConversationItem
							id='6'
							name='Jessica Brian'
							status='online'
							isFavorite='true'
							notification='2'
							message='We need to start project...'
						/>
					</li>

					<li className={style.conversation__item}>
						<ConversationItem
							id='7'
							name='Peter Brown'
							status='offline'
							isFavorite='false'
							notification='0'
							message='Hi! How are you?'
						/>
					</li>

					<li className={style.conversation__item}>
						<ConversationItem
							id='2'
							name='Kylee Myles'
							status='online'
							isFavorite='true'
							notification='0'
							message='It was a lond day...'
						/>
					</li>

					<li className={style.conversation__item}>
						<ConversationItem
							id='1'
							name='Bred Burkly'
							status='online'
							isFavorite='false'
							notification='3'
							message='Template message...'
						/>
					</li>

					<li className={style.conversation__item}>
						<ConversationItem
							id='3'
							name='Eduardo Romero'
							status='online'
							isFavorite='true'
							notification='0'
							message='Template message...'
						/>
					</li>

					<li className={style.conversation__item}>
						<ConversationItem
							id='8'
							name='Mila Harris'
							status='offline'
							isFavorite='false'
							notification='0'
							message='Template message...'
						/>
					</li>

					<li className={style.conversation__item}>
						<ConversationItem
							id='9'
							name='David Bradley'
							status='offline'
							isFavorite='true'
							notification='0'
							message='Template message...'
						/>
					</li>

				</ul>

			</div>

		</section>
	);
};

export default Conversations;
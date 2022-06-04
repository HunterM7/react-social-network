import style from './Dialog.module.css';
import Message from './Message/Message';

const Dialog = () => {
	return (
		<section className={style.dialog}>

			<div className={style.header}>

				<div className={style.header__img}></div>

				<div className={style.header__name}>Mark Duglas</div>

				<div className={style.header__status}>Active now</div>

				<div className={style.header__buttons}>
					<button className={style.header__btn}></button>
					<button className={style.header__btn}></button>
					<button className={style.header__btn}></button>
				</div>

			</div>

			<div className={style.main}>

				<div className={style.main__container}>
					<div className={style.main__list}>

						<div className={style.main__item}>
							<Message
								id='5'
								status='online'
								isOwner='false'
								time='17h ago'
								message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut exercitationem ratione officiis, doloribus maiores ea ut unde ex iure qui!'
							/>
						</div>

						<div className={style.main__item}>
							<Message
								id='0'
								status='online'
								isOwner='true'
								time='7h ago'
								message='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni dolorem pariatur cupiditate assumenda laboriosam dolor, blanditiis dignissimos, optio tempora magnam vero rerum soluta minus minima eum? Dignissimos nobis distinctio totam fugiat fuga ab quaerat expedita, non, harum dolores provident iste!'
							/>
						</div>

						<div className={style.main__item}>
							<Message
								id='5'
								status='online'
								isOwner='false'
								time='3h ago'
								message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus tempore fugit mollitia, earum non saepe explicabo qui vel repudiandae enim sed. Dignissimos aperiam obcaecati eos beatae libero ipsa ab quam.'
							/>
						</div>

						<div className={style.main__item}>
							<Message
								id='0'
								status='online'
								isOwner='true'
								time='3h ago'
								message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut exercitationem ratione officiis, doloribus maiores ea ut unde ex iure qui!'
							/>
						</div>

						<div className={style.main__item}>
							<Message
								id='0'
								status='online'
								isOwner='true'
								time='10m ago'
								message='Lorem ipsum dolor sit.'
							/>
						</div>

					</div>
				</div>

			</div>

			<div className={style.footer}>

				<div className={style.footer__message}>

					<textarea className={style.footer__input} placeholder='Type something here...'></textarea>

					<div className={style.footer__buttons}>
						<button className={style.footer__btn}></button>
						<button className={style.footer__btn}></button>
					</div>

				</div>

				<div className={style['send-box']}>
					<button className={style.send__btn}></button>
				</div>

			</div>

		</section>
	);
};

export default Dialog;
import style from './DialogItem.module.css';
import Message from '../Message/Message';

const DialogItem = (props) => {
	return (
		<div className={style.dialog}>

			<div className={style.dialog__item}>
				<Message
					id={props.id}
					status={props.status}
					isOwner='false'
					time='17h ago'
					message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut exercitationem ratione officiis, doloribus maiores ea ut unde ex iure qui!'
				/>
			</div>

			<div className={style.dialog__item}>
				<Message
					id='0'
					status={props.status}
					isOwner='true'
					time='7h ago'
					message='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni dolorem pariatur cupiditate assumenda laboriosam dolor, blanditiis dignissimos, optio tempora magnam vero rerum soluta minus minima eum? Dignissimos nobis distinctio totam fugiat fuga ab quaerat expedita, non, harum dolores provident iste!'
				/>
			</div>

			<div className={style.dialog__item}>
				<Message
					id={props.id}
					status={props.status}
					isOwner='false'
					time='3h ago'
					message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus tempore fugit mollitia, earum non saepe explicabo qui vel repudiandae enim sed. Dignissimos aperiam obcaecati eos beatae libero ipsa ab quam.'
				/>
			</div>

			<div className={style.dialog__item}>
				<Message
					id='0'
					status={props.status}
					isOwner='true'
					time='3h ago'
					message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut exercitationem ratione officiis, doloribus maiores ea ut unde ex iure qui!'
				/>
			</div>

			<div className={style.dialog__item}>
				<Message
					id='0'
					status={props.status}
					isOwner='true'
					time='10m ago'
					message='Lorem ipsum dolor sit.'
				/>
			</div>

		</div>
	)
};

export default DialogItem;
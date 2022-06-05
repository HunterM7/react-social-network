import style from './Messages.module.css';
import Conversations from './Conversations/Conversations';
import Dialog from './Dialog/Dialog';
import { Route, Routes } from 'react-router-dom';

const Messages = () => {

	let userDB = [
		{
			id: 0,
			name: 'Anton Hunter',
			status: 'online',
			isFavorite: true,
			notification: '0',
			lastMessage: 'Thanks buddy, you to...',
		},
		{
			id: 1,
			name: 'Bred Burkly Junior',
			status: 'offline',
			isFavorite: false,
			notification: '3',
			lastMessage: 'We need to start a new...',
		},
		{
			id: 2,
			name: 'Kylee Myles',
			status: 'online',
			isFavorite: true,
			notification: '0',
			lastMessage: 'We need to start project...',
		},
		{
			id: 3,
			name: 'Eduardo Romero',
			status: 'online',
			isFavorite: false,
			notification: '0',
			lastMessage: 'Hi! How are you?',
		},
		{
			id: 4,
			name: 'Adele Santa-Miro',
			status: 'offline',
			isFavorite: false,
			notification: '0',
			lastMessage: 'It was a lond day...',
		},
		{
			id: 5,
			name: 'Mark Duglas',
			status: 'online',
			isFavorite: true,
			notification: '1',
			lastMessage: 'XD Are you kiddin\'?',
		},
		{
			id: 6,
			name: 'Jessica Brian',
			status: 'online',
			isFavorite: true,
			notification: '2',
			lastMessage: 'Yeah, I think so...'
		},
		{
			id: 7,
			name: 'Peter Brown',
			status: 'offline',
			isFavorite: false,
			notification: '0',
			lastMessage: 'Let\'s go!'
		},
		{
			id: 8,
			name: 'Mila Harris',
			status: 'offline',
			isFavorite: false,
			notification: '0',
			lastMessage: 'I think it was a very bad...'
		},
		{
			id: 9,
			name: 'David Bradley',
			status: 'offline',
			isFavorite: true,
			notification: '0',
			lastMessage: 'Ok, fine!'
		},
	];

	let routeItems = userDB.map(user => {
		return (
			<Route path={user.id.toString()} element={<Dialog
				id={user.id}
				name={user.name}
				status={user.status}
			/>} key={user.id} />
		)
	});

	// let messagesDB = [
	// 	{ id: 0, message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae placeat reiciendis cupiditate quo. Corporis quos, quidem impedit in libero consequatur.' },
	// 	{ id: 1, message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Illum laboriosam earum provident.' },
	// 	{ id: 2, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
	// 	{ id: 3, message: 'Lorem ipsum dolor sit amet consectetur adipisicing.' },
	// 	{ id: 4, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Unde eligendi eaque laborum est vero, nostrum deleniti veritatis exercitationem quisquam quaerat nesciunt neque omnis incidunt rerum cumque, laboriosam, nihil atque esse!' },
	// 	{ id: 5, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis reiciendis quis incidunt cum voluptate dignissimos nam.' },
	// 	{ id: 6, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Laudantium, maxime asperiores obcaecati necessitatibus iure totam.' },
	// 	{ id: 7, message: 'Lorem ipsum dolor sit.' },
	// 	{ id: 8, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatem qui molestias hic laboriosam voluptate nisi alias illum vero provident dignissimos, optio ducimus minus in nulla.' },
	// 	{ id: 9, message: 'Lorem ipsum, dolor sit amet consectetur adipisicing.' },
	// ];

	return (
		<section className={style.messages}>

			<div className={style.conversations}>
				<Conversations users={userDB} />
			</div>

			<div className={style.dialog}>

				<Routes>

					{routeItems}

				</Routes>

			</div>

		</section>
	);
};

export default Messages;
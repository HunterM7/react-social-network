
let state = {

	userDB: [
		{
			id: 0,
			name: 'Anton Hunter',
			status: 'online',
			isFavorite: true,
			notification: '0',
			lastMessage: 'Thanks buddy, you to...',
			mainPhoto: '/public/img/photos/id0.jpeg',
		},
		{
			id: 1,
			name: 'Bred Burkly Junior',
			status: 'offline',
			isFavorite: false,
			notification: '3',
			lastMessage: 'We need to start a new...',
			mainPhoto: '/public/img/photos/id1.jpeg',
		},
		{
			id: 2,
			name: 'Kylee Myles',
			status: 'online',
			isFavorite: true,
			notification: '0',
			lastMessage: 'We need to start project...',
			mainPhoto: '/public/img/photos/id2.jpeg',
		},
		{
			id: 3,
			name: 'Eduardo Romero',
			status: 'online',
			isFavorite: false,
			notification: '0',
			lastMessage: 'Hi! How are you?',
			mainPhoto: '/public/img/photos/id3.jpeg',
		},
		{
			id: 4,
			name: 'Adele Santa-Miro',
			status: 'offline',
			isFavorite: false,
			notification: '0',
			lastMessage: 'It was a lond day...',
			mainPhoto: '/public/img/photos/id4.jpeg',
		},
		{
			id: 5,
			name: 'Mark Duglas',
			status: 'online',
			isFavorite: true,
			notification: '1',
			lastMessage: 'XD Are you kiddin\'?',
			mainPhoto: '/public/img/photos/id5.jpeg',
		},
		{
			id: 6,
			name: 'Jessica Brian',
			status: 'online',
			isFavorite: true,
			notification: '2',
			lastMessage: 'Yeah, I think so...',
			mainPhoto: '/public/img/photos/id6.jpeg',
		},
		{
			id: 7,
			name: 'Peter Brown',
			status: 'offline',
			isFavorite: false,
			notification: '0',
			lastMessage: 'Let\'s go!',
			mainPhoto: '/public/img/photos/id7.jpeg',
		},
		{
			id: 8,
			name: 'Mila Harris',
			status: 'offline',
			isFavorite: false,
			notification: '0',
			lastMessage: 'I think it was a very bad...',
			mainPhoto: '/public/img/photos/id8.jpeg',
		},
		{
			id: 9,
			name: 'David Bradley',
			status: 'offline',
			isFavorite: true,
			notification: '0',
			lastMessage: 'Ok, fine!',
			mainPhoto: '/public/img/photos/id9.jpeg',
		},
	],

	messages: [
		{ id: 0, message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae placeat reiciendis cupiditate quo. Corporis quos, quidem impedit in libero consequatur.' },
		{ id: 1, message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Illum laboriosam earum provident.' },
		{ id: 2, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
		{ id: 3, message: 'Lorem ipsum dolor sit amet consectetur adipisicing.' },
		{ id: 4, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Unde eligendi eaque laborum est vero, nostrum deleniti veritatis exercitationem quisquam quaerat nesciunt neque omnis incidunt rerum cumque, laboriosam, nihil atque esse!' },
		{ id: 5, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis reiciendis quis incidunt cum voluptate dignissimos nam.' },
		{ id: 6, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Laudantium, maxime asperiores obcaecati necessitatibus iure totam.' },
		{ id: 7, message: 'Lorem ipsum dolor sit.' },
		{ id: 8, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatem qui molestias hic laboriosam voluptate nisi alias illum vero provident dignissimos, optio ducimus minus in nulla.' },
		{ id: 9, message: 'Lorem ipsum, dolor sit amet consectetur adipisicing.' },
	],

	posts: [
		{
			id: 0,
			authorId: 0,
			likes: 12,
			comments: 3,
			shares: 17,
			postTime: '15h',
			category: 'Public',
			text: 'If you think adventure is dangerous, try routine, it’s lethal Paulo Coelho! Good morning all friends.',
		},
	]

};

export const addPost = (postMessage) => {

	let newPost = {
		id: 1,
		authorId: 0,
		likes: 116,
		comments: 27,
		shares: 34,
		postTime: '2h',
		category: 'Travel',
		text: postMessage,
	}

	console.log('posted');

	state.posts.push(newPost);
	console.log(state.posts);
};

export default state;
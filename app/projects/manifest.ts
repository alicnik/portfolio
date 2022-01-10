import type { Project } from '~/types';

const manifest: Project[] = [
	{
		name: 'Trello Clone',
		summary:
			'What started as a way of learning Java & Spring Boot turned into a quest for pixel-perfect front-end imitation. React/TypeScript and Next.js deployed to Vercel with a Heroku back end.',
		description: '',
		image: '/images/trello.webp',
		thumbnail: '/images/trello-sm.webp',
		url: 'https://trello-clone-client-mauve.vercel.app/',
		githubPrimary: 'https://github.com/alicnik/trello-clone-client',
		githubSecondary: 'https://github.com/alicnik/trello-clone',
		responsive: false,
		stack: [
			'React',
			'TypeScript',
			'Next.js',
			'Java',
			'Spring Boot',
			'Radix-UI',
			'Vanilla Extract CSS',
		],
	},
	{
		name: 'Portfolio Website',
		summary:
			'An update was overdue, Remix had recently gone open source and Tailwind v.3 had been released with a just-in-time compiler and arbitrary values. In other words, the stars aligned.',
		description: '',
		image: '/images/trello.webp',
		thumbnail: '/images/trello-sm.webp',
		url: 'https://alexnicholas.dev',
		githubPrimary: 'https://github.com/alicnik/portfolio',
		responsive: true,
		stack: ['React', 'TypeScript', 'Remix', 'Tailwind', 'Radix-UI'],
	},
	{
		name: 'Installfest CLI',
		summary:
			'While working as a Teaching Assistant, I wrote a CLI to automate the installation of the tools and packages required for students on the course.',
		description: '',
		image: '/images/trello.webp',
		thumbnail: '/images/trello-sm.webp',
		githubPrimary: 'https://github.com/alicnik/installfest',
		responsive: false,
		stack: ['TypeScript', 'Node.js', 'oclif'],
	},
	{
		name: 'SentiRed',
		summary:
			"SentiRed is a Reddit wrapper that uses the Google Natural Language API to measure the positive/negative sentiment you're exposed to as your browse Reddit posts and updates the styling to achieve emotional UI.",
		description: '',
		image: '/images/trello.webp',
		thumbnail: '/images/trello-sm.webp',
		url: 'https://sentired.herokuapp.com/',
		githubPrimary: 'https://github.com/alicnik/sentired',
		responsive: false,
		stack: [
			'React',
			'Styled Components',
			'Python',
			'Flask',
			'PostgreSQL',
			'Material-UI',
			'Yup',
			'React Hook Form',
		],
	},
	{
		name: 'Wilderness',
		summary:
			"For happy campers, this camping app helps you find campsites and attractions around America using the US government's Recreational Information Database.",
		description: '',
		image: '/images/trello.webp',
		thumbnail: '/images/trello-sm.webp',
		url: 'https://wilderapp.herokuapp.com/#/',
		githubPrimary: 'https://github.com/alicnik/wilderapp',
		responsive: true,
		stack: [
			'React',
			'Sass',
			'Node.js',
			'Express',
			'Mongoose',
			'MongoDB',
			'Cloudinary',
			'Mapbox',
			'Mocha',
			'Chai',
		],
	},
	{
		name: 'Pokeapi',
		summary:
			'A 48-hour pair-programming hackathon creating a Pokemon battle game. In hindsight, a touch ambitious given the time constraints, but goodness was it fun.',
		description: '',
		image: '/images/trello.webp',
		thumbnail: '/images/trello-sm.webp',
		url: 'https://alicnik.github.io/pokeapi/#/',
		githubPrimary: 'https://github.com/alicnik/pokeapi',
		responsive: false,
		stack: ['React', 'Sass', 'react-dnd', 'Bulma'],
	},
	{
		name: 'Minesweeper',
		summary:
			'For that 90s feel. A tribute to the classic game. As close as possible to a carbon copy of a Windows environment, with drag and drop, minimising, and a working clock.',
		description: '',
		image: '/images/trello.webp',
		thumbnail: '/images/trello-sm.webp',
		url: 'https://alicnik.github.io/minesweeper/',
		githubPrimary: 'https://github.com/alicnik/minesweeper',
		responsive: true,
		stack: ['HTML', 'CSS', 'JavaScript'],
	},
];

export default manifest;

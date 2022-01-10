import type { Project } from '~/types';

const manifest: Project[] = [
	{
		name: 'Trello Clone',
		description:
			'What started as a way of learning Java & Spring Boot turned into a quest for pixel-perfect front-end imitation. React/TypeScript and Next.js deployed to Vercel with a Heroku back end.',
		image: '/images/trello.webp',
		thumbnail: '/images/trello-sm.webp',
		url: 'https://trello-clone-client-mauve.vercel.app/',
		githubPrimary: 'https://github.com/alicnik/trello-clone-client',
		githubSecondary: 'https://github.com/alicnik/trello-clone',
		stack: ['React', 'TypeScript', 'Next.js', 'Java', 'Spring Boot'],
	},
];

export default manifest;

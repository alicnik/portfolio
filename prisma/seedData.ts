export const packages = {
	react: { name: 'React', url: 'https://github.com/facebook/react' },
	typeScript: {
		name: 'TypeScript',
		url: 'https://github.com/microsoft/typescript',
	},
	next: { name: 'Next.js', url: 'https://github.com/vercel/next.js' },
	reactQuery: {
		name: 'React Query',
		url: 'https://github.com/tannerlinsley/react-query',
	},
	java: { name: 'Java', url: 'https://www.java.com/en/' },
	springBoot: { name: 'Spring Boot', url: 'https://spring.io/' },
	radixUI: { name: 'Radix-UI', url: 'https://github.com/radix-ui' },
	vanillaExtract: {
		name: 'Vanilla Extract CSS',
		url: 'https://github.com/seek-oss/vanilla-extract',
	},
	node: { name: 'Node.js', url: 'https://github.com/nodejs/node' },
	oclif: { name: 'oclif', url: 'https://github.com/oclif/oclif' },
	styledComponents: { name: 'Styled Components' },
	python: { name: 'Python' },
	flask: { name: 'Flask' },
	postgres: { name: 'PostgreSQL' },
	materialUI: { name: 'Material-UI' },
	yup: { name: 'Yup' },
	reactHookForm: { name: 'React Hook Form' },
	remix: { name: 'Remix', url: 'https://github.com/remix-run/remix' },
	tailwind: {
		name: 'Tailwind',
		url: 'https://github.com/tailwindlabs/tailwindcss',
	},
	sass: { name: 'Sass' },
	express: { name: 'Express' },
	mongoose: { name: 'Mongoose' },
	mongoDB: { name: 'MongoDB' },
	cloudinary: { name: 'Cloudinary' },
	mapbox: { name: 'Mapbox' },
	mocha: { name: 'Mocha' },
	chai: { name: 'Chai' },
	reactDnd: { name: 'react-dnd' },
	bulma: { name: 'Bulma' },
	html: { name: 'HTML' },
	css: { name: 'CSS' },
	javascript: { name: 'JavaScript' },
};

export const projects = [
	{
		name: 'Trello Clone',
		slug: 'trello-clone',
		summary:
			'What started as a way of learning Java & Spring Boot turned into a quest for pixel-perfect front-end imitation. React/TypeScript and Next.js deployed to Vercel with a Heroku back end.',
		description:
			"I learned Java for a contract with General Assembly and built a back end for Trello with Spring Boot, mainly for learning purposes. It felt a shame to let it go to waste, though, so I decided to build the front end as accurately as possible, mainly to see how well I could work to a given design. As I built it out, I was keen to make the UX identical, too, which led to some interesting learning opportunities and was perhaps the part I found the most fun. As a project, it confirmed that while I am happy building full-stack apps, it's the front end that sparks the most joy.\nThe back end is hosted on Heroku and is consumed by a Next.js front end deployed to Vercel. It was highly educational working with Next.js and I was struck by how full-featured the framework is. It was also the first time I had used React Query, which was a game-changer for my approach to data fetching and mutation.\nNB If the app registration/login doesn't work at first, that may be because Heroku is still waking up. 10 seconds and a refresh should solve all ills.",
		image: '/images/trello.webp',
		thumbnail: '/images/trello-sm.webp',
		url: 'https://trello-clone-client-mauve.vercel.app/',
		githubPrimary: 'https://github.com/alicnik/trello-clone-client',
		githubSecondary: 'https://github.com/alicnik/trello-clone',
		responsive: false,
		published: true,
		projectDate: new Date(2022, 0),
		stack: [
			packages.react,
			packages.typeScript,
			packages.next,
			packages.reactQuery,
			packages.java,
			packages.springBoot,
			packages.radixUI,
			packages.vanillaExtract,
		],
	},
	{
		name: 'Portfolio Website',
		slug: 'portfolio-website',
		summary:
			'An update was overdue, Remix had recently gone open source and Tailwind v.3 had been released with a just-in-time compiler and arbitrary values. In other words, the stars aligned.',
		description:
			"I wrote my original portfolio in Svelte. There were some elements I liked, but I was 3 months out of bootcamp and knew much less than I now do about web development. I also wanted to update the stack as I was leaning more heavily into the React ecosystem. Remix had always interested me for its focus on the request/response cycle and the power of forms so when it went open source I delved straight in. I had worked with Tailwind in v.2 and had a slight love/hate relationship with it, but so many of my gripes were resolved in v.3, especially with the introduction of arbitrary values for one-off values that don't justify a config update.\nRemix was a delight to work with and felt like it drew on the best bits of PHP, React, and Web APIs in general. Tailwind felt a little gimmicky at first but it really came into its own when making the site responsive. The biggest challenges were working with SSR and hydration. While I'd already worked with SSR in Next.js on my Trello Clone, I had a lot of trouble implementing a dark mode setting that would load without a flash of the wrong theme and avoid errors in hydration.",
		published: true,
		image: '/images/portfolio.webp',
		thumbnail: '/images/portfolio-sm.webp',
		url: 'https://alexnicholas.dev',
		githubPrimary: 'https://github.com/alicnik/portfolio',
		responsive: true,
		projectDate: new Date(2021, 11),
		stack: [
			packages.react,
			packages.typeScript,
			packages.remix,
			packages.tailwind,
			packages.radixUI,
		],
	},
	{
		name: 'Installfest CLI',
		slug: 'installfest-cli',
		summary:
			'While working as a Teaching Assistant, I wrote a CLI to automate the installation of the tools and packages required for students on the course.',
		description:
			"Most of the first day of bootcamp is taken up by Installfest. During that process, everything is so new that the students don't learn a great deal, they just follow instructions until something goes wrong. This seemed inefficient so I built a CLI to automate the process. It installs Command Line Tools, Homebrew, zsh, git, VSCode, sets up SSH with the user's GitHub account, and sets up a global ESLint configuration.\nIt was eventually decided that my CLI took too much out of the student's hands and that the limited learning they got from Installfest was better than the total abstraction of my own implementation. Having completed two courses since building this CLI, I completely agree as all exposure is good exposure. This was an excellent learning experience nonetheless, particularly in the workings of the command line and spawned processes.",
		image: null,
		thumbnail: null,
		url: null,
		githubPrimary: 'https://github.com/alicnik/installfest',
		responsive: false,
		published: true,
		projectDate: new Date(2021, 5),
		stack: [packages.typeScript, packages.node, packages.oclif],
	},
	{
		name: 'SentiRed',
		slug: 'sentired',
		summary:
			"SentiRed is a Reddit wrapper that uses the Google Natural Language API to measure the positive/negative sentiment you're exposed to as your browse Reddit posts and updates the styling to achieve emotional UI.",
		description:
			"This was the final project on the coding bootcamp at General Assembly. I pair programmed with a fellow student in one of the more academic and original projects I've worked on, namely a look at how machines can understand language. The Google Natural Language API offered sentiment analysis which we chose to run on content where we could be sure there would be a lot of sentiments, namely Reddit. This analysis was handled by the back end, which was written in Python using Flask and SQL to serve the data to the front end. The UI presented as a wrapper for Reddit, allowing you to look at a post and some of their comments. Each post you clicked on would be sent to the Google API along with the comments for sentiment anaylsis. This was then turned into an aggregate score and applied to the user's account.\nOur next idea was to implement an emotional UI which updated according to the user's aggregate sentiment score. As a user's score went down, they would see harsher colours, pointier corners, less palatable fonts (Comic Sans being the worst). This dynamic theming persisted between sessions and gamified the Reddit experience. Hopefully for good.\nNB The Google Natural Language API credits have expired since the project was created and an alternative is currently being worked upon. A full README is available in the GitHub repository.",
		image: '/images/sentired.webp',
		thumbnail: '/images/sentired-sm.webp',
		url: 'https://sentired.herokuapp.com/',
		githubPrimary: 'https://github.com/alicnik/sentired',
		responsive: true,
		published: true,
		projectDate: new Date(2020, 6),
		stack: [
			packages.react,
			packages.styledComponents,
			packages.python,
			packages.flask,
			packages.postgres,
			packages.materialUI,
			packages.yup,
			packages.reactHookForm,
		],
	},
	{
		name: 'Wilderness',
		slug: 'wilderness',
		summary:
			"For happy campers, this camping app helps you find campsites and attractions around America using the US government's Recreational Information Database.",
		description:
			'This was a group project with two others. The brief was to build a full-stack MERN web application and deploy to Heroku using an Express API to serve data from a MongoDB database, consuming the data on a front end built with React. This was to be combined with a public API to supplement the data presented on the front end. It required thoughtful wireframes/user stories to establish core MVP and it had to deliver a visually impressive design. In addition, automated testing on at least one RESTful resource on the back end was required. The project was built collaboratively using source control (GitHub) to resolve any conflicts.\nA full README can be found in the GitHub repository link below.',
		image: '/images/wilderness.webp',
		thumbnail: '/images/wilderness-sm.webp',
		url: 'https://wilderapp.herokuapp.com/#/',
		githubPrimary: 'https://github.com/alicnik/wilderapp',
		responsive: true,
		published: true,
		projectDate: new Date(2020, 7),
		stack: [
			packages.react,
			packages.node,
			packages.sass,
			packages.express,
			packages.mongoose,
			packages.mongoDB,
			packages.cloudinary,
			packages.mapbox,
			packages.mocha,
			packages.chai,
		],
	},
	{
		name: 'Pokeapi',
		slug: 'pokeapi',
		summary:
			'A 48-hour pair-programming hackathon creating a Pokemon battle game. In hindsight, a touch ambitious given the time constraints, but goodness was it fun.',
		description:
			'I was partnered with one of the Teaching Assistants for 48 hours, during which the brief was to build something in React to consume a public API. My partner was keen to focus on styling, which left me to dive into functionality. I took the hackathon element a bit too seriously and after a couple of sleepless nights had produced a (buggy!) representation of a Pokemon battle scenario. This was the real eye-opener for me with regards to React and since then I prefer to work with React wherever possible.\nA full README can be found in the GitHub link below. The deployment works but I have left it in its buggy state to better represent what was achieved in 48 hours after having only learned JavaScript 4 weeks prior.',
		image: '/images/pokemon.webp',
		thumbnail: '/images/pokemon.webp',
		url: 'https://alicnik.github.io/pokeapi/#/',
		githubPrimary: 'https://github.com/alicnik/pokeapi',
		projectDate: new Date(2020, 6),
		responsive: false,
		published: true,
		stack: [packages.react, packages.sass, packages.reactDnd, packages.bulma],
	},
	{
		name: 'Minesweeper',
		slug: 'minesweeper',
		summary:
			'For that 90s feel. A tribute to the classic game. As close as possible to a carbon copy of a Windows environment, with drag and drop, minimising, and a working clock.',
		description:
			'The first project on the General Assembly coding bootcamp was to build a game using vanilla JavaScript. We were provided with a number of options such as PacMan, Frogger, etc. but it was Minesweeper that caught my eye. Perhaps presciently I thought that was the game I would be happy to play repeatedly, and as it turned out I needed that for the iterative development approach I ended up taking. The core functionality of Minesweeper is a recursive algorithm which analyses the squares surrounding the one the user clicked, then the squares around those if any of them are empty, and so on. This came to me quite quickly and it left me with a lot of time for styling and extras, which allowed me to complete a number of stretch goals, both prescribed in the brief and of my own invention.\nA full README can be found in the GitHub respository link below.',
		image: '/images/minesweeper.webp',
		thumbnail: '/images/minesweeper-sm.webp',
		url: 'https://alicnik.github.io/minesweeper/',
		githubPrimary: 'https://github.com/alicnik/minesweeper',
		projectDate: new Date(2020, 5),
		responsive: true,
		published: true,
		stack: [packages.html, packages.css, packages.javascript],
	},
];

export const feedback = [
	{
		value:
			"Alex's knowledge and industry experience was really helpful and his positive attitude too",
	},
	{
		value:
			'Alex helps further explain points in a digestible manner, always learn something from him.',
	},
	{
		value:
			'Really great TA- amazing at bug fixes, clearly has worked in industry and knows A LOT. Nothing to improve!',
	},
	{
		value:
			'Very confident and knowledgable. Can quickly catch onto a problem and offer help or guidance. Really easy going and encouraging',
	},
	{
		value:
			'Really clever, enthusiastic and motivated. Always tries to solve even the weirdest problem with engagement. Also can be quite entertaining.',
	},
	{
		value:
			'For one homework I really struggled with, Alex provided extraordinarily good feedback and information I could tell put a lot of effort to put together.',
	},
	{
		value:
			'Alex is so easy to approach with questions and problems and is great at working through, love the level of detail in the homework feedback which is really useful.',
	},
	{
		value:
			'Alex was an amazing TA who helped me and my team more than I could keep count of. His genuine enthusiasm is infectious, and he was so friendly I never hesitated messaging him for advice or technical help',
	},
	{
		value:
			"Alex was amazing. Great feedback on homework's. Was always there when needed. He explained complex problems in an understandable way and when he taught lessons they were really engaging and easy to understand.",
	},
	{
		value:
			"Oh where to begin! Alex is always always always there to help and thanks to him now I get excited by error messages as well. Debugging is fun!? He's never shy of suggestions and in hindsight it was great to not have him just give us the answers and guide us through so we'd discover them on our own.",
	},
	{
		value:
			"What I really enjoyed with Alex is that he made himself available to help, understood the problems I had, and always articulated solutions to accommodate my objectives. He's knowledgeable, generous with his time and his help. I think he went above and beyond what I expected from a TA and his assistance has definitely helped me progress and learn new things.",
	},
	{
		value:
			"Honestly, words can't describe how grateful I am to have Alex as a TA on this cohort. He's helped me get to the level of understanding I am at due to the way he helps me to figure out the answer and really understand. He makes sure it's in a way that I can work out it out for myself and I have had many penny-drop moments where things have made sense thanks to his prompts. He always makes the time to help and will go out of his way to find the answer for you if he's not 100% sure. It was a bit of a battle at times with other students to get his help! Amazing TA!",
	},
];

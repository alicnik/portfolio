import type { LinksFunction, MetaFunction } from '@remix-run/node';

export const links: LinksFunction = () => [
	{ rel: 'preload', as: 'image', href: '/images/profile-photo.webp' },
];

export const meta: MetaFunction = () => {
	return {
		title: 'AN | About',
		description:
			"Hi, I'm Alex. I came to coding later in life than I would have liked, but I'm making up for lost time.",
		'og:description':
			"Hi, I'm Alex. I came to coding later in life than I would have liked, but I'm making up for lost time.",
		'og:title': 'Alex Nicholas | About Me',
		'og:url': 'https://alexnicholas.dev/about/',
		'og:image': 'https://alexnicholas.dev/images/profile-photo.webp',
	};
};

export default function AboutRoute() {
	return (
		<article className="container mt-4 mx-auto">
			<section className="md:grid md:grid-cols-2 gap-6">
				<div>
					<h1 className="text-3xl font-display mb-6 md:text-4xl">Who am I?</h1>
					<p className="mb-4">
						Hi, I'm <span className="font-graphic text-lg">Alex</span>. I came
						to coding later in life than I would have liked, but I'm making up
						for lost time. This is me in a garden
						<span className="md:hidden">:</span>
						<span className="mobile:hidden"> &#8594;</span>
					</p>
					<img
						src="/images/profile-photo.webp"
						alt="profile shot of Alex in a garden looking at the camera"
						className="w-full mx-auto aspect-square rounded my-4 md:hidden shadow-md dark:shadow-gray-900"
					/>
					<p className="mb-2">I have two core beliefs:</p>
					<ol className="list-decimal list-inside mb-4">
						<li>
							That anything you want to do in software engineering is possible;
						</li>
						<li>
							That a computer won't beat me if I work hard enough at a problem.
						</li>
					</ol>
					<p className="mb-12">
						So far, that's held true (though possible does not always mean
						practicable). My fortuitous cocktail of optimism, thirst for
						knowledge, stubborn grit, curiosity, and willingness to "dive in"
						have served me well and I am now comfortable tackling most front-end
						problems that come my way.
					</p>
				</div>
				<img
					src="/images/profile-photo.webp"
					alt="profile shot of Alex in a garden looking at the camera"
					className="w-full mx-auto aspect-square rounded mobile:hidden md:block max-w-sm shadow-md dark:shadow-gray-900"
				/>
			</section>
			<section>
				<h2 className="text-3xl font-display mb-6">Where did I come from?</h2>
				<p className="mb-4">
					Geographically speaking, I was brought up in Kent but then my family
					moved to France, and later Spain, so there's been a heavy European
					influence. I like a siesta and have an addiction to gazpacho.
				</p>
				<p className="mb-4">
					I studied law, which was great for my problem-solving side, but did
					nothing for my creativity. Fortunately, I realised this quite early on
					and moved into less constrained workplaces in luxury leisure and
					hospitality.
				</p>
				<p className="mb-12">
					Computers have always seemed to like me, or perhaps I'm lucky with
					them, but they often seem to do what I want them to do. And I like
					them. Because of this, every job I've been in has ended up having a
					heavy tech element. I wrote my first bit of code in 2019&mdash;a
					Python script that interacted with the Apple News and HubSpot
					APIs&mdash;and applied for a coding bootcamp shortly after, resolved
					to turn coding into a career.
				</p>
			</section>
			<section>
				<h2 className="text-3xl font-display mb-6">Where am I going?</h2>
				<p className="mb-4">
					This sounds artificial, but I want to be the best coder I can be.
					Someone another developer would be glad to work with. Someone who
					writes clean, well-documented, maintainable code that a newcomer could
					navigate with relative ease.
				</p>
				<p>
					I want to keep learning and to develop my skills in an environment
					where my coding knowledge and abilities are constantly pushed to their
					limits.
				</p>
				{/* <p className="mb-4">
					At the moment, I'm looking for work, having just completed some
					contract work with General Assembly as a Teaching Assistant. I loved
					it but it wasn't pushing me.
				</p>
				<p className="mb-4">
					There's a cogent argument to be had that I'm slightly eccentric. I
					like to think it's endearing. The dream is to work somewhere similarly
					offbeat. The sort of place with an office dog (this is negotiable).
				</p>
				<p className="mb-4">
					Most significantly, I want to work somewhere kind and diverse.
					Somewhere that focuses on employee engagement and well-being. I dive
					into my work with both feet so it's important that I'm somewhere
					positive.
				</p>
				<p>
					That's a lot of wants, but if it sounds like your company then please{' '}
					<Link to="/contact" className="underline underline-offset-2">
						contact me
					</Link>
					!
				</p> */}
			</section>
		</article>
	);
}

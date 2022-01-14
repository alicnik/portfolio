import { Link, LinksFunction } from 'remix';

export const links: LinksFunction = () => [
	{ rel: 'preload', as: 'image', href: '/images/profile-photo.webp' },
];

export default function AboutRoute() {
	return (
		<article className="container mt-4">
			<section className="md:grid md:grid-cols-2 gap-6">
				<div>
					<h1 className="text-3xl font-display mb-6 md:text-4xl">Who am I?</h1>
					<p className="mb-4">
						Hi, I'm <span className="font-graphic text-lg">Alex</span>. I came
						to coding later in life than I would have liked, but I'm making up
						for lost time. This is me in a garden:
					</p>
					<img
						src="/images/profile-photo.webp"
						alt="my profile photo"
						className="w-full mx-auto aspect-square rounded my-4 md:hidden shadow-md dark:shadow-gray-900"
					/>
					<p className="mb-2">I have two core beliefs:</p>
					<ol className="list-decimal list-inside mb-4">
						<li>
							That anything you want to do is possible in software engineering;
						</li>
						<li>
							That a computer won't beat me if I work hard enough at a problem.
						</li>
					</ol>
					<p className="mb-12">
						So far, that's held true. Well, with the current state of
						technology, at least&mdash;I haven't yet been able to build a
						burrito printer.
					</p>
				</div>
				<img
					src="/images/profile-photo.webp"
					alt="my profile photo"
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
					and moved into less constrained workplaces in leisure and hospitality.
				</p>
				<p className="mb-12">
					Computers have always seemed to like me, or perhaps I'm lucky with
					them, but they often seem to do what I want them to do. And I like
					them. Because of this, every job I've been in has ended up having a
					heavy tech element. I wrote my first bit of code in 2019, a Python
					script that interacted with the Apple News and HubSpot APIs, and
					realised that this was something I should be doing full-time.
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
				<p className="mb-4">
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
				</p>
			</section>
		</article>
	);
}

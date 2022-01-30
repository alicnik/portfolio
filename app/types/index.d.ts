export type Project = {
	id: string;
	name: string;
	slug: string;
	summary: string;
	description: string;
	image?: string | null;
	thumbnail?: string | null;
	url?: string | null;
	githubPrimary: string;
	githubSecondary?: string | null;
	technologies: Technology[];
	responsive: boolean;
	published: boolean;
	projectDate: Date;
};

export type Technology = {
	id: string;
	name: string;
	url: string;
};

export type Testimonial = {
	id: string;
	value: string;
};

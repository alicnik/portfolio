export interface Project {
	name: string;
	slug: string;
	summary: string;
	description: string;
	image: string | null;
	thumbnail: string | null;
	url?: string;
	githubPrimary: string;
	githubSecondary?: string;
	responsive: boolean;
	stack: string[];
}

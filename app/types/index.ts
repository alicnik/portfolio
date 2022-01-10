export interface Project {
	name: string;
	summary: string;
	description: string;
	image: string;
	thumbnail: string;
	url?: string;
	githubPrimary: string;
	githubSecondary?: string;
	responsive: boolean;
	stack: string[];
}

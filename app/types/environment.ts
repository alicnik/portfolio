/* eslint-disable @typescript-eslint/no-namespace */

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			EMAIL: string;
			GITHUB_CLIENT_ID: string;
			GITHUB_CLIENT_SECRET: string;
		}
	}
}

export {};

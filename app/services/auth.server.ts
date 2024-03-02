import { Authenticator } from 'remix-auth';
import { GitHubStrategy } from 'remix-auth-github';
import { sessionStorage } from '~/services/session.server';
import { User } from '@prisma/client';
import { db } from '~/lib/db.server';

export const authenticator = new Authenticator<User>(sessionStorage);

const gitHubStrategy = new GitHubStrategy(
	{
		clientID: process.env.GITHUB_CLIENT_ID,
		clientSecret: process.env.GITHUB_CLIENT_SECRET,
		callbackURL: 'http://localhost:3000/auth/github/callback',
	},
	async ({ profile }) => {
		return db.user.findUniqueOrThrow({
			where: { email: profile.emails[0].value },
		});
	},
);

authenticator.use(gitHubStrategy);

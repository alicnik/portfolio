# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Code on GitHub

If you look through this code on GitHub, you'll see it uses tabs. This was a direct consequence of reading the following post: [Nobody talks about the real reason to use Tabs over Spaces](https://www.reddit.com/r/javascript/comments/c8drjo/nobody_talks_about_the_real_reason_to_use_tabs/). I arrived at this post via the following tweet, which has a number of additional points: [HEY! I learned a thing today about an argument I always assumed was bikeshedding, but apparently using TABS instead of spaces is actually better for #accessibility!](https://twitter.com/sarah_federman/status/1146544481556033537?lang=en-GB).

Essentially, it's suggested that tabs are easier for visually impaired developers to work with. There are dissenting opinions, but I landed on tabs due to the ease I have experienced in customising a view in an IDE when dealing with tabs as opposed to spacing. It seems that accessibility within the development community can be overshadowed by end-user accessibility concerns, but why not have both?

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`

### Using a Template

When you ran `npx create-remix@latest` there were a few choices for hosting. You can run that again to create a new project, then copy over your `app/` folder to the new project that's pre-configured for your target server.

```sh
cd ..
# create a new project, and pick a pre-configured host
npx create-remix@latest
cd my-new-remix-app
# remove the new project's app (not the old one!)
rm -rf app
# copy your app over
cp -R ../my-old-remix-app/app app
```

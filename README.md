# Chuck Norris Jokes

> This application was created using Next.js React framework and deoployed using Zeit's Now.sh.

## How to run

Clone this repo, install its dependencies and run the dev script.

```sh
git clone https://github.com/DawTaylor/chuck-norris-jokes
yarn install # npm install
yarn dev
```

## Routes

- `/` Jokes categories listings
- `/random` Random joke
- `/random/$CATEGORY` Random joke by category
- `/joke/$JOKE_ID` Single joke

## Features

- React + Redux
- SASS
- SSR
- Eslinter
- Husky
- Now.sh

## Key points

### Husky and Eslint

Husky allows us to easliy define Git Hooks and was used here to define a `pre-commit hook` which runs `eslint` to prevent us to send un-linted code to upstream.

```js
//.huskyrc.js
module.exports = {
  'hooks': {
    'pre-commit': 'node_modules/eslint/bin/eslint.js . --ext .js --ext .jsx --fix'
  }
}
```

### Server Side Routes

Server side routes need to handled for both local and Now.sh environments. We could handle it just on Now.sh side only, but this way the local environment would not work the same way the remote environment does.

```json
// now.json
{
  "routes": [
    {
      "src": "/random/(?<category>[^/]+)$", // Create a capture group naming it category
      "dest": "/random?category=$category" // Handle it as a querystring param on the background
    },
  ]
}
```

The local server is a little trickier. We need to create a custom `server.js` file that would be handled by Next.sj. In that server file we create a basic express server.  
Full [server.js](server.js).


```js
// server.js fragment
  server.get('/random/:category?', (req, res) => {
    const actualPage = '/random';
    const queryParams = { category: req.params.category };
    app.render(req, res, actualPage, queryParams);
  });
```

### Now.sh

This app was deployed using [Now.sh](https://now.sh) serverless deployments. It`s a easy to use remote environment with many cool stuff like automatic SSL encryption, domain aliasing, CDN cache backed by [CloudFlare](https://cloudflare.com) and "functional" deployments which are available eahc by an unique URL.

```json
// now.json
{
  "version": 2,
  "name": "chuck-norris",
  "alias": "chuck-norris.adalbertotaylor.com.br",
  "builds": [
    {
      "src": "next.config.js",
      "use": "@now/next"
    }
  ],
}
```

[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/DawTaylor/chuck-norris-jokes.git)

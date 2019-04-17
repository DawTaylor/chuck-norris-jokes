const express = require('express');
const next = require('next');
const routes = require('./routes');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
	const server = express();
	server.use(handler);

	server.get('/random/:category?', (req, res) => {
		const actualPage = '/random';
		const queryParams = { category: req.params.category };
		app.render(req, res, actualPage, queryParams);
	});

	server.get('/joke/:joke?', (req, res) => {
		const actualPage = '/joke';
		const queryParams = {
			joke: req.params.joke,
		};
		app.render(req, res, actualPage, queryParams);
	});

	server.listen(port, err => {
		if (err) throw err;
		console.log(`> Listening on http://localhost:${port}`);
	});
});

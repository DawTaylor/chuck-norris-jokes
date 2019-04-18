const nextRoutes = require('next-routes');

const routes = nextRoutes();

routes.add('random', '/random/:category?');
routes.add('joke', '/joke/:joke');

module.exports = routes;

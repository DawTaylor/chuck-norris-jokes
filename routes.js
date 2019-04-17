const nextRoutes = require('next-routes');
const routes = (module.exports = nextRoutes());

routes.add('random', '/random/:category?');
routes.add('joke', '/joke/:joke');

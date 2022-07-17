let routes = [];

const context = require.context(".", true, /route.js$/);

context.keys().forEach((key) => {
  routes.push(require(`${key}`).default);
});

let headers = ["Home", "About", "Projects", "Blogs"];

export default routes;
export { headers };

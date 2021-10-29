import homePage from '../pages/home';
import todoPage from '../pages/todo';
import notFound from '../pages/pageNotFound';

const routes = {
	'/': homePage,
	'/todoapp': todoPage,
};

const Router = function (pathname) {
	//create an isValidRoute to check the pathname in the url, and see if it matches what we have in the router.
	const isValidRoute = Object.keys(routes).find((key) => key === pathname);

	const app = document.querySelector('#app');
	app.innerHTML = '';

	window.history.pushState({}, pathname, window.location.origin + pathname);

	// if it doesn't match a pathname that we set up in the router, then we will append the 404 page.
	if (isValidRoute === undefined) {
		app.append(notFound());
	} else {
		app.appendChild(routes[window.location.pathname]());
	}
};

export { routes };
export default Router;
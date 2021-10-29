import todotitle from '../components/ui/header';
import tagline from '../components/ui/tagline';
import link from '../components/ui/link';

const homePage = function () {
	const page = document.createElement('div');
	page.className = 'container';
	const header = document.createElement('header');
	const todoApp = document.createElement('div');
	todoApp.className = 'todoAppDiv';
	const h1 = todotitle('h1', 'todotitle');
	const tag = tagline('p', 'todotagline');
	const todoappLink = link('To-Do App', '/todoapp', 'todoLink');

	page.append(header);
	header.append(h1);
	header.append(tag);
	header.append(todoApp);
	todoApp.append(todoappLink);

	return page;
};

export default homePage;

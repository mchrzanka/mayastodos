import makeElement from '../utils/makeElement';
import todotitle from '../components/ui/header';
import tagline from '../components/ui/tagline';
import link from '../components/ui/link';

const notFound = function () {
	const page = document.createElement('div');
	page.className = 'container';
	const header = document.createElement('header');
	const h1 = todotitle('h1', 'todotitle');
	const tag = tagline('p', 'todotagline');
	const backToSafety = link('Back to Home', '/');
	const template = `
    <div class= "pageNotFound">
    <h2>404 Page Not Found</h2>
    <p>To do: Find the right page!</p>
    </div>
    `;
	const pageHeader = makeElement(template);

	page.append(header);
	header.append(h1);
	header.append(tag);
	pageHeader.append(backToSafety);
	page.append(pageHeader);

	return page;
};

export default notFound;

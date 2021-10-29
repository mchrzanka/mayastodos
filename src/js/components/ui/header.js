import makeElement from '../../utils/makeElement';

const todotitle = function (
	elementType = 'h1',
	className = 'ui-heading',
	title = 'to do header',
	label = "Maya's Must-Dos"
) {
	const template = `<${elementType} class="${className}" title="${title}"> ${label} </ ${elementType}>`;
	const element = makeElement(template);

	return element;
};

export default todotitle;

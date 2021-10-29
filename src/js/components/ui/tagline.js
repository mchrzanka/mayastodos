import makeElement from '../../utils/makeElement';

const tagline = function (
	elementType = 'p',
	className = 'todotagline',
	title = 'to do tagline',
	label = 'The secret of your success is found in your daily routine.'
) {
	const template = `<${elementType} class="${className}" title="${title}"> ${label} </ ${elementType}>`;
	const element = makeElement(template);

	return element;
};

export default tagline;

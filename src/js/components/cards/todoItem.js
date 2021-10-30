import makeElement from '../../utils/makeElement';
import button from '../ui/button';

const todo = function ({ id, title, category, endDate, endTime, isComplete }) {
	const template = `
    <li class="todo-item ${category}" data-key="${id}">
        <p class="item-title">${title}</p>
        <p class="category ${category}">${category} Category</p>
        <p>Due: ${endDate}, ${endTime}</p>
        <p class="is-complete">${isComplete ? 'Completed' : ''}</p>
        <p><button id="delete" data-key="${id}"> Delete </button></p>
    </li>
    `;
	return makeElement(template);
};

export { todo };

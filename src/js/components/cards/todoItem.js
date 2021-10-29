import makeElement from '../../utils/makeElement';

const todo = function ({ id, title, category, endDate, endTime, isComplete }) {
	const template = `
    <li class="todo-item ${category}" data-key="${id}">
        <p class="item-title">${title}</p>
        <p class="category ${category}">${category} Category</p>
        <p>Due: ${endDate}, ${endTime}</p>
        <p class="is-complete">${isComplete ? 'Completed' : ''}</p>
    </li>
    `;

	return makeElement(template);
};

export { todo };

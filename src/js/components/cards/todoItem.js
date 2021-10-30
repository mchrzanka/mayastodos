import makeElement from '../../utils/makeElement';

const todo = function ({ id, title, category, endDate, endTime, isComplete }) {
	const template = `
    <li class="todo-item ${category}" data-key="${id}">
        <p class="item-title">${title}</p>
        <p class="category ${category}">${category} Category</p>
        <p>Due: ${endDate}, ${endTime}</p>
        <p class="is-complete">${isComplete ? 'Completed' : ''}</p>
        <div>
        <p><button class="edit-button" id="edit" data-key="${id}"> Edit </button></p>
        <p><button class="delete-button" id="delete" data-key="${id}"> Delete </button></p>
        </div>
    </li>
    `;

	return makeElement(template);
};

export { todo };

import makeElement from '../../utils/makeElement';
import button from '../../components/ui/button';
import todotitle from '../../components/ui/header';
import tagline from '../../components/ui/tagline';
import reducer from '../../store/reducers';
import Router from '../../routes/router';
import { getStore } from '../../store/store';
import { todo } from '../../components/cards/todoItem';
import { editForm } from '../../components/cards/form';
import { testEditForm } from '../../components/cards/testForm';

//sending in page properties
const addPage = function (props) {
	// Clean Up Function
	function cleanUp() {
		cancelButton.removeEventListener('click', onCancelDelete);
		addButton.removeEventListener('click', onAddTodo);
	}

	//function to cancel removing an item
	function onCancelDelete(e) {
		cleanUp();
		Router('/todoapp');
	}

	function onAddTodo() {
		const action = {
			type: 'add',
			payload: {
				id: document.getElementById('ID').value,
				category: document.getElementById('category').value,
				title: document.getElementById('title').value,
				isComplete: document.getElementById('isComplete').value,
				startDate: document.getElementById('startDate').value,
				startTime: document.getElementById('startTime').value,
				endDate: document.getElementById('endDate').value,
				endTime: document.getElementById('endTime').value,
			},
			cb: () => cleanUp(),
		};

		reducer(action);
		Router('/todoapp');
	}

	//Buttons
	const cancelButton = button('Cancel', 'cancel-button');
	const addButton = button('Add', 'add-button');
	//Button Listeners
	cancelButton.addEventListener('click', onCancelDelete);
	addButton.addEventListener('click', onAddTodo);

	const page = document.createElement('div');
	page.className = 'container';
	const div = document.createElement('div');
	div.className = 'add-page';
	const header = document.createElement('header');
	const h1 = todotitle('h1', 'todotitle');
	const tag = tagline('p', 'todotagline');
	let template = `
        <h2 class="add-title">Add New Todo</h2>
        `;

	const addTemplate = makeElement(template);
	const form = testEditForm();

	page.append(header);
	header.append(h1);
	header.append(tag);
	page.append(div);
	div.append(addTemplate);
	div.append(form);
	div.append(cancelButton, addButton);

	return page;
};

export default addPage;

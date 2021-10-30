import makeElement from '../../utils/makeElement';
import button from '../../components/ui/button';
import todotitle from '../../components/ui/header';
import tagline from '../../components/ui/tagline';
import reducer from '../../store/reducers';
import Router from '../../routes/router';
import { getStore } from '../../store/store';
import { todo } from '../../components/cards/todoItem';

//sending in page properties
const deletePage = function (props) {
	// Clean Up Function
	function cleanUp() {
		cancelButton.removeEventListener('click', onCancelDelete);
		deleteButton.removeEventListener('click', onDeleteTodo);
	}

	//function to cancel removing an item
	function onCancelDelete(e) {
		cleanUp();
		Router('/todoapp');
	}

	//Event handler function for removing the todo item
	function onDeleteTodo(e) {
		const index = getStore().findIndex((todo) => todo.id === props.id);
		const action = {
			type: 'delete',
			payload: { index },
			cb: () => cleanUp(),
		};

		reducer(action);
		Router('/todoapp');
	}

	//Buttons
	const cancelButton = button('Cancel', 'cancel-button');
	const deleteButton = button('Delete', 'delete-button');
	//Button Listeners
	cancelButton.addEventListener('click', onCancelDelete);
	deleteButton.addEventListener('click', onDeleteTodo);

	const page = document.createElement('div');
	page.className = 'container';
	const div = document.createElement('div');
	div.className = 'delete-page';
	const header = document.createElement('header');
	const h1 = todotitle('h1', 'todotitle');
	const tag = tagline('p', 'todotagline');
	let template = `
        <h2 class="delete-title">Delete ToDo?</h2>
        `;

	const deleteTemplate = makeElement(template);

	page.append(header);
	header.append(h1);
	header.append(tag);
	page.append(div);
	div.append(deleteTemplate);
	div.append(cancelButton, deleteButton);

	return page;
};

export default deletePage;

import makeElement from '../../utils/makeElement';
import button from '../../components/ui/button';
import todotitle from '../../components/ui/header';
import tagline from '../../components/ui/tagline';
import reducer from '../../store/reducers';
import Router from '../../routes/router';
import { getStore } from '../../store/store';
import { editForm } from '../../components/cards/form';

//sending in page properties
const editPage = function (props) {
	// Clean Up Function
	function cleanUp() {
		cancelButton.removeEventListener('click', onCancelEdit);
		editButton.removeEventListener('click', onEditTodo);
	}

	//function to cancel removing an item
	function onCancelEdit(e) {
		cleanUp();
		Router('/todoapp');
	}

	function onEditTodo() {
		const index = getStore().find((todo) => todo.id === props.id);
		const action = {
			type: 'edit',
			payload: { index },
			cb: () => cleanUp(),
		};

		reducer(action);
		Router('/todoapp');
	}

	//store the json object based on the id
	const todoItem = getStore().find((todo) => todo.id === props.id);

	//Buttons
	const cancelButton = button('Cancel', 'cancel-button');
	const editButton = button('Edit', 'edit-button');
	//Button Listeners
	cancelButton.addEventListener('click', onCancelEdit);
	editButton.addEventListener('click', onEditTodo);

	const page = document.createElement('div');
	page.className = 'container';
	const div = document.createElement('div');
	div.className = 'edit-page';
	const header = document.createElement('header');
	const h1 = todotitle('h1', 'todotitle');
	const tag = tagline('p', 'todotagline');
	const h2 = document.createElement('h2');
	const h2Text = 'Edit Todo';
	const form = editForm(todoItem);

	page.append(header);
	header.append(h1);
	header.append(tag);
	page.append(div);
	div.append(h2);
	h2.append(h2Text);
	div.append(form);
	div.append(cancelButton);
	div.append(editButton);

	return page;
};

export default editPage;

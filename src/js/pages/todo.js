//ui
import todotitle from '../components/ui/header';
import tagline from '../components/ui/tagline';
import button from '../components/ui/button';

//data
import todosUlList from '../components/cards/todolist';
import { todo } from '../components/cards/todoItem';
import { getStore } from '../store/store';

//router for navigating edits and deletes
import Router from '../routes/router';

//Display the todo list on the todo page.
const todoPage = function () {
	//add the todo ul component
	const listContainer = todosUlList();
	const todoList = getStore();
	console.log(todoList);

	//event handler function to delete. We grab the id of the todo item.
	function onDeleteTodo(e) {
		const todoId = { id: e.currentTarget.dataset.key };
		Router('/delete', todoId);
	}

	//event handler function to edit. We grab the id of the todo item.
	function onEditTodo(e) {
		const todoId = { id: e.currentTarget.dataset.key };
		Router('/edit', todoId);
	}

	//event handler function to add. We grab the id of the todo item. Put a timer on it because function was running before dom was loaded.
	setTimeout(onCreateNewTodo, 1000);

	function onCreateNewTodo() {
		const createNew = document.querySelector('.add-todo');
		createNew.addEventListener('click', addTodo);
	}

	function addTodo(e) {
		Router('/add');
	}

	//building ui
	const page = document.createElement('div');
	page.className = 'container';
	const header = document.createElement('header');
	const div = document.createElement('div');
	div.className = 'add-button';
	const h1 = todotitle('h1', 'todotitle');
	const tag = tagline('p', 'todotagline');
	const addButton = button('Create New', 'add-todo');

	//Check if there is any data. If there is, map it (creates a new array), and return each item to be placed into an li from the todo function.
	if (todoList.length !== 0) {
		const elements = todoList.map((item) => {
			return todo(item);
		});

		// take the ul from todolist.js and insert the li items into it.
		const ul = listContainer.querySelector('#todos');
		elements.forEach((item) => {
			item.querySelector('#delete').addEventListener('click', onDeleteTodo);
			item.querySelector('#edit').addEventListener('click', onEditTodo);
			ul.append(item);
		});
	}

	page.append(header);
	header.append(h1);
	header.append(tag);
	page.append(div);
	div.append(addButton);
	page.append(listContainer);

	return page;
};

export default todoPage;

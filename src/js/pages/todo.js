//ui
import todotitle from '../components/ui/header';
import tagline from '../components/ui/tagline';
import button from '../components/ui/button';

//data
import todosUlList from '../components/cards/todolist';
import { todo } from '../components/cards/todoItem';
import { getStore } from '../store/store';

//Display the todo list on the todo page.
const todoPage = function () {
	const page = document.createElement('div');
	page.className = 'container';
	//add the todo ul component
	const listContainer = todosUlList();

	const todoList = getStore();

	//header ui
	const header = document.createElement('header');
	const div = document.createElement('div');
	div.className = 'add-button';
	const h1 = todotitle('h1', 'todotitle');
	const tag = tagline('p', 'todotagline');
	const add = button('+', 'add-todo');

	//Check if there is any data. If there is, map it (creates a new array), and return each item places into an li from the todo function.
	if (todoList.length !== 0) {
		const elements = todoList.map((item) => {
			return todo(item);
		});

		// take the ul from todolist.js and insert the li items into it.
		const ul = listContainer.querySelector('#todos');
		elements.forEach((item) => {
			ul.append(item);
		});
	}

	page.append(header);
	header.append(h1);
	header.append(tag);
	page.append(div);
	div.append(add);
	page.append(listContainer);

	return page;
};

export default todoPage;

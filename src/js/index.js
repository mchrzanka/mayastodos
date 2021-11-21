import Router from './routes/router';
import { createStore, getStore } from './store/store';
import { dataFetcher } from './utils/dataFetcher';
import keyGenerator from './utils/key';

const app = document.querySelector('#app');

// Data fetcher
const onAppInit = async function (e) {
	//fetch the data
	let todos = await dataFetcher('../data/todos.json');

	//create unique key/id for todo's without one
	if (todos[0].id === undefined) {
		todos = [...keyGenerator(todos)];
	}

	createStore(todos);
	Router(window.location.pathname);
};

window.addEventListener('load', onAppInit);

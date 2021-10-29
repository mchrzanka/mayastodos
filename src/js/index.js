import Router from './routes/router';
import { createStore, getStore } from './store/store';
import { dataFetcher } from './utils/dataFetcher';

const app = document.querySelector('#app');
// Data fetcher
const onAppInit = async function (e) {
	//fetch the data
	const todos = await dataFetcher('../data/todos.json');
	createStore(todos);
	Router(window.location.pathname);
};

window.addEventListener('load', onAppInit);

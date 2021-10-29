//reducer functions will make it so that we can add, edit, or delete data.
//Our functions will interact with our components.

/**
 Strategy for managing data: MVC

view       Control       model data 
[ui]       [bridge]       [data]

The store is our data. The reducer is the control between ui and data, and it takes in an action (add, edit, delete) and a payload (data to perform the action). 
  */

import { getStore } from './store';

const reducers = function ({ action, payload, ...rest }) {
	switch (action.type) {
		case 'add':
			return 'add a todo';
		case 'edit':
			return 'edit a todo';
		case 'delete':
			return 'delete a todo';
		default:
			return getStore();
	}
};

export { reducers };

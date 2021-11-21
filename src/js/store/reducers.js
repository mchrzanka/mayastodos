//reducer functions will make it so that we can add, edit, or delete data.
//Our functions will interact with our components.

/**
 Strategy for managing data: MVC

view       Control       model data 
[ui]       [bridge]       [data]

The store is our data. The reducer is the control between ui and data, and it takes in an action (add, edit, delete) and a payload (data to perform the action). 
  */

import { getStore, updateStore } from './store';

const reducer = function (action) {
	switch (action.type) {
		case 'add':
			storeAdd = getStore();
			newAddStore = [...storeAdd, action.payload];
			updateStore(newAddStore);
			action.cb();
			return null;

		case 'edit':
			const editStore = getStore();
			const editIndex = action.payload.index;

			const editedId = document.getElementById('ID').value;
			const editedCat = document.getElementById('category').value;
			const editedComplete = document.getElementById('isComplete').value;
			const editedTitle = document.getElementById('title').value;
			const editedStartDate = document.getElementById('startDate').value;
			const editedStartTime = document.getElementById('startTime').value;
			const editedEndDate = document.getElementById('endDate').value;
			const editedEndTime = document.getElementById('endTime').value;

			const assign = Object.assign({}, editIndex, {
				id: editedId,
				category: editedCat,
				isComplete: editedComplete,
				title: editedTitle,
				startDate: editedStartDate,
				startTime: editedStartTime,
				endDate: editedEndDate,
				endTime: editedEndTime,
			});

			console.dir(assign);

			// newStore = [
			// 	...editStore.slice(0, editIndex),
			// 	assign,
			// 	...editStore.slice(editIndex + 1),
			// ];

			updateStore(newStore);
			action.cb();
			return null;

		case 'delete':
			const store = getStore();
			const index = action.payload.index;
			const newStoreState = [
				...store.slice(0, index),
				...store.slice(index + 1),
			];
			updateStore(newStoreState);
			action.cb();
			return null;
		default:
			return getStore();
	}
};

export default reducer;

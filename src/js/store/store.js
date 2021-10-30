// get data -> store data -> display data
// we create a store to hold the data, then we are going to get the store to display it.

let store = null;

//you pass in an empty array, because it's assumed when you first load up the app that no data has been stored.
// this function doesn't return anything, it just creates the store.
const createStore = function (data = []) {
	if (store === null) {
		store = [...data]; //spread operator. Creates a new array that becomes the store for all of our application data.
	}
};

// this is how we will access the store.
const getStore = function () {
	return store;
};

const updateStore = function (newStoreState) {
	store = [...newStoreState];
};

export { createStore, getStore, updateStore };

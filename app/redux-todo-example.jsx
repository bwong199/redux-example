var redux = require('redux');

console.log('Starting redux example');

var stateDefault = {
	searchText: '', 
	showCompleted: false, 
	todos: []
}

var reducer = (state = stateDefault, action) => {

	console.log('New action,', action);
	switch (action.type){
		case 'CHANGE_SEARCH_TEXT': 
			return  {
				...state,
				searchText: action.searchText
			};
		default:
			return state;
	}	
};

var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState', currentState);


store.dispatch({
	type: 'CHANGE_SEARCH_TEXT', 
	searchText: 'work'
});

console.log('serachText should be "work"', store.getState());


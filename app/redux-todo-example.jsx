var redux = require('redux');

console.log('Starting redux example');

var stateDefault = {
	searchText: '', 
	showCompleted: false, 
	todos: []
}

var reducer = (state = stateDefault, action) => {

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

var store = redux.createStore(reducer, redux.compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes
store.subscribe(() => {
	var state = store.getState();

	console.log('searchText is', state.searchText);

	document.getElementById('app').innerHTML = state.searchText;
});

var currentState = store.getState();
console.log('currentState', currentState);


store.dispatch({
	type: 'CHANGE_SEARCH_TEXT', 
	searchText: 'work'
});

store.dispatch({
	type: 'CHANGE_SEARCH_TEXT', 
	searchText: 'play'
});

// store.dispatch({
// 	type: 'CHANGE_SEARCH_TEXT', 
// 	searchText: 'something else'
// });

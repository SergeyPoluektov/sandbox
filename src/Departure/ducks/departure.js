export const SHOW_MATCHES = 'departure/SHOW_MATHES'
export const HIDE_MATCHES = 'departure/HIDE_MATCHES'
export const CHANGE_INPUT = 'departure/CHANGE_INPUT'
export const SELECT_ITEM  = 'departure/SELECT_ITEM'


//Reducer
const initialState = {
	inputValue: '',
	selectedItem: '',
	suggestionIsShown: false
}

export default function	reducer(state = initialState, action) {
	switch (action.type) {
		case CHANGE_INPUT:
			return {...state, inputValue: action.payload};

		case SHOW_MATCHES:
			return {...state, suggestionIsShown: action.payload};

		case HIDE_MATCHES:
			return {...state, suggestionIsShown: action.payload, selectedItem: ''}

		case SELECT_ITEM:
			return {...state, selectedItem: action.payload}

		default:
			return state;
	}
}


//action creators
export function changeInput(value) {
	return {
		type: CHANGE_INPUT,
		payload: value
	}
}

export function showMatches() {
	return {
		type: SHOW_MATCHES,
		payload: true
	}
}

export function hideMatches() {
	return {
		type: HIDE_MATCHES,
		payload: false
	}
}

export function selectItem(item) {
	return {
		type: SELECT_ITEM,
		payload: item
	}
}
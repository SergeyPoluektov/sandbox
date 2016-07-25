import {FIND_MATCHES, SHOW_MATCHES, HIDE_MATCHES, SELECT_ITEM} from '../constants'

const initialState = {
	matches: {
		items: [],
		selectedItem: '',
		isShowed: false
	}
}

export default function inputComponent(state = initialState, action) {
	switch (action.type) {
		case FIND_MATCHES:
			return state;

		case SHOW_MATCHES:
			return {...state, matches: {...state.matches, items: action.payload, isShowed: true}};

		case HIDE_MATCHES:
			return {...state, matches: {isShowed: action.payload, items: [], selectedItem: ''}}

		case SELECT_ITEM:
			return {...state, matches: {...state.matches, selectedItem: action.payload}}

		default:
			return state;
	}
}
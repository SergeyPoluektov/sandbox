import {FIND_MATCHES, SHOW_MATCHES, HIDE_MATCHES, SELECT_ITEM} from '../constants'

const initialState = {
	matches: {
		locations: [],
		selectedLocation: '',
		isShowed: false
	}
}

export default function inputComponent(state = initialState, action) {
	switch (action.type) {
		case FIND_MATCHES:
			return {...state, matches: {...state.matches, locations: action.payload}}

		case SHOW_MATCHES:
			return {...state, matches: {...state.matches, isShowed: action.payload}};

		case HIDE_MATCHES:
			return {...state, matches: {isShowed: action.payload, locations: [], selectedLocation: ''}}

		case SELECT_ITEM:
			return {...state, matches: {...state.matches, selectedLocation: action.payload}}

		default:
			return state;
	}
}
import {CHANGE_INPUT, SHOW_MATCHES, HIDE_MATCHES, SELECT_ITEM} from '../constants'

const initialState = {
	inputValue: '',
	selectedItem: '',
	suggestionIsShown: false
}

export default function inputComponent(state = initialState, action) {
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
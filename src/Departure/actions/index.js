import {CHANGE_INPUT, SHOW_MATCHES, HIDE_MATCHES, SELECT_ITEM} from '../constants'

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
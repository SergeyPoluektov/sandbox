import {FIND_MATCHES, SHOW_MATCHES, HIDE_MATCHES, SELECT_ITEM} from '../constants'

export function findMatches(template) {
	return {
		type: FIND_MATCHES,
		payload: template
	}
}

export function showMatches(matches) {
	return {
		type: SHOW_MATCHES,
		payload: matches
	}
}

export function hideMatches() {
	return {
		type: HIDE_MATCHES,
		payload: false
	}
}

export function selectItem(itemName) {
	return {
		type: SELECT_ITEM,
		payload: itemName
	}
}
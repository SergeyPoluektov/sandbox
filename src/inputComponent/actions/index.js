import {FIND_MATCHES, SHOW_MATCHES, HIDE_MATCHES, SELECT_ITEM} from '../constants'
import getLocations from '../locations'

export function findMatches(template) {
	return (dispatch) => {

		let locations = getLocations();
		template = template.toLowerCase();

		let matchLocations = [];
		let symbols = template.split('');
		let tmpLocations = locations.slice();
		for (let i = 0; i < symbols.length; i++) {
			matchLocations = tmpLocations.filter((location) => {
				let fromIndex = i ? location.toLowerCase().indexOf(symbols[i-1]) : 0;
				let index = location.toLowerCase().indexOf(symbols[i], fromIndex);
				if (~index) {
					//if has previously symbol check it before current symbol
					if (i) {
						if (index > location.toLowerCase().indexOf(symbols[i-1])) {
							return location;
						}
					}
					else {
						return location;
					}
				}
			});
			tmpLocations = matchLocations;
		}


		dispatch({
			type: FIND_MATCHES,
			payload: matchLocations
		})


		dispatch({
			type: SHOW_MATCHES,
			payload: true
		})
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
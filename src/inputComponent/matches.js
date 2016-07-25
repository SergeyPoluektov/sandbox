export default function getMatches(template, items) {
	template = template.toLowerCase();

	let matches = [];
	let symbols = template.split('');
	let tmpItems = items.slice();
	for (let i = 0; i < symbols.length; i++) {
		matches = tmpItems.filter((location) => {
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
		tmpItems = matches;
	}

	return matches;
}
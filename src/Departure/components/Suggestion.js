import React, { PropTypes } from 'react'
import suggestionStyle from '../styles/suggestion.css'

const Suggestion = ({items, selectedItem, onMouseEnterHandler, onMouseLeaveHandler}) => {
	return (
		<div>
			<ul className={suggestionStyle['list']}>
				{items.map((item, index) => {
					return (
						<li key={index} 
							className={suggestionStyle['list__item'] + 
										(item === selectedItem ? ' ' + suggestionStyle['list__item-hover'] : "")}
							onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler} >
							{item}
						</li>
					)
				})}
			</ul>
		</div>		
	)
}

Suggestion.propTypes = {
	items: PropTypes.array.isRequired,
	selectedItem: PropTypes.string.isRequired,
	onMouseEnterHandler: PropTypes.func.isRequired,
	onMouseLeaveHandler: PropTypes.func.isRequired
}

export default Suggestion
import React, { PropTypes } from 'react'
// import '../styles/index.css'

const Suggestion = ({items, selectedItem, onMouseEnterHandler, onMouseLeaveHandler}) => {
	return (
		<div>
			<ul className='ai-wrapper__list'>
				{items.map((item, index) => {
					return (
						<li key={index} 
							className={"ai-wrapper__list__item " + 
										(item === selectedItem ? "ai-wrapper__list__item-hover" : "")}
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
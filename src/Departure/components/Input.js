import React, { PropTypes } from 'react'
import inputStyles from '../styles/input.css'

const Input = ({placeholder, inputValue, onInputFocusHandler, onKeyHandler, onBlurHandler}) => {
	console.dir(inputStyles)
	return (
			<input className={inputStyles.field} type="text" placeholder={placeholder}
					value={inputValue}
					onFocus={onInputFocusHandler} onInput={onInputFocusHandler} 
					onKeyDown={onKeyHandler} onBlur={onBlurHandler} />
	)
}

Input.propTypes = {
	inputValue: PropTypes.string.isRequired,
	onInputFocusHandler: PropTypes.func.isRequired,
	onKeyHandler: PropTypes.func.isRequired,
	onBlurHandler: PropTypes.func.isRequired
}

export default Input
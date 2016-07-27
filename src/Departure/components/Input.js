import React, { PropTypes } from 'react'
// import '../styles/index.css'

const Input = ({placeholder, inputValue, onInputFocusHandler, onKeyHandler, onBlurHandler}) => {
	return (
			<input className="ai-wrapper__input" type="text" placeholder={placeholder}
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
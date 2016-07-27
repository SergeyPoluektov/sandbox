import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from './ducks/departure'
import Input from './components/Input'
import Suggestion from './components/Suggestion'
import departureStyle from './styles/index.css'
import getMatches from './matches'

class Departure extends Component {
	onInputFocusHandler(e) {
		this.props.actions.changeInput(e.target.value)
	}

	onBlurHandler() {
		if (this.props.suggestionIsShown) {
			if (this.props.selectedItem) {
				this.props.actions.changeInput(this.props.selectedItem)
			}
			
			this.props.actions.hideMatches()
		}
	}

	onKeyHandler(e) {
		if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp' && e.key !== 'Enter') return;

		e.preventDefault();

		if (e.key === 'Enter') {
			if (this.props.selectedItem) {
				this.props.actions.changeInput(this.props.selectedItem)
				this.props.actions.hideMatches()
			}
		}
		else {
			if (this.props.suggestionIsShown) {
				let newSelectedItem = this._getNextSelectedItem(e)

				this.props.actions.selectItem(newSelectedItem)
			}
		}
	}

	onMouseEnterHandler(e) {
		e.preventDefault();
		let itemName = e.target.textContent;
		this.props.actions.selectItem(itemName);
	}

	onMouseLeaveHandler(e) {
		e.preventDefault();
		this.props.actions.selectItem('');
	}

	render() {
		const {inputValue, suggestionIsShown, selectedItem, matches} = this.props

		let PlaceForSuggestion = suggestionIsShown ? Suggestion : () => (<div></div>)

		return (
			<div className={departureStyle.wrapper}>
				<Input inputValue={inputValue} placeholder='Departure'
						onInputFocusHandler={::this.onInputFocusHandler}
						onBlurHandler={::this.onBlurHandler} onKeyHandler={::this.onKeyHandler} />
				<PlaceForSuggestion items={matches} selectedItem={selectedItem}
									onMouseEnterHandler={::this.onMouseEnterHandler} 
									onMouseLeaveHandler={::this.onMouseLeaveHandler} />
			</div>
		)
	}

	_getNextSelectedItem(e) {
		let items = this.props.matches
		let selectedItem = this.props.selectedItem

		let nextSelectedItem = ''
		if (selectedItem) {
			let indexOfCurrentItem = items.indexOf(selectedItem)
			nextSelectedItem = e.key === 'ArrowDown' ? 
					(indexOfCurrentItem + 1 < items.length ? items[indexOfCurrentItem + 1] : items[0]) :
					(indexOfCurrentItem - 1 >= 0 ? items[indexOfCurrentItem - 1] : items[items.length - 1])
		}
		else {
			nextSelectedItem = e.key === 'ArrowDown' ? items[0] : items[items.length - 1]
		}

		return nextSelectedItem
	}
}

function mapStateToProps(state) {
	return {
		inputValue: state.departure.inputValue,
		suggestionIsShown: state.departure.suggestionIsShown,
		selectedItem: state.departure.selectedItem,
		matches: getMatches(state.departure.inputValue)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Departure)
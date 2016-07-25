import React, {PropTypes, Component} from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'

export default class InputComponent extends Component {
	onInputFocusHandler(e) {
		if (e.target.value.length > 0) {
			this.props.findMatches(e.target.value);
		}
		else if (this.props.matches.isShowed) {
			this.props.hideMatches();
		}
	}
	onBlurHandler() {
		if (this.props.matches.isShowed) {
			if (this.props.matches.selectedItem) {
				ReactDOM.findDOMNode(this.refs.inputField).value = this.props.matches.selectedItem;
			}
			
			this.props.hideMatches();
		}
	}
	onKeyHandler(e) {
		if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp' && e.key !== 'Enter') return;

		e.preventDefault();

		if (e.key === 'Enter') {
			if (this.props.matches.selectedItem) {
				ReactDOM.findDOMNode(this.refs.inputField).value = this.props.matches.selectedItem;
				this.props.hideMatches();
			}
		}
		else {
			let newSelectedItemNode = this._getNextSelectedItem(e);

			this.props.selectItem(newSelectedItemNode.textContent);
		}
	}
	onMouseEnterHandler(e) {
		e.preventDefault();
		let itemName = e.target.textContent;
		this.props.selectItem(itemName);
	}
	onMouseLeaveHandler(e) {
		e.preventDefault();
		this.props.selectItem('');
	}
	render() {
		const {matches} = this.props;
		
		return <div className="ai-wrapper">
			<input ref="inputField" className="ai-wrapper__input" type="text" 
				onFocus={::this.onInputFocusHandler} onInput={::this.onInputFocusHandler} 
				onKeyDown={::this.onKeyHandler} onBlur={::this.onBlurHandler} />
			<ul ref="matchesList" className={'ai-wrapper__list ' + (matches.isShowed ? '' : 'ai-wrapper__list-none')}>
				{matches.items.map((item, index) => {
					return <li ref={item} key={index} 
							className={"ai-wrapper__list__item " + 
										(item === matches.selectedItem ? "ai-wrapper__list__item-hover" : "")}
							onMouseEnter={::this.onMouseEnterHandler} onMouseLeave={::this.onMouseLeaveHandler} >{item}</li>
				})}
			</ul>
		</div>
	}

	_getNextSelectedItem(e) {
		let retVal;
		let matchesList = ReactDOM.findDOMNode(this.refs.matchesList);
		let selectedItemName = this.props.matches.selectedItem;			
		if (!selectedItemName) {
			retVal = e.key === 'ArrowDown' ? matchesList.firstElementChild : matchesList.lastElementChild;
		}
		else {
			let currentSelectedItemNode = ReactDOM.findDOMNode(this.refs[selectedItemName]);
			if (e.key === 'ArrowDown') {
				retVal = currentSelectedItemNode.nextElementSibling ? 
										currentSelectedItemNode.nextElementSibling : matchesList.firstElementChild;
			}
			else {
				retVal = currentSelectedItemNode.previousElementSibling ? 
										currentSelectedItemNode.previousElementSibling : matchesList.lastElementChild;	
			}
		}

		return retVal;
	}
}

InputComponent.propTypes = {
	matches: PropTypes.object.isRequired,
	findMatches: PropTypes.func.isRequired,
	hideMatches: PropTypes.func.isRequired,
	selectItem: PropTypes.func.isRequired
}
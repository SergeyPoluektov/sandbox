import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import InputComponent from '../inputComponent'
import * as inputActions from '../inputComponent/actions'

class App extends Component {
	render() {
		const {inputComponent} = this.props
		const {findMatches, hideMatches, selectItem} = this.props.inputActions

		return <div>
			<InputComponent matches={inputComponent.matches}
							findMatches={findMatches} hideMatches={hideMatches} selectItem={selectItem} />
		</div>
	}
}

function mapStateToProps (state) {
	return {
		inputComponent: state.inputComponent
	}
}

function mapDispatchToProps(dispatch) {
	return {
		inputActions: bindActionCreators(inputActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
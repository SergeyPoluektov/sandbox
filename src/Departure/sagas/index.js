import {takeLatest} from 'redux-saga'
import {put} from 'redux-saga/effects'
import {showMatches, hideMatches} from '../actions'
import {CHANGE_INPUT} from '../constants'

function* showSuggestion(action) {
	if (action.payload.length > 0) {
		yield put(showMatches())
	}
	else {
		yield put(hideMatches())
	}
}

function* inputSaga() {
	yield* takeLatest(CHANGE_INPUT, showSuggestion)
}

export default inputSaga;
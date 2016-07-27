import {takeLatest} from 'redux-saga'
import {put} from 'redux-saga/effects'
import {showMatches, hideMatches} from '../ducks/departure'
import {CHANGE_INPUT} from '../ducks/departure'

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
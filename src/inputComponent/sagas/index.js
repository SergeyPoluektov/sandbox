import {takeLatest} from 'redux-saga'
import {call, put} from 'redux-saga/effects'
import getMatches from '../matches'
import {showMatches} from '../actions'
import {FIND_MATCHES} from '../constants'

function* findMatches(action) {
	const res = yield call(fetch, 'http://localhost:3000/items.json');
	const items = yield res.json();

	const matches = yield call(getMatches, action.payload, items);
	yield put(showMatches(matches));
}

function* inputSaga() {
	yield* takeLatest(FIND_MATCHES, findMatches);
}

export default inputSaga;
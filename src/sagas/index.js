import {call} from 'redux-saga/effects'
import departureSage from '../Departure/sagas'

export default function* mainSaga() {
	yield [call(departureSage)];
}
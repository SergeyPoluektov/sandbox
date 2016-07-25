import {call} from 'redux-saga/effects'
import inputSaga from '../inputComponent/sagas'

export default function* mainSaga() {
	yield [call(inputSaga)];
}
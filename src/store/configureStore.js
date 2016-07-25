import {createStore, applyMiddleware} from 'redux'
import rootReducer from '../reducers'
import createLogger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import mainSaga from '../sagas'


export default function configureStore(initialState) {
	const logger = createLogger()
	const sagaMiddleware = createSagaMiddleware()
	const store = createStore(
		rootReducer, 
		initialState,
		applyMiddleware(sagaMiddleware, logger))

	sagaMiddleware.run(mainSaga);

	if (module.hot) {
		module.hot.accept('../reducers', () => {
			const nextRootReducer = require('../reducers').default
			store.replaceReducer(nextRootReducer)
		})
	}
	return store
}
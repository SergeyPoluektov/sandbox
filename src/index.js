import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'
import appStyles from './styles/app.css'


const store = configureStore()

render(
	<Provider store={store}>
		<div className={appStyles.app}>
			<App/>
		</div>
	</Provider>,
	document.querySelector('#root')
)
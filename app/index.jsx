import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Hello from './containers/Hello'
import './static/css/common.less'

import configureStore from './store/configureStore'
const store = configureStore()

// import fn from './redux-demo.js'
// fn();

render(
    <Provider store={store}>
        <Hello />
    </Provider>,
    document.getElementById('root')
)

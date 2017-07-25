import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Info from './components/info'
import inforeducer from './reducers/reducer'

const store = createStore(inforeducer)

render(
  <Provider store={store}>
    <Info />
  </Provider>,
  document.getElementById('container')
)

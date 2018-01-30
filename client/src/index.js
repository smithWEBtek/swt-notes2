import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

// import NoteReducer from '../src/store/NoteReducer'
import reducer from '../src/store/NoteReducer'

import App from './App'
import './index.css'

const rootReducer = combineReducers({
  nts: reducer
})

const logger = store => {
  console.log('[Middleware] prior state', store.getState())
  return next => {
    return action => {
      console.log('[Middleware] Dispatching', action)
      const result = next(action)
      return result
    }
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)))

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))

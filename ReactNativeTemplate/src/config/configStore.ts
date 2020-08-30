import { createStore, compose, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer from '@src/rootReducer'

interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
}
declare let window: Window

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const logger = createLogger()

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger)),
)

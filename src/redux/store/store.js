import { createStore } from 'redux'
import { persistStore } from 'redux-persist'

import rootReducer from '../reducers/index'

const store = createStore(
  rootReducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

const persistor = persistStore(store)

export { store, persistor }

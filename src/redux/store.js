// redux最核心的管理对象store

import { createStore } from 'redux'
import allReducers from './reducers'

// import location from './reducers'

export default createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



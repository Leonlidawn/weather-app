// redux最核心的管理对象store

import { applyMiddleware, createStore } from 'redux'//applyMiddleware is for use of thunk
import allReducers from './reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

// import location from './reducers'

export default createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)));



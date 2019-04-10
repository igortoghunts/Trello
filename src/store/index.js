import { createStore, applyMiddleware, compose } from 'redux';
import mainReducer from './reducers';
import thunk from 'redux-thunk';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
   mainReducer,
   storeEnhancers(applyMiddleware(thunk))
);


export default store;
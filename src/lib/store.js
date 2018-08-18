import {createStore, combineReducers, applyMiddleware} from 'redux';
import categories from '../reducer/category.js';
import expenses from '../reducer/expense.js'; 

import logger from './middleware/logger.js';
import localStorage from './middleware/localStorage.js';
const appReducer = combineReducers({
  categories,
  expenses,
});

//***create middleware/code to remove all expense tied to categoryID***
//create middleware for putting stuff ni localstorage
// export default () => createStore(appReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default () => createStore(appReducer, applyMiddleware(logger, localStorage));

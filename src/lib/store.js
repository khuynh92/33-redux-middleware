import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import categories from '../reducer/category.js';
import expenses from '../reducer/expense.js'; 

import logger from './middleware/logger.js';
import localStorage from './middleware/localStorage.js';
import validateBudget from './middleware/validateBudget.js';
const appReducer = combineReducers({
  categories,
  expenses,
});

// export default () => createStore(appReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => createStore(appReducer, composeEnhancers(applyMiddleware(logger, localStorage, validateBudget)));


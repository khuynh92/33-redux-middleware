import {createStore, combineReducers} from 'redux';
import categories from '../reducer/category.js';
import expenses from '../reducer/expense.js'; 
const appReducer = combineReducers({
  categories,
  expenses,
});


export default () => createStore(appReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

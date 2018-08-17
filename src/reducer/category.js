// import defaultState from './defaultState.js';

let initialState = localStorage && localStorage.state && JSON.parse(localStorage.state) || [];

export default (state = initialState, action) => {
  let categories;
  let { type, payload } = action;
  
  switch (type) {

    case 'CATEGORY_CREATE':
      categories = [...state, payload];
      localStorage.state = JSON.stringify(categories);
      return categories;

    case 'CATEGORY_UPDATE':
      categories = state.map(category => category.id === payload.id ? {...payload, editing:false} : category);
      localStorage.state = JSON.stringify(categories);
      return categories;


    case 'CATEGORY_DESTROY':
      categories = state.filter(category => category.id !== payload.id);
      localStorage.state = JSON.stringify(categories);
      return categories;

    case 'CATEGORY_EDIT': return state.map(category => category.id === payload.id ? {...category, editing: true} : {...category, editing:false});
    case 'CANCEL_BUTTON': return state.map(category => category.id === payload.id ? {...category, editing: false} : category);

    default: return state;
  }
};
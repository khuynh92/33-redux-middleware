import defaultState from './defaultState.js';

let initialState = localStorage && localStorage.state && JSON.parse(localStorage.state) || defaultState;

export default (state = initialState, action) => {
  let categories;
  let { type, payload } = action;
  
  switch (type) {

    case 'CATEGORY_CREATE':
      categories = [...state.categories, payload];
      localStorage.state = JSON.stringify({...state, categories});
      return {...state, categories};

    case 'CATEGORY_UPDATE':
      categories = state.categories.map(category => category.id === payload.id ? {...payload, editing:false} : category);
      localStorage.state = JSON.stringify({...state, categories});
      return {...state, categories};


    case 'CATEGORY_DESTROY':
      categories = state.categories.filter(category => category.id !== payload.id);
      localStorage.state = JSON.stringify({...state, categories});
      return {...state, categories};

    case 'CATEGORY_EDIT': return {
      ...state, 
      categories: state.categories.map(category => category.id === payload.id ? {...category, editing: true} : {...category, editing:false}),
    };

    case 'CANCEL_BUTTON': return {
      ...state,
      categories: state.categories.map(category => category.id === payload.id ? {...category, editing: false} : category),
    };

    default: return state;
  }
};
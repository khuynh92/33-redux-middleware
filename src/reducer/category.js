let initialState = localStorage && localStorage.state && JSON.parse(localStorage.state).categories || [];

export default (state = initialState, action) => {
  
  let { type, payload } = action;
  
  switch (type) {

    case 'CATEGORY_CREATE': return [...state, payload];

    case 'CATEGORY_UPDATE': return state.map(category => category.id === payload.id ? {...payload, editing:false} : category);

    case 'CATEGORY_DESTROY': return state.filter(category => category.id !== payload.id);

    case 'CATEGORY_EDIT': return state.map(category => category.id === payload.id ? {...category, editing: true} : {...category, editing:false});

    case 'CANCEL_BUTTON': return state.map(category => category.id === payload.id ? {...category, editing: false} : category);

    default: return state;
  }
};
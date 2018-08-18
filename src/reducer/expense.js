let initialState = localStorage && localStorage.state && JSON.parse(localStorage.state).expenses || [];

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {

    case 'EXPENSE_CREATE': return [...state, payload];

    case 'EXPENSE_UPDATE': return state.map(expense => expense.id === payload.id ? { ...payload, editing: false } : expense);

    case 'EXPENSE_DESTROY': return state.filter(expense => expense.id !== payload.id);

    case 'EXPENSE_EDIT': return state.map(expense => expense.id === payload.id ? { ...payload, editing: true } : { ...expense, editing: false });

    case 'CANCEL_BUTTON': return state.map(expense => expense.id === payload.id ? { ...payload, editing: false } : { ...expense, editing: false });

    case 'MASS_EXPENSE_DESTROY': return state.filter(expense => expense.categoryID !== payload.id);
    default: return state;
  }
};    
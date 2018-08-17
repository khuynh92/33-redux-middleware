let initialState = localStorage && localStorage.state && JSON.parse(localStorage.state) || [];

export default (state = initialState, action) => {
  let expenses;
  let { type, payload } = action;

  switch (type) {

    case 'EXPENSE_CREATE':
      localStorage.state = JSON.stringify([...state, payload]);
      return [...state, payload];

    case 'EXPENSE_UPDATE':
      expenses = state.map(expense => expense.id === payload.id ? { ...payload, editing: false } : expense);
      localStorage.state = JSON.stringify(expenses);
      return expenses;

    case 'EXPENSE_DESTROY':
      expenses = state.filter(expense => expense.id !== payload.id);
      localStorage.state = JSON.stringify(expenses);
      return expenses;

    case 'EXPENSE_EDIT':
      expenses = state.map(expense => expense.id === payload.id ? { ...payload, editing: true } : { ...expense, editing: false });
      return expenses;

    case 'CANCEL_BUTTON':
      expenses = state.map(expense => expense.id === payload.id ? { ...payload, editing: false } : { ...expense, editing: false });
      return expenses;

    default: return state;
  }
};  
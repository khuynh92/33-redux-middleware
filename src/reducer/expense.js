import defaultState from './defaultState.js';

let initialState = localStorage && localStorage.state && JSON.parse(localStorage.state) || defaultState;

export default (state = initialState, action) => {
  let expenses;
  let { type, payload } = action;

  switch (type) {

    case 'EXPENSE_CREATE':
      localStorage.state = JSON.stringify({ ...state, expenses: [...state.expenses, payload] });
      return { ...state, expenses: [...state.expenses, payload] };

    case 'EXPENSE_UPDATE':
      expenses = state.expenses.map(expense => expense.id === payload.id ? { ...payload, editing: false } : expense);
      localStorage.state = JSON.stringify({ ...state, expenses });
      return { ...state, expenses };

    case 'EXPENSE_DESTROY':
      expenses = state.expenses.filter(expense => expense.id !== payload.id);
      localStorage.state = JSON.stringify({ ...state, expenses });
      return { ...state, expenses };

    case 'EXPENSE_EDIT':
      expenses = state.expenses.map(expense => expense.id === payload.id ? { ...payload, editing: true } : { ...expense, editing: false });
      return { ...state, expenses };

    case 'CANCEL_BUTTON':
      expenses = state.expenses.map(expense => expense.id === payload.id ? { ...payload, editing: false } : { ...expense, editing: false });
      return { ...state, expenses };

    default: return state;
  }
};  
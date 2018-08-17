import uuid from 'uuid/v4';

export const expenseCreate = expense => {
  expense.id = uuid();
  expense.timeStamp = new Date();
  expense.editing = false;
  return {
    type: 'EXPENSE_CREATE',
    payload: expense,
  };
};

export const expenseUpdate = expense => {
  return {
    type: 'EXPENSE_UPDATE',
    payload: expense,
  };
};

export const expenseDestroy = expense => {
  return {
    type: 'EXPENSE_DESTROY',
    payload: expense,
  };
};

export const editCurrent = expense => {
  return {
    type: 'EXPENSE_EDIT',
    payload: expense,
  };
}

export const cancelBtn = expense => {
  return {
    type: 'CANCEL_BUTTON',
    payload: expense,
  };
}
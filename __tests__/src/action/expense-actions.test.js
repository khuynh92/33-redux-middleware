import * as actions from '../../../src/action/expense-actions.js';
// import reducer from '../../../src/reducer/expense.js';

describe('action creators', () => {

  it('should create an expense create action', () => {

    const expense = { expense: 'expense', price: 'price' };

    const action = actions.expenseCreate(expense);

    expect(action.type).toBe('EXPENSE_CREATE');

    expect(action.payload.expense).toBe(expense.expense);
    expect(action.payload.price).toBe(expense.price);


  });

  it('should update an expense update action', () => {

    const expense = { expense: 'expense', price: 'price' };

    const action = actions.expenseUpdate(expense);

    expect(action.type).toBe('EXPENSE_UPDATE');

    expect(action.payload.expense).toBe(expense.expense);
    expect(action.payload.price).toBe(expense.price);


  });

  it('should create an expense destroy action', () => {

    const expense = { expense: 'expense', price: 'price' };

    const action = actions.expenseDestroy(expense);

    expect(action.type).toBe('EXPENSE_DESTROY');

    expect(action.payload.expense).toBe(expense.expense);
    expect(action.payload.price).toBe(expense.price);


  });

  it('should update an expense edit action', () => {

    const expense = { expense: 'expense', price: 'price' };

    const action = actions.editCurrent(expense);

    expect(action.type).toBe('EXPENSE_EDIT');

    expect(action.payload.expense).toBe(expense.expense);
    expect(action.payload.price).toBe(expense.price);

  });

  it('should update an expense cancel action', () => {

    const expense = { expense: 'expense', price: 'price' };

    const action = actions.cancelBtn(expense);

    expect(action.type).toBe('CANCEL_BUTTON');

    expect(action.payload.expense).toBe(expense.expense);
    expect(action.payload.price).toBe(expense.price);

  });

});
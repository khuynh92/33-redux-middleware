import reducer from '../../../src/reducer/expense.js';

import * as actions from '../../../src/action/expense-actions.js';

describe('expense reducer', () => {

  it('state should be an empty array at start', () => {
    const newState = reducer([],{payload: 'fake payload', type: 'fake action'});
    expect(newState).toEqual([]);
  });

  it('should add a note to state', () => {

    let newExpense = {
      expense: 'expense',
      price: 'price',
    };

    const newState = reducer([], actions.expenseCreate(newExpense));

    expect(newState[0].expense).toBe('expense');
    expect(newState[0].price).toBe('price');
    expect(newState[0].id).toBeDefined();
    expect(newState[0].timeStamp  ).toBeDefined();
    expect(newState[0].editing).toBeFalsy();
  });

  it('state should update an existing expense', () => {

    let newExpense = {
      expense: 'expense',
      price: 'price',
    };

    const newState = reducer([], actions.expenseCreate(newExpense));
    
    const id = newState[0].id;
    const timeStamp = newState[0].timeStamp;

    let newerexpense = {
      expense: 'new expense',
      price: 'new price',
      id,
      timeStamp,
      editing: false,
    };

    const newerState = reducer(newState, actions.expenseUpdate(newerexpense));

    expect(newerState.length).toBe(1);
    expect(newerState[0].expense).toBe('new expense');
    expect(newerState[0].price).toBe('new price');
    expect(newerState[0].id).toBe(id);
  });

  it('should remove an existing expense', () => {

    let newExpense = {
      expense: 'expense',
      price: 'price',
    };

    const newState = reducer([], actions.expenseCreate(newExpense));

    expect(newState.length).toBe(1);

    const newerState = reducer(newState, actions.expenseDestroy(newExpense));

    expect(newerState.length).toBe(0);
  });

  it('should change a expenses editing key to be true', () => {
    let newExpense = {
      expense: 'expense',
      price: 'price',
    };


    const newState = reducer([], actions.expenseCreate(newExpense));

    expect(newState[0].edting).toBeFalsy();

    let expense = newState[0];

    const newerState = reducer(newState, actions.editCurrent(expense));

    expect(newerState[0].editing).toBeTruthy();
  });

  it('should change a expenses editing key to be false', () => {

    let newExpense = {
      expense: 'expense',
      price: 'price',
    };

    const newState = reducer([], actions.expenseCreate(newExpense));

    expect(newState[0].edting).toBeFalsy();

    let expense = newState[0];

    const newerState = reducer(newState, actions.editCurrent(expense));

    expect(newerState[0].editing).toBeTruthy();

    const newestState = reducer(newerState, actions.cancelBtn(newerState[0]));

    expect(newestState[0].editing).toBeFalsy();

  });

});
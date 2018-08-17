import reducer from '../../../src/reducer/category.js';

import * as actions from '../../../src/action/category-actions.js';

describe('category reducer', () => {

  it('state should be an empty array at start', () => {
    const newState = reducer([],{payload: 'fake payload', type: 'fake action'});
    expect(newState).toEqual([]);
  });

  it('should add a note to state', () => {

    let newCategory = {
      name: 'name',
      budget: 'budget',
    };

    const newState = reducer([], actions.categoryCreate(newCategory));

    expect(newState[0].name).toBe('name');
    expect(newState[0].budget).toBe('budget');
    expect(newState[0].id).toBeDefined();
    expect(newState[0].timeStamp  ).toBeDefined();
    expect(newState[0].editing).toBeFalsy();
  });

  it('state should update an existing category', () => {

    let newCategory = {
      name: 'name',
      budget: 'budget',
    };

    const newState = reducer([], actions.categoryCreate(newCategory));
    
    const id = newState[0].id;
    const timeStamp = newState[0].timeStamp;

    let newerCategory = {
      name: 'new name',
      budget: 'new budget',
      id,
      timeStamp,
      editing: false,
    };

    const newerState = reducer(newState, actions.categoryUpdate(newerCategory));

    expect(newerState.length).toBe(1);
    expect(newerState[0].name).toBe('new name');
    expect(newerState[0].budget).toBe('new budget');
    expect(newerState[0].id).toBe(id);
  });

  it('should remove an existing category', () => {

    let newCategory = {
      name: 'name',
      budget: 'budget',
    };

    const newState = reducer([], actions.categoryCreate(newCategory));

    expect(newState.length).toBe(1);

    const newerState = reducer(newState, actions.categoryDestroy(newCategory));

    expect(newerState.length).toBe(0);
  });

  it('should change a categories editing key to be true', () => {
    let newCategory = {
      name: 'name',
      budget: 'budget',
    };

    const newState = reducer([], actions.categoryCreate(newCategory));

    expect(newState[0].edting).toBeFalsy();

    let category = newState[0];

    const newerState = reducer(newState, actions.editCurrent(category));

    expect(newerState[0].editing).toBeTruthy();
  });

  it('should change a categories editing key to be false', () => {

    let newCategory = {
      name: 'name',
      budget: 'budget',
    };

    const newState = reducer([], actions.categoryCreate(newCategory));

    expect(newState[0].edting).toBeFalsy();

    let category = newState[0];

    const newerState = reducer(newState, actions.editCurrent(category));

    expect(newerState[0].editing).toBeTruthy();

    const newestState = reducer(newerState, actions.cancelBtn(newerState[0]));

    expect(newestState[0].editing).toBeFalsy();

  });

});
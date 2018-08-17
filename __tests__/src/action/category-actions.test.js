import * as actions from '../../../src/action/category-actions.js';

describe('action creators', () => {

  it('should create an category create action', () => {

    const category = { category: 'category', budget: 'budget' };

    const action = actions.categoryCreate(category);

    expect(action.type).toBe('CATEGORY_CREATE');

    expect(action.payload.category).toBe(category.category);
    expect(action.payload.budget).toBe(category.budget);


  });

  it('should update an category update action', () => {

    const category = { category: 'category', budget: 'budget' };

    const action = actions.categoryUpdate(category);

    expect(action.type).toBe('CATEGORY_UPDATE');

    expect(action.payload.category).toBe(category.category);
    expect(action.payload.budget).toBe(category.budget);


  });

  it('should create an category destroy action', () => {

    const category = { category: 'category', budget: 'budget' };

    const action = actions.categoryDestroy(category);

    expect(action.type).toBe('CATEGORY_DESTROY');

    expect(action.payload.category).toBe(category.category);
    expect(action.payload.budget).toBe(category.budget);


  });

  it('should update an category edit action', () => {

    const category = { category: 'category', budget: 'budget' };

    const action = actions.editCurrent(category);

    expect(action.type).toBe('CATEGORY_EDIT');

    expect(action.payload.category).toBe(category.category);
    expect(action.payload.budget).toBe(category.budget);

  });

  it('should update an category cancel action', () => {

    const category = { category: 'category', budget: 'budget' };

    const action = actions.cancelBtn(category);

    expect(action.type).toBe('CANCEL_BUTTON');

    expect(action.payload.category).toBe(category.category);
    expect(action.payload.budget).toBe(category.budget);

  });

});
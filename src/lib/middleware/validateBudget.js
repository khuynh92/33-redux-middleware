export default store => next => action => {
  if (action.type === 'EXPENSE_CREATE' || action.type === 'EXPENSE_UPDATE') {

    const expenses = store.getState().expenses;

    const updateExpenses = expenses.filter(expense => action.payload.categoryID === expense.categoryID).filter(expense => expense.id !== action.payload.id);
    const createExpenses = expenses.filter(expense => action.payload.categoryID === expense.categoryID);

    let currentExpenses = action.type === 'EXPENSE_CREATE' ? createExpenses : updateExpenses;

    const expenseTotal = currentExpenses.reduce((a, b) => a + parseInt(b.price), 0) + parseInt(action.payload.price);

    const category = store.getState().categories.filter(category => category.id === action.payload.categoryID)[0];
    
    try {
      if(expenseTotal <= category.budget) {
        console.log(`Remaining budget for ${category.name} is: `, category.budget - expenseTotal);
        return next(action);
      } else {
        throw new Error('Over Budget!!');
      }
    } catch (err) {
      alert(err);
    }
  } else {
    next(action);
  }
};
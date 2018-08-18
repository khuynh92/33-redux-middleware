export default store => next => action => {
  if (action.type === 'EXPENSE_CREATE' || action.type === 'EXPENSE_UPDATE') {

    let expenses = store.getState().expenses;

    let currentExpenses = expenses.filter(expense => action.payload.categoryID === expense.categoryID);

    let expenseTotal = currentExpenses.reduce((a, b) => a + parseInt(b.price), 0) + parseInt(action.payload.price);

    let categoryBudget = parseInt(store.getState().categories.filter(category => category.id === action.payload.categoryID)[0].budget);

    try {
      if(expenseTotal < categoryBudget) {
        console.log('Remaining budget is: ', categoryBudget - expenseTotal);
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
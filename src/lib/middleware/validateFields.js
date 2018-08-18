export default () => next => action => {
  
  if(action.type === 'CATEGORY_CREATE' || action.type === 'CATEGORY_UPDATE') {
    if(action.payload.name === '' || action.payload.budget === '') {
      alert('Please Fill out the form');
    } else {
      return next(action);
    }
  } else if(action.type === 'EXPENSE_CREATE' || action.type === 'EXPENSE_UPDATE') {
    if(action.payload.expense === '' || action.payload.price === '') {
      alert('Please Fill out the form');
    } else {
      return next(action);
    }
  } else {
    return next(action);
  }
};
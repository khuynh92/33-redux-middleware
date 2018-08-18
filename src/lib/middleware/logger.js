
export default  store => next => action => {
  console.log('actions type is: ', action.type);
  console.log('old state is: ', store.getState());
  let result = next(action);
  console.log('new state is: ', store.getState());
  return result;
};
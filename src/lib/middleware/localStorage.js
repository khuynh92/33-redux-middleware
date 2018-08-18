export default store => next => action => {
  let result = next(action);
  localStorage.state = JSON.stringify(store.getState());
  return result;
};
import uuid from 'uuid/v4';

export const categoryCreate = category => {
  category.id = uuid();
  category.timeStamp = new Date();
  category.editing = false;
  return {
    type: 'CATEGORY_CREATE',
    payload: category,
  };
};

export const categoryUpdate = category => {
  return {
    type: 'CATEGORY_UPDATE',
    payload: category,
  };
};

export const categoryDestroy = category => {
  return {
    type: 'CATEGORY_DESTROY',
    payload: category,
  };
};

export const editCurrent = category => {
  return {
    type: 'CATEGORY_EDIT',
    payload: category,
  };
};

export const cancelBtn = category => {
  return {
    type: 'CANCEL_BUTTON',
    payload: category,
  };
};
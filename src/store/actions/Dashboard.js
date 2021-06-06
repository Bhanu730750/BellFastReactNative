import * as actionTypes from './ActionTypes';

export const getUserDetail = () => ({
  type: actionTypes.GET_USER_DETAIL,
});

export const putUserDetail = (payload) => {
  console.log('this is action ', payload);
  return {
    type: actionTypes.PUT_USER_DETAIL,
    payload,
  };
};

export const putCategories = (payload) => {
  return {
    type: actionTypes.PUT_CATEGORY,
    payload,
  };
};

export const getSubCategory = (catId) => ({
  type: actionTypes.GET_SUBCATEGORY,
  catId,
});

export const putSubCategories = (payload) => {
  return {
    type: actionTypes.PUT_SUBCATEGORY,
    payload,
  };
};

import * as actionTypes from './ActionTypes';

export const saveSubscription = (userid, paidamount) => {
  return {
    type: actionTypes.SAVE_SUBSCRIPTION,
    userid,
    paidamount,
  };
};
export const subscriptionSuccess = payload => ({
  type: actionTypes.SUBSCRIPTION_SUCCESS,
  payload,
});

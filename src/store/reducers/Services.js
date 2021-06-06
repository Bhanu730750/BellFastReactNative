import * as actionTypes from '../actions/ActionTypes';
import updateState from '../../utils/updateState';

const initialState = {
  loading: false,
  status: null,
  error: null,
  success_service: null,
  orderlist: [],
  dashboarddata: null,
  taskdetails: null,
  requestaccepted: null,
};

const reducer = (state = initialState, action) => {
  console.log('on reducer for submit service', action.payload);
  const {payload, type} = action;
  switch (type) {
    case actionTypes.SUBMIT_SERVICE_REQUEST:
      return {
        ...state,
        loading: true,
        status: null,
      };

    case actionTypes.SUBMIT_SERVICE_REQUEST_SUCCESS:
      return updateState(state, {
        status: payload.status,
        loading: false,
        success_service: payload.status,
      });
    case actionTypes.PUT_MY_LATEST_TASK:
      return updateState(state, {
        status: payload.status,
        loading: false,
        mylatesttask: payload.data,
      });
    case actionTypes.GET_ORDERLIST:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.PUT_ORDERLIST:
      return updateState(state, {
        status: payload.status,
        loading: false,
        orderlist: payload.data,
      });

    case actionTypes.GET_PROVIDER_DASHBOARD_DATA:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.PUT_PROVIDER_DASHBOARD_DATA:
      return updateState(state, {
        status: payload.status,
        loading: false,
        dashboarddata: payload.data,
      });

    case actionTypes.GET_TASK_DETAILS:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.PUT_TASK_DETAILS:
      return updateState(state, {
        status: payload.status,
        loading: false,
        taskdetails: payload.data,
      });
    case actionTypes.ACCEPT_REQUEST:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case actionTypes.ACCEPT_REQUEST_SUCCESS:
      return updateState(state, {
        status: payload.status,
        loading: false,
        requestaccepted: payload,
      });

    default:
      return state;
  }
};

export default reducer;

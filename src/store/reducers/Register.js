const initialState = {
  loading: false,
  status: '',
  error: null,
  userdata: [],
  userstatus: null,
};

const reducer = (state = initialState, action) => {
  // console.log('on reducer ', action);
  switch (action.type) {
    case 'GET_SPONSORID':
      return {
        ...state,
        loading: true,
        success: false,
      };

    case 'PUT_SPONSORID':
      return {
        ...state,
        loading: false,
        status: action.payload.status,
        sponsorid: action.payload.sponsorid,
      };

    case 'GET_USERNAME':
      return {
        ...state,
        loading: true,
        success: false,
      };

    case 'PUT_USERNAME':
      return {
        ...state,
        loading: false,
        status: action.payload.status,
        userstatus: action.payload.userstatus,
      };

    case 'INIT_REGISTRATION':
      return {
        ...state,
        loading: true,
        success: false,
      };

    case 'SUCCESS_REGISTRATION':
      return {
        ...state,
        loading: false,
        userdata: action.payload.userdata,
        status: action.payload.status,
      };

    case 'FAILURE_REGISTRATION':
      return {
        ...state,
        loading: false,
        status: 401,
      };

    default:
      return state;
  }
};

export default reducer;

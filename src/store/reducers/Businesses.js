const initialState = {
  loading: false,
  status: '',
  error: null,
  businesses: [],
  businesses_details: null,
  states: [],
  cities: [],
};

const reducer = (state = initialState, action) => {
  // console.log('on reducer ', action.payload);
  switch (action.type) {
    case 'GET_BUSINESSES':
      return {
        ...state,
        loading: true,
        success: false,
      };

    case 'PUT_BUSINESSES':
      return {
        ...state,
        loading: false,
        status: action.payload.status,
        businesses: action.payload.businesses,
      };

    case 'GET_BUSINESSES_DETAILS':
      return {
        ...state,
        loading: true,
        success: false,
      };

    case 'PUT_BUSINESSES_DETAILS':
      return {
        ...state,
        loading: false,
        status: action.payload.status,
        businesses_details: action.payload.business_details,
      };

    case 'GET_STATES':
      return {
        ...state,
        loading: true,
        success: false,
      };

    case 'PUT_STATES':
      return {
        ...state,
        loading: false,
        status: action.payload.status,
        states: action.payload.states,
      };

    case 'GET_CITIES':
      return {
        ...state,
        loading: true,
        success: false,
      };

    case 'PUT_CITIES':
      return {
        ...state,
        loading: false,
        status: action.payload.status,
        cities: action.payload.cities,
      };

    case 'SAVE_BUSINESS_REQUEST':
      return {
        ...state,
        loading: true,
        success: false,
      };

    case 'SUCCESS_SAVE_BUSINESS':
      return {
        ...state,
        loading: false,
        userdata: action.payload.userdata,
        status: action.payload.status,
      };

    case 'FAILURE_SAVE_BUSINESS':
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

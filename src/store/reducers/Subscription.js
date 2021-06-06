const initialState = {
  loading: false,
  status: '',
  error: null,
  package: null,
};

const reducer = (state = initialState, action) => {
  // console.log('on reducer ', action.payload);
  switch (action.type) {
    case 'SAVE_SUBSCRIPTION':
      return {
        ...state,
        loading: true,
        success: false,
      };

    case 'SUBSCRIPTION_SUCCESS':
      return {
        ...state,
        loading: false,
        status: action.payload.status,
        package: action.payload.package,
      };

    default:
      return state;
  }
};

export default reducer;

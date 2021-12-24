import { SET_IS_AUTHORIZED } from "../actions/login";

const initialState = {
  isAuthorized: false,
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_AUTHORIZED:
      return { ...state, isAuthorized: action.payload };
    default:
      return state;
  }
};

export default LoginReducer;

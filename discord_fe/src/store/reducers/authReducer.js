import actionTypes from "../actions/actionTypes";

const initState = {
  userId: null,
  email: null,
  token: null,
  isLoggedIn: false,
  username: null,
  login_error: false,
  register_error: false,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        userId: action.data.id,
        isLoggedIn: true,
        email: action.data.email,
        token: action.data.token,
        username: action.data.username,
        login_error: false,
      };
    case actionTypes.LOGIN_FAIL:
      return {
        ...state,
        userId: null,
        isLoggedIn: false,
        email: null,
        token: null,
        username: null,
        login_error: true,
      };
    case actionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        userId: action.data.id,
        token: action.data.token,
        isLoggedIn: true,
        email: action.data.email,
        username: action.data.username,
        login_error: false,
        register_error: false,
      };
    case actionTypes.REGISTER_FAIL:
      return {
        ...state,
        userId: null,
        isLoggedIn: false,
        email: null,
        token: null,
        username: null,
        login_error: false,
        register_error: true,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        userId: null,
        isLoggedIn: false,
        email: null,
        token: null,
        username: null,
        login_error: false,
        register_error: false,
      };
    default: {
      return state;
    }
  }
};
export default authReducer;

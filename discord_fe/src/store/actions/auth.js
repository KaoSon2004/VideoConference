import actionTypes from "./actionTypes";
import * as api from "../../service";

export const login = (payload) => async (dispatch) => {
  try {
    const response = await api.login(payload);
    const { email } = payload;
    dispatch({
      type: actionTypes.LOGIN_SUCCESS,
      data: {
        email,
        id: response.data.id,
        token: response.data.token,
        username: response.data.username,
      },
    });
  } catch (error) {
    dispatch({
      type: actionTypes.LOGIN_FAIL,
      message: "Invalid email or password",
    });
  }
};

export const register = (payload) => async (dispatch) => {
  try {
    const response = await api.register(payload);
    dispatch({
      type: actionTypes.REGISTER_SUCCESS,
      data: response.data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.REGISTER_FAIL,
      message: "Gmail already exist",
    });
  }
};

export const logout = () => ({
  type: actionTypes.LOGOUT,
});

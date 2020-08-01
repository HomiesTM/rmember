import { authTypes } from "../../context/types";
const {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
} = authTypes;

export default (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", "bearer " + action.payload.token);
      console.log(action.payload.token);
      return { ...state, isAuthenticated: true };
  }
};

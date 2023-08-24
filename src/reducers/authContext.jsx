import React, { createContext, useReducer } from "react";
import authReducer from "./authReducer";
import axios from "axios";

const initialState = {
  user: {},
  error: null,
  loading: false,
  isAuthenticate: true,
};

export const AuthContext = createContext(initialState);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  async function loginUser(username, email, password) {
    try {
      dispatch({ type: "LOGIN_REQUEST" });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "http://localhost:5000/api/auth/login",
        { username, email, password },
        config
      );

      if (data) {
        localStorage.setItem("user", JSON.stringify(data.user));
      }

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: data.user,
      });
    } catch (error) {
      dispatch({
        type: "LOGIN_FAIL",
        payload: error.response.data.message,
      });
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        error: state.error,
        loginUser,
        loading: state.loading,
        isAuthenticate: state.isAuthenticate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

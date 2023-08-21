import React, { createContext, useReducer } from 'react';
import authReducer from './authReducer';
import axios from 'axios';

const initialState = {
  user: {},
  error: null,
  loading: false,
	isAuthenticate: false
}

// Create context
export const AuthContext = createContext(initialState);

// Provider component
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Actions
  async function login(usernameEmail, password) {
    try {

			dispatch({ type: 'LOGIN_REQUEST'})

			const config = {
				headers: {
					'Content-Type': 'application/json'
				}
			}

      const {data} = await axios.post('http://localhost:5000/api/auth/login', {usernameEmail, password }, config);
			console.log(data);
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: data.user
      });
    } catch (error) {
      dispatch({
        type: 'LOGIN_FAIL',
        payload: error.response.data.message
      });
    }
  }

	return (<AuthContext.Provider value={{
    user: state.user,
    error: state.error,
    loading: state.loading,
		isAuthenticate: state.isAuthenticate,
		login
  }}>
    {children}
  </AuthContext.Provider>);
}

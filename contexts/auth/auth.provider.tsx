import React, { useReducer } from 'react';
import { AuthContext } from './auth.context';
const isBrowser = typeof window !== 'undefined';
const INITIAL_STATE = {
  isAuthenticated: isBrowser && !!localStorage.getItem('access_token'),
  currentForm: 'login',
  error: null
};

function reducer(state: any, action: any) {
  console.log(state, 'auth');

  switch (action.type) {
    case 'SIGNIN':
      return {
        ...state,
        error: null,
        currentForm: 'signIn',
        // currentForm: 'loading'
      };
    case 'SIGNIN_SUCCESS':
      return {
        ...state,
        error: null,
        isAuthenticated: true,
      };
    case 'SIGN_OUT':
      return {
        ...state,
        error: null,
        isAuthenticated: false,
      };
    case 'SIGNUP':
      return {
        ...state,
        error: null,
        currentForm: 'signUp',
      };
    case 'LOADING':
      return{
        ...state,
        currentForm: 'loading'
      };
    case 'SIGNUP_SUCCESS':
      return{
        ...state,
        error: null,
        currentForm: 'signUpSuccess'
      };
    case 'SIGNUP_ERROR':
      return{
        ...state,
        currentForm: 'signUp',
        error: action.payload
      }
    case 'FORGOTPASS':
      return {
        ...state,
        error: null,
        currentForm: 'forgotPass',
      };
    default:
      return state;
  }
}

export const AuthProvider: React.FunctionComponent = ({ children }) => {
  const [authState, authDispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

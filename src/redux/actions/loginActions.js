/*
 * Reducer actions related with login
 */
import * as types from './types';

export const requestLogin = (username, password) => {
   return {
      type: types.LOGIN_REQUEST,
      username,
      password,
   };
};

export const loginFailed = () => {
   return {
      type: types.LOGIN_FAILED,
   };
};

export const onLoginResponse = response => {
   return {
      type: types.LOGIN_RESPONSE,
      response,
   };
};

export const enableLoader = () => {
   return {
      type: types.LOGIN_ENABLE_LOADER,
   };
};

export const disableLoader = () => {
   return {
      type: types.LOGIN_DISABLE_LOADER,
   };
};

export const logOut = () => {
   return {
      type: types.LOG_OUT,
   };
};

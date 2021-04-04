/**
 * Loading reducer made seperate for easy blacklisting
 * Avoid data persist
 */
import createReducer from 'src/redux/lib/createReducer';
import * as types from 'src/redux/actions/types';

const initialState = {
  isLoginLoading: false,
};

export const loadingReducer = createReducer(initialState, {
  [types.LOGIN_ENABLE_LOADER](state) {
    return { ...state, isLoginLoading: true };
  },
  [types.LOGIN_DISABLE_LOADER](state) {
    return { ...state, isLoginLoading: false };
  },
});

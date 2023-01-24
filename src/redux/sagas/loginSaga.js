/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import { put, call, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { Alert } from 'react-native';
import * as loginActions from '../actions/loginActions';
export default function* loginAsync() {
   yield put(loginActions.enableLoader());
   const response = { success: true, data: { id: 1 } };
   if (response.success) {
      yield put(loginActions.onLoginResponse(response.data));
      yield put(loginActions.disableLoader({}));
   } else {
      yield put(loginActions.loginFailed());
      yield put(loginActions.disableLoader({}));
      setTimeout(() => {
         Alert.alert('BoilerPlate', response.Message);
      }, 200);
   }
}

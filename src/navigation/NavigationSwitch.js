import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import {  AuthStackRider } from './NavigationStack';
import AuthLoadingScreen from '../screens/main/AuthLoadingScreen';
import RiderLogin from '../screens/rider/RiderLogin';

export default switchNavigator = createAppContainer(
   createSwitchNavigator(
      {
         AuthLoading: AuthLoadingScreen,
         Rider: AuthStackRider,
         Login: RiderLogin,
      },
      {
         initialRouteName: 'AuthLoading',
      },
   ),
);

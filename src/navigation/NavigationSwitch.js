import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { AuthStackRider, AuthStackMain } from './NavigationStack';
import AuthLoadingScreen from '../screens/main/AuthLoadingScreen';
import RiderLogin from '../screens/rider/RiderLogin';

export default switchNavigator = createAppContainer(
   createSwitchNavigator(
      {
         AuthLoading: AuthLoadingScreen,
         Main: AuthStackMain,
         Login: AuthStackRider,
      },
      {
         initialRouteName: 'AuthLoading',
      },
   ),
);

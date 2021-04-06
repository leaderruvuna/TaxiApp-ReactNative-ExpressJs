import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { AuthStack, AuthStackDriver, AuthStackRider } from './NavigationStack';
import AuthLoadingScreen from '../screens/main/AuthLoadingScreen';

// export default switchNavigator = createAppContainer(
//    createSwitchNavigator(
//       {
//          AuthLoading: AuthStackRider,
//          App1: AuthStackRider,
//          App2: AuthStackDriver,
//          Auth: AuthStack,
//       },
//       {
//          initialRouteName: 'AuthLoading',
//       },
//    ),
// );

export default AuthStack;

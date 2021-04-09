import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import RiderHome from '../screens/rider/RiderHome';
import RiderLogin from '../screens/rider/RiderLogin';
import RiderRegister from '../screens/rider/RiderRegister';
import RiderVerifyNumber from '../screens/rider/RiderVerifyNumber';
import RiderForgotPassword from '../screens/rider/RiderForgotPassword';
import DriverHome from '../screens/driver/DriverHome';
import DriverLogin from '../screens/driver/DriverLogin';
import DriverRegister from '../screens/driver/DriverRegister';
import AuthLoadingScreen from '../screens/main/AuthLoadingScreen';
import RiderDriverScreenChoice from '../screens/main/RiderDriverScreenChoice';
import DriverRegLog from '../screens/driver/DriverRegLog';
import RiderRegLog from '../screens/rider/RiderRegLog';
import RiderHomeContents from '../screens/rider/RiderHomeContents';
import RiderPickUp from '../screens/rider/RiderPickUp';
const AuthStackRider = createStackNavigator({
   Login: { screen: RiderLogin },
   Verify: { screen: RiderVerifyNumber },
   Register: { screen: RiderRegister },
});
const AuthStackDriver = createStackNavigator({
   Driver: { screen: DriverHome },
});
const AuthStackMain = createAppContainer(
   createStackNavigator(
      {
         Home: { screen: RiderHomeContents, headerMode: 'none' },
         RiderScreen: { screen: RiderRegLog },
         RiderReg: { screen: RiderRegister },
         RiderLogin: { screen: RiderLogin },
         RiderVerifyNum: { screen: RiderVerifyNumber },
         RiderResetPassWord: { screen: RiderForgotPassword },
         RiderLog: { screen: RiderLogin },
      },
      {
         headerMode: 'none',
      },
   ),
);
const RiderHomeStackNav = createStackNavigator(
   {
      Main: { screen: RiderHomeContents },
      pickUpLocation: { screen: RiderPickUp },
   },
   {
      headerMode: 'none',
      navigationOptions: {
         headerVisible: false,
      },
   },
);
export { AuthStackMain, AuthStackDriver, AuthStackRider, RiderHomeStackNav };

import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import RiderHome from './src/screens/rider/RiderHome';
import RiderLogin from './src/screens/rider/RiderLogin';
import RiderRegister from './src/screens/rider/RiderRegister';
import RiderVerifyNumber from './src/screens/rider/RiderVerifyNumber';
import RiderForgotPassword from './src/screens/rider/RiderForgotPassword';
import DriverHome from './src/screens/driver/DriverHome';
import DriverLogin from './src/screens/driver/DriverLogin';
import DriverRegister from './src/screens/driver/DriverRegister';
import AuthLoadingScreen from './src/screens/main/AuthLoadingScreen';
import RiderDriverScreenChoice from './src/screens/main/RiderDriverScreenChoice';
import DriverRegLog from './src/screens/driver/DriverRegLog';
import RiderRegLog from './src/screens/rider/RiderRegLog';
import * as firebase from 'firebase';
import ApiKeys from './src/constants/ApiKeys';

//
const AuthStack = createAppContainer(
   createStackNavigator({
      Home: { screen: RiderHome },
      //rider
      RiderScreen: { screen: RiderRegLog },
      RiderReg: { screen: RiderRegister },
      //RiderLog: { screen: RiderLogin },
      RiderVerifyNum: { screen: RiderVerifyNumber },
      RiderResetPassWord: { screen: RiderForgotPassword },
      //driver
      DriverScreen: { screen: DriverRegLog },
      DriverLog: { screen: DriverLogin },
      DriverReg: { screen: DriverRegister },
      // Rider: { screen: RiderHome }
   }),
);
const AuthStackRider = createStackNavigator({ Rider: { screen: RiderHome } });
const AuthStackDriver = createStackNavigator({
   Driver: { screen: DriverHome },
});
const switchNavigator = createAppContainer(
   createSwitchNavigator(
      {
         AuthLoading: AuthLoadingScreen,
         App1: AuthStackRider,
         App2: AuthStackDriver,
         Auth: AuthStack,
      },
      {
         initialRouteName: 'AuthLoading',
      },
   ),
);

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#1E88E5',
   },
});

class App extends React.Component {
   constructor(props) {
      super(props);
      firebase.initializeApp(ApiKeys.FirebaseConfig);
   }
   render() {
      return <View></View>;
   }
}

export default switchNavigator;

AppRegistry.registerComponent('appName', () => App);

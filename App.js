import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet, Text, View } from 'react-native';
import RiderHome from './src/rider/RiderHome';
import RiderLogin from './src/rider/RiderLogin';
import RiderRegister from './src/rider/RiderRegister';
import RiderVerifyNumber from './src/rider/RiderVerifyNumber';
import RiderForgotPassword from './src/rider/RiderForgotPassword';
import DriverHome from './src/driver/DriverHome';
import DriverLogin from './src/driver/DriverLogin';
import DriverRegister from './src/driver/DriverRegister';
import AuthLoadingScreen from './src/main/AuthLoadingScreen';
import RiderDriverScreenChoice from './src/main/RiderDriverScreenChoice';
import DriverRegLog from './src/driver/DriverRegLog';
import RiderRegLog from './src/rider/RiderRegLog';
import * as firebase from 'firebase';
import ApiKeys from './src/constants/ApiKeys';

class App extends React.Component {
   constructor(props) {
      super(props);
      firebase.initializeApp(ApiKeys.FirebaseConfig);
   }
   render() {
      return <View style={styles.container} />;
   }
}

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
export default createAppContainer(
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

// export default AuthStack;

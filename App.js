import React from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import RiderHome from './components/rider/RiderHome';
import RiderLogin from './components/rider/RiderLogin';
import RiderRegister from './components/rider/RiderRegister';
import RiderVerifyNumber from './components/rider/RiderVerifyNumber';
import RiderForgotPassword from './components/rider/RiderForgotPassword';
import DriverHome from './components/driver/DriverHome';
import DriverLogin from './components/driver/DriverLogin';
import DriverRegister from './components/driver/DriverRegister';
import AuthLoadingScreen from './components/main/AuthLoadingScreen';
import RiderDriverScreenChoice from './components/main/RiderDriverScreenChoice';
import DriverRegLog from './components/driver/DriverRegLog';
import RiderRegLog from './components/rider/RiderRegLog';
import * as firebase from 'firebase';
import ApiKeys from './components/constants/ApiKeys';


class App extends React.Component {
  constructor(props){
    super(props);
    firebase.initializeApp(ApiKeys.FirebaseConfig);
  }
  render() {
    return (
      <View style={styles.container}>
          
      </View>
    );
  }
}

//
const AuthStack = createStackNavigator({
      Home:RiderDriverScreenChoice,
      //rider
      RiderScreen:RiderRegLog,
      RiderReg:RiderRegister,
      RiderLog:RiderLogin,
      RiderVerifyNum:RiderVerifyNumber,
      RiderResetPassWord:RiderForgotPassword,
      //driver
      DriverScreen:DriverRegLog,
      DriverLog:DriverLogin ,
      DriverReg:DriverRegister,



/*},
{
  navigationOptions: {
         headerStyle: {
             backgroundColor: '#000',
         },
         headerTitleStyle: {
             color: '#fff',
         },
         headerBackTitleStyle: {
             color: '#fff',
         },
         headerTintColor: '#fff',

 }*/
}


);
const AuthStackRider= createStackNavigator({ Rider:RiderHome });
const AuthStackDriver= createStackNavigator({ Driver:DriverHome });
export default createSwitchNavigator(
  {
      AuthLoading:AuthLoadingScreen,
      App1: AuthStackRider,
      App2: AuthStackDriver,
      Auth: AuthStack,
  },
  {
      initialRouteName: 'AuthLoading',
  }
);

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#1E88E5',

  },
});

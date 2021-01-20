import React from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
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
const AuthStack = createStackNavigator({
	Home: RiderDriverScreenChoice,
	//rider
	RiderScreen: RiderRegLog,
	RiderReg: RiderRegister,
	RiderLog: RiderLogin,
	RiderVerifyNum: RiderVerifyNumber,
	RiderResetPassWord: RiderForgotPassword,
	//driver
	DriverScreen: DriverRegLog,
	DriverLog: DriverLogin,
	DriverReg: DriverRegister
});
const AuthStackRider = createStackNavigator({ Rider: RiderHome });
const AuthStackDriver = createStackNavigator({ Driver: DriverHome });
export default createSwitchNavigator(
	{
		AuthLoading: AuthLoadingScreen,
		App1: AuthStackRider,
		App2: AuthStackDriver,
		Auth: AuthStack
	},
	{
		initialRouteName: 'AuthLoading'
	}
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#1E88E5'
	}
});

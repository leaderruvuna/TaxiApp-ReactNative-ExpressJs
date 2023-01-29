import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import RiderHome from '../screens/rider/RiderHome';
import RiderLogin from '../screens/rider/RiderLogin';
import RiderRegister from '../screens/rider/RiderRegister';
import RiderVerifyNumber from '../screens/rider/RiderVerifyNumber';
import RiderForgotPassword from '../screens/rider/RiderForgotPassword';
import DriverHome from '../screens/driver/DriverHome';
import RiderPickup from '../screens/rider/RiderPickUp';
import RiderRegLog from '../screens/rider/RiderRegLog';
import RiderHomeContents from '../screens/rider/RiderHomeContents';
import RiderPickUp from '../screens/rider/RiderPickUp';
const Stack = createStackNavigator();
const AuthStackRider = () => {
   return (
      <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen
               name="Login"
               component={RiderLogin}
               options={{ headerShown: false }}
            />
            <Stack.Screen
               name="Verify"
               component={RiderVerifyNumber}
               options={{ headerShown: false }}
            />
            <Stack.Screen
               name="Register"
               component={RiderRegister}
               options={{ headerShown: false }}
            />
            <Stack.Screen
               name="Main"
               component={RiderHome}
               options={{ headerShown: false }}
            />
         </Stack.Navigator>
         
      </NavigationContainer>
   );
};
const AuthStackDriver = () => {
   return (
      <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen
               name="Driver"
               component={DriverHome}
               options={{ headerShown: false }}
            />
         </Stack.Navigator>
      </NavigationContainer>
   );
};
const AuthStackMain = () => {
   return (
      <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen
               name="Home"
               component={RiderHome}
               options={{ headerShown: false }}
            />
            <Stack.Screen
               name="RiderScreen"
               component={RiderRegLog}
               options={{ headerShown: false }}
            />
            <Stack.Screen
               name="RiderReg"
               component={RiderRegister}
               options={{ headerShown: false }}
            />
            <Stack.Screen
               name="RiderLogin"
               component={RiderLogin}
               options={{ headerShown: false }}
            />
            <Stack.Screen
               name="RiderVerifyNum"
               component={RiderVerifyNumber}
               options={{ headerShown: false }}
            />
            <Stack.Screen
               name="RiderResetPassWord"
               component={RiderForgotPassword}
               options={{ headerShown: false }}
            />
            <Stack.Screen
               name="RiderLog"
               component={RiderLogin}
               options={{ headerShown: false }}
            />
            <Stack.Screen
               name="RiderPick"
               component={RiderPickup}
               options={{ headerShown: false }}
            />
         </Stack.Navigator>
      </NavigationContainer>
   );
};

const RiderHomeStackNav = () => {
   return (
      <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen
               name="Main"
               component={RiderHomeStackNav}
               options={{ headerShown: false }}
            />

            <Stack.Screen
               name="pickUpLocation"
               component={RiderPickUp}
               options={{ headerShown: false }}
            />
         </Stack.Navigator>
      </NavigationContainer>
   );
};

export { AuthStackMain, AuthStackDriver, AuthStackRider, RiderHomeStackNav };
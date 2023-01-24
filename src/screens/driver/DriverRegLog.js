import React, { useState } from 'react';
import {
   StyleSheet,
   Text,
   View,
   Button,
   TouchableOpacity,
   Image,
} from 'react-native';
import styles from './styles/reglog';

export default DriverRegLog = props => {
   const navigationOptions = {
      headerStyle: {
         backgroundColor: '#42A5F5',
      },
      headerTitleStyle: {
         color: '#fff',
      },
      headerBackTitleStyle: {
         color: '#fff',
      },
      headerTintColor: '#fff',
      title: 'Driver Login And Register',
   };

   return (
      <View style={styles.container}>
         <Text>DriverRegLog</Text>
         <View style={styles.DriveLogoContent}>
            <Image
               source={require('../../assets/Images/taxi.png')}
               style={styles.logo}
            />
            <Text
               style={{
                  color: '#ffffff',
                  fontSize: 30,
               }}
            >
               Driving
            </Text>
         </View>
         <View style={styles.DriveButtonContent}>
            <Text
               style={{
                  marginTop: 2,
                  color: '#DCDCDC',
                  fontSize: 30,
                  fontWeight: 'bold',
               }}
            >
               Taxi App
            </Text>
            <View
               style={{
                  flexDirection: 'row',
                  marginTop: 10,
               }}
            >
               <Text
                  style={{
                     color: 'gray',
                     fontSize: 18,
                     fontWeight: 'bold',
                  }}
               >
                  Login or Sign Up I know you want to
               </Text>
            </View>
            <Text
               style={{
                  color: 'gray',
                  fontSize: 14,
               }}
            >
               It will take less than a minute
            </Text>
            <View style={styles.ButtonContent}>
               <TouchableOpacity
                  style={styles.DriverLogin}
                  onPress={this._navigateDriverLogin}
               >
                  <Text
                     style={{
                        color: '#42A5F5',
                        fontWeight: 'bold',
                     }}
                  >
                     Login
                  </Text>
               </TouchableOpacity>
               <TouchableOpacity
                  style={styles.DriverRegister}
                  onPress={this._navigateDriverRegister}
               >
                  <Text
                     style={{
                        color: '#ffffff',
                        fontWeight: 'bold',
                     }}
                  >
                     Register
                  </Text>
               </TouchableOpacity>
            </View>
         </View>
      </View>
   );
};

_navigateDriverLogin = async props => {
   props.navigation.navigate('DriverLog');
};
_navigateDriverRegister = async props => {
   props.navigation.navigate('DriverReg');
};

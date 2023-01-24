import React from 'react';
import {
   StyleSheet,
   Text,
   View,
   Button,
   TouchableOpacity,
   Image,
} from 'react-native';
import styles from './styles/reglog';

export default RiderRegLog = () => {
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
      title: 'Rider Login And Register',
   };
   return (
      <View style={styles.container}>
         <View style={styles.rideLogoContent}>
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
               Riding
            </Text>
         </View>
         <View style={styles.rideButtonContent}>
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
                  style={styles.RiderLogin}
                  onPress={this._navigateRiderLogin}
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
                  style={styles.RiderRegister}
                  onPress={this._navigateRiderRegister}
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
_navigateRiderLogin = async () => {
   this.props.navigation.navigate('RiderLog');
};
_navigateRiderRegister = async () => {
   this.props.navigation.navigate('RiderReg');
};

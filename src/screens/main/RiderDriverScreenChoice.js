import React from 'react';
import {
   StyleSheet,
   Text,
   View,
   Button,
   TouchableOpacity,
   Image,
} from 'react-native';
import { Card, Body, CardItem } from 'native-base';
import styles from './styles/choice';
export default RiderDriverScreenChoice = () => {
   const navigationOptions = {
      header: null,
   };
   return (
      <View style={styles.container}>
         <Card>
            <View style={styles.rideDriveLogoContent}>
               <Image
                  source={require('../../assets/Images/taxi.png')}
                  style={styles.logo}
               />
               <View
                  style={{
                     justifyContent: 'center',
                     alignItems: 'center',
                  }}
               >
                  <Text
                     style={{
                        color: '#ffffff',
                        fontSize: 30,
                     }}
                  >
                     Taxi
                  </Text>
                  <Text
                     style={{
                        color: '#ffffff',
                        fontSize: 14,
                     }}
                  >
                     Ride and enjoy your trip with safety and Peace
                  </Text>
                  <Text
                     style={{
                        color: '#ffffff',
                        fontSize: 14,
                     }}
                  >
                     Drive and make money
                  </Text>
               </View>
               <View
                  style={{
                     flexDirection: 'row',
                     justifyContent: 'center',
                     alignItems: 'center',
                     marginTop: 40,
                  }}
               >
                  <Image
                     source={require('../../assets/Images/round.png')}
                     style={{
                        width: 20,
                        height: 20,
                     }}
                  />
                  <Image
                     source={require('../../assets/Images/round.png')}
                     style={{
                        width: 20,
                        height: 20,
                        marginLeft: 5,
                        marginRight: 5,
                     }}
                  />
                  <Image
                     source={require('../../assets/Images/round.png')}
                     style={{
                        width: 20,
                        height: 20,
                     }}
                  />
               </View>
            </View>
         </Card>
         <View style={styles.rideDriveButtonContent}>
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
                  Speed,
               </Text>
               <Text
                  style={{
                     color: 'gray',
                     fontSize: 18,
                     fontWeight: 'bold',
                  }}
               >
                  Service,
               </Text>
               <Text
                  style={{
                     color: 'gray',
                     fontSize: 18,
                     fontWeight: 'bold',
                  }}
               >
                  Safety
               </Text>
            </View>
            <Text
               style={{
                  color: 'gray',
                  fontSize: 14,
               }}
            >
               Ride and enjoy your trip with safety and Peace
            </Text>
            <Text
               style={{
                  color: 'gray',
                  fontSize: 14,
               }}
            >
               Drive and make money
            </Text>
            <View style={styles.ButtonContent}>
               <TouchableOpacity
                  style={styles.Drivebutton}
                  onPress={this._navigateDriver}
               >
                  <Text
                     style={{
                        color: '#42A5F5',
                        fontWeight: 'bold',
                     }}
                  >
                     Drive
                  </Text>
               </TouchableOpacity>
               <TouchableOpacity
                  style={styles.Ridebutton}
                  onPress={this._navigateRider}
               >
                  <Text
                     style={{
                        color: '#ffffff',
                        fontWeight: 'bold',
                     }}
                  >
                     Ride
                  </Text>
               </TouchableOpacity>
            </View>
         </View>
      </View>
   );
};

_navigateRider = async () => {
   this.props.navigation.navigate('RiderScreen');
};
_navigateDriver = async () => {
   this.props.navigation.navigate('DriverScreen');
};

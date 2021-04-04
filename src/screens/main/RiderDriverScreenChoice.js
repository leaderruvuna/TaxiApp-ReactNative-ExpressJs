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
import * as firebase from 'firebase';
import ApiKeys from '../../constants/ApiKeys';
export default class RiderDriverScreenChoice extends React.Component {
   static navigationOptions = {
      header: null,
   };
   constructor(props) {
      super(props);
      //firebase.initializeApp(ApiKeys.FirebaseConfig);
   }

   render() {
      return (
         <View style={styles.container}>
            {/*<Text>This is rider driver screenchoice</Text>
              <Button title="rider" onPress={this._navigateRider}/>
              <Button title="driver" onPress={this._navigateDriver}/>
              */}
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
   }
   _navigateRider = async () => {
      this.props.navigation.navigate('RiderScreen');
   };
   _navigateDriver = async () => {
      this.props.navigation.navigate('DriverScreen');
   };
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#42A5F5',
      justifyContent: 'center',
      alignItems: 'center',
   },
   rideDriveButtonContent: {
      //backgroundColor:"#ffffff",
      backgroundColor: '#ffffff',
      height: 250,
      width: 320,
      marginTop: -180,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
   },
   rideDriveLogoContent: {
      backgroundColor: '#42A5F5',
      height: 900,
      marginTop: -50,
      width: 400,
      borderBottomLeftRadius: 120,
      borderBottomRightRadius: 120,
      justifyContent: 'center',
      alignItems: 'center',
   },
   ButtonContent: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#ffffff',
      height: 10,
      width: 320,
      marginTop: 80,
   },
   Ridebutton: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#42A5F5',
      height: 50,
      width: 155,
      marginLeft: 13,
   },
   Drivebutton: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffffff',
      height: 50,
      width: 155,
      borderColor: '#dcdcdc',
      borderWidth: 0.4,
   },
   logo: {
      height: 70,
      width: 70,
      borderRadius: 90,
      marginTop: -100,
   },
});

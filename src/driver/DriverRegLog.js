import React from 'react';
import {
   StyleSheet,
   Text,
   View,
   Button,
   TouchableOpacity,
   Image,
} from 'react-native';

export default class DriverRegLog extends React.Component {
   static navigationOptions = {
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

   render() {
      return (
         <View style={styles.container}>
            <Text>DriverRegLog</Text>
            {/*<Button title="driverLogin" onPress={this._navigateDriverLogin}/>
        <Button title="driverRegister" onPress={this._navigateDriverRegister}/>
        */}
            <View style={styles.DriveLogoContent}>
               <Image
                  source={require('../Images/taxi.png')}
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
   }
   _navigateDriverLogin = async () => {
      this.props.navigation.navigate('DriverLog');
   };
   _navigateDriverRegister = async () => {
      this.props.navigation.navigate('DriverReg');
   };
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#ffffff',
      justifyContent: 'center',
      alignItems: 'center',
   },
   DriveButtonContent: {
      //backgroundColor:"#ffffff",
      backgroundColor: '#ffffff',
      height: 250,
      width: 320,
      marginTop: -180,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
   },
   DriveLogoContent: {
      backgroundColor: '#42A5F5',
      height: 570,
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
      marginTop: 50,
   },
   DriverRegister: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#42A5F5',
      height: 50,
      width: 155,
      marginLeft: 13,
   },
   DriverLogin: {
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

import React, { useState } from 'react';
import {
   StyleSheet,
   Text,
   View,
   Button,
   AsyncStorage,
   TouchableOpacity,
   TextInput,
   KeyboardAvoidingView,
   Image,
} from 'react-native';
import PhoneInput from 'react-native-phone-input';

export default RiderVerifyNumber = () => {
   const [username, setUsername] = useState('');
   const [firstname, setFirstname] = useState('');
   const [lastname, setLastname] = useState('');
   const [email, setEmail] = useState('');
   const [mobile, setMobile] = useState('');

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
      title: 'Verify Mobile',
   };
   return (
      <KeyboardAvoidingView behavior="padding" style={styles.wrapper}>
         <View style={styles.container}>
            <View
               style={{
                  justifyContent: 'center',
                  alignItems: 'center',
               }}
            >
               <Text
                  style={{
                     color: 'gray',
                     fontSize: 18,
                     fontWeight: 'bold',
                  }}
               >
                  We are unable to autoverify your mobile number
               </Text>
               <Text
                  style={{
                     color: 'gray',
                     fontSize: 15,
                     fontWeight: 'bold',
                  }}
               >
                  Please enter the code tested to your number
               </Text>
            </View>
            <TextInput
               style={styles.VerifyNumber}
               placeholder="ENTER OTP"
               onChangeText={password =>
                  this.setState({
                     password,
                  })
               }
               underlineColorAndroid="#c0c0c0"
            />
            <TouchableOpacity
               style={styles.SubmitButton}
               onPress={this._signInAsync}
            >
               <Text
                  style={{
                     color: '#ffffff',
                     fontWeight: 'bold',
                  }}
               >
                  SUBMIT
               </Text>
            </TouchableOpacity>
         </View>
      </KeyboardAvoidingView>
   );
};
_signInAsync = async () => {
   //await AsyncStorage.setItem('userToken', 'rider');
   //this.props.navigation.navigate('App1');
   alert(this.props.navigation.state.params.phonenumber);
};

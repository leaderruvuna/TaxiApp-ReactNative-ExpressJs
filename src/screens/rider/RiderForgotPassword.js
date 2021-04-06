import React, { useState } from 'react';
import {
   Text,
   View,
   TouchableOpacity,
   TextInput,
   KeyboardAvoidingView,
} from 'react-native';
import styles from './styles/resetpassword';

export default RiderForgotPassword = () => {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [firstname, setFirstname] = useState('');
   const [lastname, setLastname] = useState('');
   const [email, setEmail] = useState('');
   const [mobile, setMobile] = useState('');

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
                  Do not worry just ener your email ID below
               </Text>
               <Text
                  style={{
                     color: 'gray',
                     fontSize: 15,
                     fontWeight: 'bold',
                  }}
               >
                  And we will send you the password reset instructions
               </Text>
            </View>

            <TextInput
               style={styles.ForgotPassword}
               placeholder="EMAIL OF PASSWORD"
               onChangeText={password =>
                  this.setState({
                     password,
                  })
               }
               underlineColorAndroid="#c0c0c0"
            />
            <TouchableOpacity
               style={styles.ResetPassword}
               onPress={this._resetPassWord}
            >
               <Text
                  style={{
                     color: '#ffffff',
                     fontWeight: 'bold',
                  }}
               >
                  RESET PASSWORD
               </Text>
            </TouchableOpacity>
         </View>
      </KeyboardAvoidingView>
   );
};
_resetPassWords = async () => {
   //await AsyncStorage.setItem('userToken', 'rider');
   //this.props.navigation.navigate('App1');
   alert('reset password');
};

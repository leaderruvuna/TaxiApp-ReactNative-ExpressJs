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
   ActivityIndicator,
} from 'react-native';
import PhoneInput from 'react-native-phone-input';
import Toast from 'react-native-simple-toast';
import styles from './styles/login';

export default RiderLogin = props => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [color, setColor] = useState('');

   return (
      <View style={styles.wrapper}>
         <View style={styles.container}>
            <View style={styles.headerContainer}>
               <Text style={styles.headerText}>
                  Select your country code and provide you phone
               </Text>
               <Text style={styles.headerText}>number.Please!</Text>
            </View>
            <View style={styles.mobileContainer}>
               <PhoneInput
                  allowZeroAfterCountryCode={true}
                  style={styles.countrCode}
               />
               <TextInput
                  style={styles.textInputMobile}
                  placeholder="Phone Number"
                  keyboardType="numeric"
                  maxLength={40}
                  onChangeText={email => setEmail(email)}
                  underlineColorAndroid="#c0c0c0"
                  selectionColor="#42A5F5"
               />
            </View>
            <View style={styles.loginContainer}>
               <TouchableOpacity
                  style={styles.LoginButton}
                  onPress={() => {
                     signInAsync(props);
                  }}
               >
                  <Text style={styles.loginText}>NEXT</Text>
               </TouchableOpacity>
            </View>

            {/* <ActivityIndicator size="large" color={color} /> */}
         </View>
      </View>
   );
};

signInAsync = props => {
   props.navigation.navigate('Verify');
};

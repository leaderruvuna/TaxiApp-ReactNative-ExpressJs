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
import OTPTextInput from 'react-native-otp-textinput';
import styles from './styles/verify';
export default RiderVerifyNumber = props => {
   const [otp, setOtp] = useState('');
   return (
      <KeyboardAvoidingView behavior="padding" style={styles.wrapper}>
         <View style={styles.container}>
            <View style={styles.headerContainer}>
               <Text style={styles.headerText}>Fill in the OTP and</Text>
               <Text style={styles.headerText}>Continue...</Text>
            </View>
            <View>
               <OTPTextInput tintColor={otpField.tintColor} ref={e => {}} />
            </View>
            <View style={styles.verifyContainer}>
               <TouchableOpacity
                  style={styles.verifyButton}
                  onPress={() => {
                     goNext(props);
                  }}
               >
                  <Text style={styles.nextText}>NEXT</Text>
               </TouchableOpacity>
            </View>
         </View>
      </KeyboardAvoidingView>
   );
};
const otpField = {
   tintColor: '#42A5F5',
};

const goNext = props => {
   props.navigation.navigate('Register');
};

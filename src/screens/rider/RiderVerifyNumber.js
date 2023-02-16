import React, { useState } from 'react';
import {
   Text,
   View,
   TouchableOpacity,
   KeyboardAvoidingView,
   ActivityIndicator,
} from 'react-native';
import Toast from 'react-native-simple-toast';
import OTPTextInput from 'react-native-otp-textinput';
import styles from './styles/verify';
import { httpFactory } from '../../factory/httpFactory';
import { useRoute } from '@react-navigation/native';
export default RiderVerifyNumber = ({ navigation }) => {
   const [otp, setOtp] = useState('');
   const [isRequired, setRequired] = useState(0);
   const [isLoading, setLoading] = useState(0);
   const router = useRoute();
   const { phone: phoneNumber } = router.params;
   const goNext = async otp => {
      if (!otp) {
         setRequired(1);
         Toast.show('Phone number is required!');
         return;
      }
      if (otp?.length < 6) {
         setRequired(1);
         Toast.show('Invalid OTP');
         return;
      }
      setLoading(1);
      try {
         const { data } = await httpFactory.post(`auth/rider/verify`, {
            secret: `${otp}`,
            phone_number: `${phoneNumber}`,
         });
         if (data?.status === 200) {
            setRequired(0);
            setLoading(0);
            navigation.navigate('Register', { userId: data.data[0]._id });
         } else {
            setRequired(0);
            setLoading(0);
            Toast.show('Invalid OPT!');
         }
      } catch (err) {
         setRequired(0);
         setLoading(0);
         Toast.show('Netwok Error!');
      }
   };
   return (
      <KeyboardAvoidingView behavior="padding" style={styles.wrapper}>
         <View style={styles.container}>
            <View style={styles.headerContainer}>
               <Text style={styles.headerText}>Fill in the OTP and</Text>
               <Text style={styles.headerText}>Continue...</Text>
            </View>
            <View style={styles.otpContainer}>
               <OTPTextInput
                  inputCount={6}
                  tintColor={isRequired ? '#C72C41' : '#42A5F5'}
                  textInputStyle={{ width: 40 }}
                  handleTextChange={value => {
                     setOtp(value);
                  }}
               />
            </View>
            <View style={styles.verifyContainer}>
               <TouchableOpacity
                  disabled={isLoading}
                  style={styles.verifyButton}
                  onPress={() => {
                     goNext(otp);
                  }}
               >
                  <Text style={styles.nextText}>NEXT</Text>
                  {isLoading ? <ActivityIndicator color={'white'} /> : <View />}
               </TouchableOpacity>
            </View>
         </View>
      </KeyboardAvoidingView>
   );
};

import React, { useRef, useState } from 'react';
import {
   Text,
   View,
   TouchableOpacity,
   TextInput,
   ActivityIndicator,
} from 'react-native';
import { CountryPicker } from 'react-native-country-codes-picker';
import { httpFactory } from '../../factory/httpFactory';
import Toast from 'react-native-simple-toast';
import styles from './styles/login';

export default RiderLogin = ({ navigation }) => {
   const [phoneNumber, setPhone] = useState('');
   const [isLoading, setLoading] = useState(0);
   const [isFieldRequired, setRequired] = useState(0);
   const [show, setShow] = useState(false);
   const [countryCode, setCountryCode] = useState('+256');
   const phoneRef = useRef(null);
   const signIn = async phoneNumber => {
      if (!phoneNumber) {
         setRequired(1);
         Toast.show('Phone number is required!');
         return;
      }
      setRequired(0);
      setLoading(1);
      try {
         const { data } = await httpFactory.post(`auth/rider/create`, {
            phone_number: `${countryCode}${phoneNumber}`,
            date: `${Date.now()}`,
         });
         if (data) {
            navigation.navigate('Verify', { phone: `${countryCode}${phoneNumber}` });
            setLoading(0);
         } else {
            console.log(data)
            Toast.show('Network error!');
            setLoading(0);
         }
      } catch(error) {
         console.log(error)
         Toast.show('Network error!');
         setLoading(0);
      }
   };
   return (
      <View style={styles.wrapper}>
         <View style={styles.container}>
            <View style={styles.headerContainer}>
               <Text style={styles.loginHeaderText}>Login</Text>
               <Text style={styles.headerText}>
                  Select your country code and provide your phone number.Please!
               </Text>
               <Text style={styles.headerText}></Text>
            </View>
            <View style={styles.mobileContainer}>
               <View style={styles.contryContainer}>
                  <TouchableOpacity
                     onPress={() => setShow(true)}
                     style={styles.contryButton}
                  >
                     <Text style={styles.countryCodeText}>{countryCode}</Text>
                  </TouchableOpacity>
                  <CountryPicker
                     lang={'en'}
                     show={show}
                     pickerButtonOnPress={item => {
                        setCountryCode(item.dial_code);
                        setShow(false);
                     }}
                  />
               </View>
               <TextInput
                  ref={phoneRef}
                  style={{
                     ...styles.textInputMobile,
                     borderColor: isFieldRequired ? '#C72C41' : '#42A5F5',
                  }}
                  placeholder="Phone Number"
                  keyboardType="numeric"
                  maxLength={40}
                  onChangeText={phone => setPhone(phone)}
                  selectionColor="#42A5F5"
               />
            </View>
            <View style={styles.loginContainer}>
               <TouchableOpacity
                  style={styles.LoginButton}
                  onPress={() => {
                     signIn(phoneNumber);
                  }}
               >
                  <Text style={styles.loginText}>NEXT</Text>
                  {isLoading ? <ActivityIndicator color={'white'} /> : <View />}
               </TouchableOpacity>
            </View>
         </View>
      </View>
   );
};

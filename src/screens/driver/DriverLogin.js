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

export default DriverLogin = props => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

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
      title: 'Login For Driving',
   };

   const color = color;
   return (
      <KeyboardAvoidingView behavior="padding" style={styles.wrapper}>
         <View style={styles.container}>
            <View style={styles.socialMedia}>
               <TouchableOpacity
                  style={styles.googlePlusButton}
                  onPress={() => alert('this is google+')}
               >
                  <Image
                     source={require('../../assets/Images/googleplus.png')}
                     style={{
                        width: 20,
                        height: 20,
                     }}
                  />
               </TouchableOpacity>
               <TouchableOpacity
                  style={styles.facebookButton}
                  onPress={() => alert('this is facebook')}
               >
                  <Image
                     source={require('../../assets/Images/facebook.png')}
                     style={{
                        width: 20,
                        height: 20,
                     }}
                  />
               </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row' }}>
               <TextInput
                  style={styles.textInputMobile}
                  placeholder="Email"
                  onChangeText={email =>
                     setState({
                        email,
                     })
                  }
                  underlineColorAndroid="#c0c0c0"
               />
            </View>
            <TextInput
               style={styles.textInputEmail}
               placeholder="Password"
               onChangeText={password =>
                  setState({
                     password,
                  })
               }
               underlineColorAndroid="#c0c0c0"
               secureTextEntry={true}
            />
            <TouchableOpacity style={styles.LoginButton} onPress={_signInAsync}>
               <Text
                  style={{
                     color: '#ffffff',
                     fontWeight: 'bold',
                  }}
               >
                  LOGIN
               </Text>
            </TouchableOpacity>
            <TouchableOpacity
               style={styles.passwordForgotten}
               onPress={_signInAsync}
            >
               <Text
                  style={{
                     color: '#42A5F5',
                     fontWeight: 'bold',
                  }}
               >
                  password forgotten?
               </Text>
            </TouchableOpacity>
            <ActivityIndicator size="large" color={color} />
         </View>
      </KeyboardAvoidingView>
   );
};
_signInAsync = async () => {
   let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   if (email.trim() === '') {
      Toast.show('email input must be filled!', Toast.SHORT, Toast.TOP);
      return;
   }
   if (password.length == '') {
      Toast.show('password must be filled!', Toast.SHORT, Toast.TOP);
      return;
   }
   if (reg.test(email) === false) {
      Toast.show('INVALID EMAIL!', Toast.SHORT, Toast.TOP, ToastStyle);
      return;
   }
   props.navigation.navigate('App2');
};

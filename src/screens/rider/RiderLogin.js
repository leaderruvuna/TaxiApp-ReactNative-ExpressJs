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

export default function RiderLogin(props) {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [color, setColor] = useState('');

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
      title: 'Login For Riding',
   };

   return (
      <View style={styles.wrapper}>
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
               <View
                  style={{
                     marginTop: 15,
                     marginLeft: 10,
                  }}
               ></View>
               <TextInput
                  style={styles.textInputMobile}
                  placeholder="Email"
                  maxLength={40}
                  onChangeText={email => setEmail(email)}
                  underlineColorAndroid="#c0c0c0"
                  selectionColor="#42A5F5"
               />
            </View>
            <TextInput
               style={styles.textInputEmail}
               placeholder="Password"
               onChangeText={password => setPassword(password)}
               underlineColorAndroid="#c0c0c0"
               selectionColor="#42A5F5"
               secureTextEntry={true}
            />
            <TouchableOpacity
               style={styles.LoginButton}
               onPress={() => {
                  props.navigation.navigate('App1');
               }}
            >
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
               onPress={() => {
                  this._resetPassWord(props);
               }}
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
      </View>
   );
}

_signInAsync = async (email, password, setColor, props) => {
   //await AsyncStorage.setItem('userToken', 'rider');
   //this.props.navigation.navigate('App1');
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
   setColor('#42A5F5');
   firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(
         () => {
            AsyncStorage.setItem('riderId', firebase.auth().currentUser.uid);
            this.setState({ color: '#ffffff' });
            props.navigation.navigate('Rider');
         },
         error => {
            Toast.show('error:' + error.message, Toast.SHORT, Toast.TOP);
            this.setState({ color: '#ffffff' });
         },
      );
};

_resetPassWord = async props => {
   props.navigation.navigate('RiderResetPassWord');
};

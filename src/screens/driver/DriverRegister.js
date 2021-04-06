import React, { useState } from 'react';
import {
   StyleSheet,
   Text,
   View,
   Button,
   YellowBox,
   AsyncStorage,
   TouchableOpacity,
   TextInput,
   KeyboardAvoidingView,
   Image,
   Platform,
   ActivityIndicator,
} from 'react-native';
import PhoneInput from 'react-native-phone-input';
import Toast from 'react-native-simple-toast';
import styles from './styles/register';

export default DriverRegister = () => {
   const [password, setPassword] = useState('');
   const [firstname, setFirstname] = useState('');
   const [lastname, setLastname] = useState('');
   const [email, setEmail] = useState('');
   const [mobile, setMobile] = useState('');
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
      title: 'Register For Driving',
   };
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
            <View style={styles.RideNames}>
               <TextInput
                  style={styles.textInputfn}
                  placeholder="First Name"
                  maxLength={30}
                  onChangeText={firstname =>
                     this.setState({
                        firstname,
                     })
                  }
                  underlineColorAndroid="#c0c0c0"
               />

               <TextInput
                  style={styles.textInputln}
                  placeholder="Last Name"
                  maxLength={30}
                  onChangeText={lastname =>
                     this.setState({
                        lastname,
                     })
                  }
                  underlineColorAndroid="#c0c0c0"
               />
            </View>
            <TextInput
               style={styles.textInputEmail}
               placeholder="Email"
               maxLength={40}
               onChangeText={email => this.setState({ email })}
               underlineColorAndroid="#c0c0c0"
            />
            <View style={{ flexDirection: 'row' }}>
               <View
                  style={{
                     marginTop: 15,
                     marginLeft: 10,
                  }}
               >
                  <PhoneInput ref="phone" />
               </View>
               <TextInput
                  style={styles.textInputMobile}
                  placeholder="Mobile"
                  keyboardType="numeric"
                  maxLength={10}
                  onChangeText={mobile =>
                     this.setState({
                        mobile,
                     })
                  }
                  underlineColorAndroid="#c0c0c0"
               />
            </View>
            <TextInput
               style={styles.textInputEmail}
               placeholder="Password"
               maxLength={30}
               onChangeText={password =>
                  this.setState({
                     password,
                  })
               }
               underlineColorAndroid="#c0c0c0"
               secureTextEntry={true}
            />

            <TouchableOpacity
               style={styles.NextButton}
               onPress={this._VerifyAsync}
            >
               <Text
                  style={{
                     color: '#ffffff',
                     fontWeight: 'bold',
                  }}
               >
                  NEXT
               </Text>
            </TouchableOpacity>
            <ActivityIndicator
               size="large"
               //color="#42A5F5"
               color={color}
            />
         </View>
      </KeyboardAvoidingView>
   );
};

_VerifyAsync = async () => {
   //await AsyncStorage.setItem('userToken', 'rider');
   let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   if (
      this.state.firstname.trim() === '' ||
      this.state.email.trim() === '' ||
      this.state.mobile.trim() === '' ||
      this.state.lastname.trim() === '' ||
      this.state.password.length == ''
   ) {
      Toast.show('All inputs must be filled!', Toast.SHORT, Toast.TOP);
      return;
   }
   if (reg.test(this.state.email) === false) {
      Toast.show('INVALID EMAIL!', Toast.SHORT, Toast.TOP);
      return;
   }

   this.setState({ color: '#42A5F5' });

   firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(
         authData => {
            //create a rider node with:firstname,lastname,phone,profile

            if (firebase.auth().currentUser) {
               userId = firebase.auth().currentUser.uid;
               if (userId) {
                  AsyncStorage.setItem('driverId', userId);
                  firebase
                     .database()
                     .ref(`Drivers/${userId}/Details`)
                     .set({
                        firstname: this.state.firstname,
                        lastname: this.state.lastname,
                        email: this.state.email,
                        phone: this.state.mobile,
                        profile_image: 'default',
                     })
                     .then(
                        () => {
                           Toast.show('Driver added successfully', Toast.SHORT);
                           this.setState({
                              color: '#ffffff',
                           });
                           this.props.navigation.navigate('App2');
                        },
                        error => {
                           Toast.show(error.message, Toast.SHORT);
                           this.setState({
                              color: '#ffffff',
                           });
                        },
                     );
               }
            }
         },
         error => {
            Toast.show('error:' + error.message, Toast.SHORT, Toast.TOP);
            this.setState({ color: '#ffffff' });
         },
      );
};

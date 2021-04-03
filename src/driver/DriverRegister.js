import React from 'react';
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
import * as firebase from 'firebase';
import ApiKeys from '../constants/ApiKeys';

export default class DriverRegister extends React.Component {
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
      title: 'Register For Driving',
   };
   constructor(props) {
      super(props);
      this.state = {
         password: '',
         firstname: '',
         lastname: '',
         email: '',
         mobile: '',
         color: '#ffffff',
      };
      //firebase initialize
      if (!firebase.apps.length) {
         firebase.initializeApp(ApiKeys.FirebaseConfig);
      }
   }

   componentDidMount() {
      this.authUnsubscriber = firebase.auth().onAuthStateChanged(authData => {
         this.setState({ authData });
      });
      YellowBox.ignoreWarnings(['Encountered an error loading page']);
      console.disableYellowBox = true;
      //this.firestoreUnsubscriber = this.ref.onSnapshot(this.onCollectionUpdate)
   }
   render() {
      const color = this.state.color;
      return (
         <KeyboardAvoidingView behavior="padding" style={styles.wrapper}>
            <View style={styles.container}>
               {/*<Text>This is rider login</Text>
          <Button title="Login" onPress={this._signInAsync}/>
       */}

               <View style={styles.socialMedia}>
                  <TouchableOpacity
                     style={styles.googlePlusButton}
                     onPress={() => alert('this is google+')}
                  >
                     <Image
                        source={require('../Images/googleplus.png')}
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
                        source={require('../Images/facebook.png')}
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
   }

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
                              Toast.show(
                                 'Driver added successfully',
                                 Toast.SHORT,
                              );
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

               //this.props.navigation.navigate('App1');
            },
            error => {
               Toast.show('error:' + error.message, Toast.SHORT, Toast.TOP);
               this.setState({ color: '#ffffff' });
            },
         );

      //.catch(error => this.setState({ errorMessage: error.message }))
   };
}

const styles = StyleSheet.create({
   wrapper: {
      flex: 1,
   },
   container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
   },
   socialMedia: {
      flexDirection: 'row',
      width: 300,
      height: 80,
      backgroundColor: '#ffffff',
      marginTop: -50,
      /*borderColor:'#c0c0c0',
    borderWidth:0.5,
    */
      alignItems: 'center',
      justifyContent: 'center',
   },
   facebookButton: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#42A5F5',
      height: 50,
      width: 153,
      marginLeft: 13,
   },
   googlePlusButton: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffffff',
      height: 50,
      width: 153,
      borderColor: '#dcdcdc',
      borderWidth: 0.4,
      marginLeft: 2,
   },
   RideNames: {
      flexDirection: 'row',
      width: 350,
      height: 80,
      backgroundColor: '#ffffff',
   },
   textInputfn: {
      alignSelf: 'stretch',
      width: 170,
      paddingLeft: 40,
      backgroundColor: '#fff',
   },
   textInputln: {
      alignSelf: 'stretch',
      width: 170,
      paddingLeft: 34,
      marginLeft: 5,
      backgroundColor: '#fff',
   },
   textInputEmail: {
      alignSelf: 'stretch',
      width: 350,
      paddingLeft: 40,
      paddingBottom: 25,
      marginLeft: 5,
      backgroundColor: '#fff',
   },
   textInputMobile: {
      width: 300,
      paddingBottom: 25,
      marginLeft: 5,
      backgroundColor: '#fff',
   },
   NextButton: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#42A5F5',
      height: 50,
      width: 350,
      marginTop: 15,
   },
});

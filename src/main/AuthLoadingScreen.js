import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import * as firebase from 'firebase';
import ApiKeys from '../constants/ApiKeys';
export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
    if (!firebase.apps.length) {
      firebase.initializeApp(ApiKeys.FirebaseConfig);
    }
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken2 = await AsyncStorage.getItem('driverId');
    const userToken1 = await AsyncStorage.getItem('riderId');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    /*if(AsyncStorage.getItem('riderId')==""){
    this.props.navigation.navigate(userToken1 ?'App1':'Auth');
    }else{
    this.props.navigation.navigate(userToken2 ?'App2':'Auth');
    }*/
    var token;
    if (userToken1) {
      AsyncStorage.getItem('riderId')
        .then(
          result => (token = result),
          this.props.navigation.navigate(userToken1 ? 'App1' : 'Auth'),
        )
        .catch(e => console.log('err', e));
    } else {
      AsyncStorage.getItem('driverId')
        .then(
          result => (token = result),
          this.props.navigation.navigate(userToken2 ? 'App2' : 'Auth'),
        )
        .catch(e => console.log('err', e));
    }

    //this.props.navigation.navigate(userToken ?'App2':'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={{ backgroundColor: 'red' }}>
        <ActivityIndicator size="large" />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

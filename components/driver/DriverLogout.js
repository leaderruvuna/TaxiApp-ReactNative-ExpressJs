import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
  Image,
} from 'react-native';
import RNRestart from 'react-native-restart';

// Immediately reload the React Native Bundle

import { NavigationActions } from 'react-navigation';
import AuthLoadingScreen from '../main/AuthLoadingScreen';

export default class DriverLogout extends React.Component {
  constructor(props) {
    super(props);
    // this._bootstrapAsync();

    // RNRestart.Restart();
  }
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../Images/logout.png')}
        style={{ width: 25, height: 25 }}
      />
    ),
  };

  componentDidMount() {
    AsyncStorage.clear();
    Expo.Util.reload();
  }
  // Fetch the token from storage then navigate to our appropriate place

  // Render any loading content that you like here
  render() {
    return (
      <View style={{ backgroundColor: 'red' }}>
        {/*<ActivityIndicator size="large"/>
        <StatusBar barStyle="default" />*/}
      </View>
    );
  }
}

import React, { useState } from 'react';
import { View, AsyncStorage } from 'react-native';
import RiderHomeDrawer from '../../navigation/NavigationDrawer';
import styles from './styles/home';
export default function RiderHome() {
   const navigationOptions = {
      header: null,
   };
   return (
      <View style={styles.container}>
         <RiderHomeDrawer />
      </View>
   );
}
_signOutAsync = async () => {
   await AsyncStorage.clear();
   this.props.navigation.navigate('Auth');
};

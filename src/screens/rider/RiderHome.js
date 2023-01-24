import React from 'react';
import { View } from 'react-native';
import { RiderHomeDrawer } from '../../navigation/NavigationDrawer';
import styles from './styles/home';
export default RiderHome = () => {
   return (
      <View style={styles.container}>
         <RiderHomeDrawer />
      </View>
   );
};

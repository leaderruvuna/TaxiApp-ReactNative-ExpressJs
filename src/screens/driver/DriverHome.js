import React from 'react';
import { View } from 'react-native';
import { DriverHomeDrawer } from '../../navigation/NavigationDrawer';
import styles from './styles/home';

export default DriverHome = () => {
   return (
      <View style={styles.container}>
         <DriverHomeDrawer />
      </View>
   );
};

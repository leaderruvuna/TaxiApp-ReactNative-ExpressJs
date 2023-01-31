import React from 'react';
import { View } from 'react-native';
import { RiderHomeDrawer } from '../../navigation/NavigationDrawer';
import styles from './styles/home';
export default RiderHome = props => {
   return (
      <View style={styles.container}>
         <RiderHomeDrawer {...{ props }} />
      </View>
   );
};

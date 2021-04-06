import React from 'react';
import { View, Image } from 'react-native';

export default RiderLogout = () => {
   const navigationOptions = {
      drawerIcon: ({ tintColor }) => (
         <Image
            source={require('../../assets/Images/logout.png')}
            style={{ width: 25, height: 25 }}
         />
      ),
   };

   return (
      <View style={{ backgroundColor: 'red' }}>
         {/*<ActivityIndicator size="large"/>
        <StatusBar barStyle="default" />*/}
      </View>
   );
};

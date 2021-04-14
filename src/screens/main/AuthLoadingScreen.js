import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StatusBar, View } from 'react-native';
export default AuthLoadingScreen = props => {
   const [userToken, setUserToken] = useState(null);
   useEffect(() => {
      props.navigation.navigate(userToken != null ? 'Main' : 'Login');
   }, []);

   return (
      <View style={{ backgroundColor: 'red' }}>
         <ActivityIndicator size="large" />
         <StatusBar barStyle="default" />
      </View>
   );
};

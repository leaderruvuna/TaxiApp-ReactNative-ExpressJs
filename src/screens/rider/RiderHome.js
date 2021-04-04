import React from 'react';
import {
   StyleSheet,
   View,
   AsyncStorage,
} from 'react-native';
import RiderHomeDrawer  from '../../navigation/NavigationDrawer';
import * as firebase from 'firebase';
import ApiKeys from '../../constants/ApiKeys';
export default class RiderHome extends React.Component {
   static navigationOptions = {
      header: null,
   };

   constructor(props) {
      super(props);
      if (!firebase.apps.length) {
         firebase.initializeApp(ApiKeys.FirebaseConfig);
      }
   }
   componentDidMount() {
      
   }
   render() {
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
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
   },
});

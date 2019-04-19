import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  AsyncStorage,
  Image,
  YellowBox,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerItems,
  createStackNavigator,
} from 'react-navigation';
import RiderHistory from './RiderHistory';
import RiderSettings from './RiderSettings';
import RiderPayments from './RiderPayments';
import RiderHomeContents from './RiderHomeContents';
import RiderNotifications from './RiderNotifications';
import RiderHelp from './RiderHelp';
import RiderPickUp from './RiderPickUp';
import RiderLogout from './RiderLogout';

import {
  Content,
  Container,
  Header,
  Left,
  Icon,
  Footer,
  Body,
} from 'native-base';
import * as firebase from 'firebase';
import ApiKeys from '../constants/ApiKeys';

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
    /* firebase.database().ref('/Riders/' + firebase.auth().currentUser.uid+'/Details').once('value').then(function(snapshot) {
     firstname = snapshot.child('firstname').val();
     lastname = snapshot.child('lastname').val();

   }).then(()=>{
    console.log("fine");

   },(error)=>{
    console.error("error"+error);
   });*/
    //AsyncStorage.clear();
    AsyncStorage.getItem('riderId')
      .then(result =>
        firebase
          .database()
          .ref('/Riders/' + result + '/Details')
          .once('value')
          .then(function (snapshot) {
            firstname = snapshot.child('firstname').val();
            lastname = snapshot.child('lastname').val();
          })
          .then(
            () => {
              //console.log("fine"+result);
            },
            error => {
              console.error('error' + error);
              console.log('the user id:' + userId);
            },
          ),
      )
      .catch(e => console.log('err', e));

    YellowBox.ignoreWarnings(['Encountered an error loading page']);
    console.disableYellowBox = true;
  }
  render() {
    return (
      <View style={styles.container}>
        <MyDrawerNav />
      </View>
    );
  }
  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}
const customDrawerContentComponent = props => (
  <Container>
    <Header style={{ height: 200, backgroundColor: '#42A5F5' }}>
      <Body style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Image
          source={require('../Images/avatar.png')}
          style={{ width: 100, height: 100, borderRadius: 100 }}
        />
        <Text style={{ color: '#ffffff', fontWeight: 'bold', fontSize: 20 }}>
          {this.firstname + ' ' + this.lastname}
        </Text>
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>
  </Container>
);
//drawerNavigator
export const MyStackNav = createStackNavigator(
  {
    Main: { screen: RiderHomeContents },
    pickUpLocation: { screen: RiderPickUp },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

const MyDrawerNav = createDrawerNavigator(
  {
    Home: MyStackNav,
    Payments: RiderPayments,
    Settings: RiderSettings,
    History: RiderHistory,
    Notifications: RiderNotifications,
    Help: RiderHelp,
    Logout: RiderLogout,
  },
  {
    initialRouteName: 'Home',
    contentComponent: customDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  },
);
//

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'center',
  },
});

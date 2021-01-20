import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableHighlight,
  Dimensions,
  AppRegistry,
  TextInput,
  YellowBox,
  AppState,
  AsyncStorage,
  TouchableOpacity,
} from 'react-native';
import {
  Content,
  Container,
  Header,
  Left,
  Icon,
  Footer,
  Body,
  Card,
} from 'native-base';

import MapView, { PROVIDER_GOOGLE, AnimatedRegion } from 'react-native-maps';
import GooglePlacesInput from './RiderPlaceSearch';
import * as firebase from 'firebase';
import ApiKeys from '../constants/ApiKeys';

//-----------------------------------------------------------------------------------//
/*
MAP COMPONENTS DEFINITION
*/
//-----------------------------------------------------------------------------------//

let { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
//-----------------------------------------------------------------------------------//

export default class RiderHomeContents extends React.Component {
  static DriverID;
  static Firstname = '';
  static Lastname = '';
  //------------CONSTRUCTOR--------------------  //
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      isModalVisible: false,
      isConfirmButton: false,
      isMounted: false,
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(ApiKeys.FirebaseConfig);
    }
  }
  //------------NAVIGATION OPTION--------------------//
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../Images/home.png')}
        style={{ width: 25, height: 25 }}
      />
    ),
  };
  //-----------COMPONENTDIDMOUNT------------------//
  componentDidMount() {
    //this.isMounted = true;

    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          },
        });
      },
      error => console.log(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );

    this.watchID = navigator.geolocation.watchPosition(
      position => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          },
        });
      },
      //error
      error => this.setState({ error: error.message }),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
        distanceFilter: 10,
      },
    );

    this._getDriverRequestDetails();

    //
    //desable the warnings in yellow box
    YellowBox.ignoreWarnings(['Encountered an error loading page']);
    console.disableYellowBox = true;
  }

  //---------------------------------------------
  //COMPONENT UPDATE
  //---------------------------------------------
  componentDidUpdate(prevState) {
    // Typical usage (don't forget to compare props):
    if (this.state.region !== prevState.region) {
      // AppState.addEventListener('change',this.storeUserLocation());
    }
  }

  //----------------------------------------------
  //----------------------------------------------

  componentWillUnmount() {
    //  this.isMounted = false;
    //  if(!this.state.isMounted){
    navigator.geolocation.clearWatch(this.watchID);
    //  }
  }
  //------------RENDER FUNCTION--------------------//

  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: '#42A5F5', height: 75 }}>
          <Left>
            <TouchableHighlight
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 20,
              }}
              onPress={() => this.props.navigation.toggleDrawer()}
            >
              <Icon name="menu" style={{ color: '#ffffff' }} />
            </TouchableHighlight>
          </Left>
          <Body>
            <Text
              style={{
                color: '#ffffff',
                fontSize: 20,
                fontWeight: 'bold',
                marginTop: 20,
              }}
            >
              Taxi App
            </Text>
          </Body>
        </Header>

        <Content>
          <View style={{ justifyContent: 'center' }}>
            <MapView
              provider={PROVIDER_GOOGLE}
              style={styles.map}
              showsUserLocation={true}
              showsBuildings={true}
              region={this.state.region}
              onRegionChange={region => this.setState({ region })}
              onRegionChangeComplete={region => this.setState({ region })}
            >
              <MapView.Marker coordinate={this.state.region} pinColor="#E91E63">
                <Image
                  source={require('../Images/marker.png')}
                  style={{ width: 100, height: 100, borderRadius: 100 }}
                />
              </MapView.Marker>

              <Image
                source={require('../Images/driver_car.png')}
                style={{
                  width: 30,
                  height: 60,
                  position: 'absolute',
                  top: 150,
                  left: 100,
                }}
              />
              <Text
                style={{
                  width: 30,
                  height: 60,
                  position: 'absolute',
                  top: 150,
                  left: 100,
                  elevation: 10,
                }}
              >
                John
              </Text>
              <Image
                source={require('../Images/driver_car.png')}
                style={{
                  width: 30,
                  height: 60,
                  position: 'absolute',
                  top: 150,
                  left: 250,
                }}
              />
              <Text
                style={{
                  width: 30,
                  height: 60,
                  position: 'absolute',
                  top: 150,
                  left: 250,
                  elevation: 10,
                }}
              >
                John
              </Text>
              <Image
                source={require('../Images/driver_car.png')}
                style={{
                  width: 30,
                  height: 60,
                  position: 'absolute',
                  top: 250,
                  left: 170,
                }}
              />
              <Text
                style={{
                  width: 30,
                  height: 60,
                  position: 'absolute',
                  top: 150,
                  left: 250,
                  elevation: 10,
                }}
              >
                John
              </Text>
            </MapView>
          </View>
          <Card style={styles.searchBoxView}>
            <Image
              style={styles.pickupImage}
              source={require('../Images/pickup.png')}
            />
            <TextInput
              style={styles.DropUpLocation}
              placeholder="PickUp Location"
              //onChangeText={(password)=>this.setState({password})}
              underlineColorAndroid="#ffffff"
              selectionColor="#42A5F5"
              placeholderTextColor="#000000"
              onFocus={() => this.props.navigation.navigate('pickUpLocation')}
            />
          </Card>
        </Content>
        <Footer style={styles.footer}>
          {this.state.isConfirmButton ? (
            <TouchableOpacity
              style={styles.DoneButton}
              onPress={() => this.props.navigation.navigate('pickUpLocation')}
            >
              <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>
                CONFIRM
              </Text>
            </TouchableOpacity>
          ) : null}
          {!this.state.isModalVisible ? (
            <View
              style={{
                width: 300,
                height: 70,
                backgroundColor: '#ffffff',
                position: 'absolute',
                flexDirection: 'row',
              }}
            >
              <Image
                source={require('../Images/avatar.png')}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  marginTop: 10,
                  marginLeft: 7,
                }}
              />
              <Text style={{ fontSize: 18, marginTop: 18, fontWeight: 'bold' }}>
                {RiderHomeContents.Firstname + ' ' + RiderHomeContents.Lastname}
              </Text>
              <Text style={{ fontSize: 18, marginTop: 18, color: '#42A5F5' }}>
                {' '}
                Accepted
              </Text>
            </View>
          ) : null}
        </Footer>
      </Container>
    );
  }
  _pickUpLocation = async () => {
    //this.props.navigation.navigate('pickUpLocation');
    //alert(this.state.region.latitude);
  };
  _getDriverRequestDetails = async () => {
    AsyncStorage.getItem('riderId')
      .then(result =>
        firebase
          .database()
          .ref('/Ride_Request/' + result)
          .once('value')
          .then(function (snapshot) {
            if (snapshot.exists()) {
              DriverID = snapshot.child('driverID').val();
            }
          })
          .then(
            () => {
              if (!DriverID == '') {
                this.setState({ isModalVisible: true });
              }

              firebase
                .database()
                .ref('/Drivers/' + DriverID + '/Details')
                .once('value')
                .then(function (snapshot) {
                  RiderHomeContents.Firstname = snapshot
                    .child('firstname')
                    .val();
                  RiderHomeContents.Lastname = snapshot.child('lastname').val();
                })
                .then(
                  () => {
                    console.log('firstname' + RiderHomeContents.Firstname);
                  },
                  error => {
                    // console.error("error"+error);
                    // console.log("the user id:"+userId);
                  },
                );
            },
            error => {
              console.error('error' + error);
              //console.log("the user id:"+userId);
            },
          ),
      )
      .catch(e => console.log('err', e));

    firebase
      .database()
      .ref('/Ride_confirm/' + result)
      .once('value')
      .then(function (snapshot) {
        if (snapshot.exists()) {
          this.setState({ isModalVisible: true });
        }
      })
      .then(() => {
        console.log('');
      })
      .catch(e => console.log('err', e));
  };

  storeUserLocation() {
    //var userLatitude=this.state.region.latitude;
    //var userLongitude=this.state.region.longitude;
    //if(userLatitude>0 && userLongitude>0){

    RiderID = firebase.auth().currentUser.uid;
    if (RiderID) {
      firebase
        .database()
        .ref(`Riders/${RiderID}/RiderCurrentLocation/`)
        .set({
          latitude: this.state.region.latitude,
          longitude: this.state.region.longitude,
        })
        .then(
          () => {
            //firebase.database().ref(`Payments/${RiderID}/PaymentsHistory`);
            //Toast.show("payments updated successfully",Toast.SHORT);
            console.log(
              'latitude:' +
                this.state.region.latitude +
                '   longitude:' +
                this.state.region.latitude,
            );
          },
          error => {
            //Toast.show(error.message,Toast.SHORT);
            console.log('error with location:' + error);
          },
        );
    }

    // }
  }
}

//------------ STYLESHEET--------------------//
const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  footer: {
    backgroundColor: '#ffffff',
    height: 80,
  },
  map: {
    height: 490,
    marginTop: 0,
  },
  searchBoxView: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: 320,
    minHeight: 50,
    position: 'absolute',
    top: 10,
    left: 20,
    borderRadius: 5,
    elevation: 5,
  },
  searchIcon: {
    color: '#42A5F5',
    marginTop: 12,
    marginLeft: 10,
  },
  DropUpLocation: {
    alignSelf: 'stretch',
    width: 280,
    paddingBottom: 2,
    marginTop: -3,
    marginLeft: 8,
    backgroundColor: '#fff',
    fontSize: 17,
  },
  pickupImage: {
    marginLeft: 8,
    marginTop: 10,
    width: 25,
    height: 25,
  },
  DoneButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#42A5F1',
    height: 50,
    width: 350,
    marginTop: 5,
    marginLeft: 3,
  },
});
AppRegistry.registerComponent('RiderHomeContents', () => RiderHomeContents);

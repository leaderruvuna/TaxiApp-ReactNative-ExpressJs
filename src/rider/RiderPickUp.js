import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  AsyncStorage,
  createDrawerNavigator,
  TouchableOpacity,
  Image,
  TouchableHighlight,
  KeyboardAvoidingView,
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
  CardItem,
} from 'native-base';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Toast from 'react-native-simple-toast';
import * as firebase from 'firebase';
import ApiKeys from '../constants/ApiKeys';
const homePlace = {
  description: 'Home',
  geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};
const workPlace = {
  description: 'Work',
  geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};
export default class RiderPickUp extends React.Component {
  static navigationOptions = {};
  //=====================================================================================================================
  //to make these variblas class mebers and be accessible everywhere
  static pickupName;
  static pickupLatitude;
  static pickupLongitude;
  //dropOff data
  static dropOffName;
  static dropOffLatitude;
  static dropOffLongitude;

  //=====================================================================================================================
  constructor(props) {
    super(props);
    if (!firebase.apps.length) {
      firebase.initializeApp(ApiKeys.FirebaseConfig);
    }
  }
  render() {
    return (
      <Container style={{ flex: 1 }}>
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
              onPress={() => this.props.navigation.navigate('Main')}
            >
              <Icon name="arrow-back" style={{ color: '#ffffff' }} />
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
              Locations
            </Text>
          </Body>
        </Header>
        <KeyboardAvoidingView style={{ flex: 1 }}>
          <Content>
            <View style={{ width: 400, minHeight: 120, maxHeight: 120 }}>
              <GooglePlacesInput />
            </View>
            <View style={{ width: 400, minHeight: 120, maxHeight: 120 }}>
              <GooglePlacesDropOff />
            </View>
            <TouchableOpacity
              style={styles.bookButton}
              onPress={this._validatePickUpAndDropOffLocations}
            >
              <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>
                REQUEST
              </Text>
            </TouchableOpacity>
          </Content>
        </KeyboardAvoidingView>
      </Container>
    );
  }

  //validate the google places auto complete

  //====================================================================================================================
  _validatePickUpAndDropOffLocations = () => {
    // alert("good"+GooglePlacesInput.pickupLatitude);
    if (
      GooglePlacesInput.pickupName == null ||
      GooglePlacesInput.pickupLatitude == null ||
      GooglePlacesInput.pickupLongitude == null
    ) {
      Toast.show('SET YOUR PICK UP LOCATION PLEASE', Toast.SHORT, Toast.TOP);
      return;
    }
    if (
      GooglePlacesDropOff.dropOffName == null ||
      GooglePlacesDropOff.dropOffLatitude == null ||
      GooglePlacesDropOff.dropOffLongitude == null
    ) {
      Toast.show('SET YOUR DROP OFF LOCATION PLEASE', Toast.SHORT, Toast.TOP);
      return;
    }
    Toast.show('Good', Toast.SHORT, Toast.TOP);
    this._getNearbyDrivers();
  };
  //====================================================================================================================

  //GET NEARBY DRIVERS
  //====================================================================================================================
  _getNearbyDrivers = () => {
    var DriverKeys = [];
    var counts = [];
    var randomIndex;
    var urlRef = firebase.database().ref('/Drivers/');
    urlRef.once('value', snapshot => {
      snapshot.forEach(function (child) {
        //console.log("keys"+child.key);
        DriverKeys.push(child.key);
      });
      for (i = 0; i < DriverKeys.length; i++) {
        counts.push(DriverKeys[i]);
      }

      randomIndex = Math.floor(Math.random() * DriverKeys.length);
      //console.log(counts[randomIndex]);

      //request the driver

      this._requestDriver(counts[randomIndex]);
    });
  };
  //=======================================================================================================================
  /* 
    REQUEST DRIVERS 
  */
  _requestDriver = driverID => {
    /*firebase.database().ref('/Ride_Request/' +driverID).once('value').then(function(snapshot) {
          
          if(snapshot.exists()){
            Toast.show("This driver is busy,Try another one",Toast.SHORT);
            return;
          }
          
         
          
          }).then(()=>{
            
          },(error)=>{
            console.error("error"+error);
            //console.log("the user id:"+userId);
          });
  */
    //store rider informations
    AsyncStorage.getItem('riderId')
      .then(riderID =>
        //riderId=result,

        firebase
          .database()
          .ref('Ride_Request/' + riderID)
          .set({
            driverID: driverID,
          })
          .then(
            () => {
              Toast.show('driver requested successful', Toast.SHORT);
            },
            error => {
              Toast.show(error.message, Toast.SHORT);
            },
          ),
      )
      .catch(e => console.log('err', e));

    //store driver information
    AsyncStorage.getItem('riderId')
      .then(riderID =>
        //riderId=result,

        firebase
          .database()
          .ref('Ride_Request/' + driverID + '/')
          .set({
            riderID: riderID,
            pickUpName: GooglePlacesInput.pickupName,
            dropOffName: GooglePlacesDropOff.dropOffName,
            pickupLatitude: GooglePlacesInput.pickupLatitude,
            pickupLongitude: GooglePlacesInput.pickupLongitude,
            dropOffLatitude: GooglePlacesDropOff.dropOffLatitude,
            dropOffLongitude: GooglePlacesDropOff.dropOffLongitude,
          })
          .then(
            () => {},
            error => {
              //Toast.show(error.message,Toast.SHORT);
              console.error('error:' + error);
            },
          ),
      )
      .catch(e => console.log('err', e));
  };
}

//==========================================================================================================================
const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  map: {
    height: 600,
    marginTop: 0,
  },
  searchIcon: {
    marginTop: 8,
    marginLeft: 8,
  },
  bookButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#42A5F5',
    height: 50,
    width: 350,
    marginLeft: 5,
  },
});

//===========================================================================================================================
const GooglePlacesInput = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder="Pick Up Location"
      minLength={2}
      autoFocus={true}
      returnKeyType={'search'}
      listViewDisplayed="auto"
      fetchDetails={true}
      renderDescription={row => row.description}
      onPress={(data, details = null) => {
        console.log(data, details);
        //set pick up data from google auto complete
        (pickupName = data.description), // selected address
          (pickupLatitude = `${details.geometry.location.lat}`),
          (pickupLongitude = `${details.geometry.location.lng}`),
          //storing data
          (GooglePlacesInput.pickupLatitude = pickupLatitude),
          (GooglePlacesInput.pickupName = pickupName),
          (GooglePlacesInput.pickupLongitude = pickupLongitude);
      }}
      getDefaultValue={() => ''}
      query={{
        key: 'AIzaSyANWRmdcfG4hksdtmVYxnqKCIsfW__rsVY',
        language: 'en',
        types: 'geocode',
      }}
      styles={{
        textInputContainer: {
          width: '100%',
          backgroundColor: '#ffffff',
        },
        description: {
          fontWeight: 'bold',
        },
        predefinedPlacesDescription: {
          color: '#ffffff',
          height: 30,
        },
      }}
      currentLocation={true}
      currentLocationLabel="Current location"
      nearbyPlacesAPI="GooglePlacesSearch"
      GoogleReverseGeocodingQuery={{}}
      GooglePlacesSearchQuery={{
        rankby: 'distance',
        types: 'food',
      }}
      filterReverseGeocodingByTypes={[
        'locality',
        'administrative_area_level_3',
      ]} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
      /*predefinedPlaces={[homePlace, workPlace]}*/

      debounce={200}
      renderLeftButton={() => (
        <Image
          style={{ width: 25, height: 25, marginTop: 10, marginLeft: 15 }}
          source={require('../Images/pickup.png')}
        />
      )}
      renderRightButton={() => <Text />}
    />
  );
};

//===========================================================================================================================
const GooglePlacesDropOff = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder="Drop Off Location"
      minLength={2}
      autoFocus={false}
      returnKeyType={'search'}
      listViewDisplayed="auto"
      fetchDetails={true}
      renderDescription={row => row.description}
      onPress={(data, details = null) => {
        //console.log(data, details);
        //set drop off data from google auto complete

        (dropOffName = data.description), // selected address
          (dropOffLatitude = `${details.geometry.location.lat}`),
          (dropOffLongitude = `${details.geometry.location.lng}`),
          //storing data
          (GooglePlacesDropOff.dropOffLatitude = dropOffLatitude),
          (GooglePlacesDropOff.dropOffName = dropOffName),
          (GooglePlacesDropOff.dropOffLongitude = dropOffLongitude);
      }}
      getDefaultValue={() => ''}
      query={{
        key: 'AIzaSyANWRmdcfG4hksdtmVYxnqKCIsfW__rsVY',
        language: 'en',
        types: 'geocode',
      }}
      styles={{
        textInputContainer: {
          width: '100%',
          backgroundColor: '#ffffff',
        },
        description: {
          fontWeight: 'bold',
        },
        predefinedPlacesDescription: {
          color: '#ffffff',
        },
      }}
      currentLocation={true}
      currentLocationLabel="Current location"
      nearbyPlacesAPI="GooglePlacesSearch"
      GoogleReverseGeocodingQuery={{}}
      GooglePlacesSearchQuery={{
        rankby: 'distance',
        types: 'food',
      }}
      filterReverseGeocodingByTypes={[
        'locality',
        'administrative_area_level_3',
      ]} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
      /*predefinedPlaces={[homePlace, workPlace]}*/

      debounce={200}
      renderLeftButton={() => (
        <Image
          style={{ width: 25, height: 25, marginTop: 10, marginLeft: 15 }}
          source={require('../Images/dropoff.png')}
        />
      )}
      renderRightButton={() => <Text />}
    />
  );
};

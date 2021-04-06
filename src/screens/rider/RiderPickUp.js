import React, { useState } from 'react';
import {
   Text,
   View,
   AsyncStorage,
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
import styles from './styles/pickup';
import apiKey from '../../constants/ApiKeys';

const homePlace = {
   description: 'Home',
   geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};
const workPlace = {
   description: 'Work',
   geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};

export default RiderPickUp = props => {
   const [pickupName, setPickupName] = useState('');
   const [pickupLatitude, setPickupLatitude] = useState('');
   const [pickupLongitude, setPickupLongitude] = useState('');
   const [dropOffName, setDropOffName] = useState('');
   const [dropOffLatitude, setDropOffLatitude] = useState('');
   const [dropOffLongitude, setDropOffLongitude] = useState('');
   const [navigationOptions, setNavigationOptions] = useState({});

   return (
      <Container style={{ flex: 1 }}>
         <Header
            style={{
               backgroundColor: '#42A5F5',
               height: 75,
            }}
         >
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
                  onPress={() => props.navigation.navigate('Main')}
               >
                  <Icon
                     name="arrow-back"
                     style={{
                        color: '#ffffff',
                     }}
                  />
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
               <View
                  style={{
                     width: 400,
                     minHeight: 120,
                     maxHeight: 120,
                  }}
               >
                  <GooglePlacesInput />
               </View>
               <View
                  style={{
                     width: 400,
                     minHeight: 120,
                     maxHeight: 120,
                  }}
               >
                  <GooglePlacesDropOff />
               </View>
               <TouchableOpacity
                  style={styles.bookButton}
                  onPress={this._validatePickUpAndDropOffLocations}
               >
                  <Text
                     style={{
                        color: '#ffffff',
                        fontWeight: 'bold',
                     }}
                  >
                     REQUEST
                  </Text>
               </TouchableOpacity>
            </Content>
         </KeyboardAvoidingView>
      </Container>
   );
};

_validatePickUpAndDropOffLocations = () => {
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

_getNearbyDrivers = () => {
   var DriverKeys = [];
   var counts = [];
   var randomIndex;
   var urlRef = firebase.database().ref('/Drivers/');
   urlRef.once('value', snapshot => {
      snapshot.forEach(function (child) {
         DriverKeys.push(child.key);
      });
      for (i = 0; i < DriverKeys.length; i++) {
         counts.push(DriverKeys[i]);
      }
      randomIndex = Math.floor(Math.random() * DriverKeys.length);
      this._requestDriver(counts[randomIndex]);
   });
};

_requestDriver = driverID => {
   AsyncStorage.getItem('riderId')
      .then(riderID =>
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

   AsyncStorage.getItem('riderId')
      .then(riderID =>
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
                  console.error('error:' + error);
               },
            ),
      )
      .catch(e => console.log('err', e));
};

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
            (pickupName = data.description),
               (pickupLatitude = `${details.geometry.location.lat}`),
               (pickupLongitude = `${details.geometry.location.lng}`),
               (GooglePlacesInput.pickupLatitude = pickupLatitude),
               (GooglePlacesInput.pickupName = pickupName),
               (GooglePlacesInput.pickupLongitude = pickupLongitude);
         }}
         getDefaultValue={() => ''}
         query={{
            key: apiKey.GoolePlaces,
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
         ]}
         debounce={200}
         renderLeftButton={() => (
            <Image
               style={{
                  width: 25,
                  height: 25,
                  marginTop: 10,
                  marginLeft: 15,
               }}
               source={require('../../assets/Images/pickup.png')}
            />
         )}
         renderRightButton={() => <Text />}
      />
   );
};

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
            (dropOffName = data.description),
               (dropOffLatitude = `${details.geometry.location.lat}`),
               (dropOffLongitude = `${details.geometry.location.lng}`),
               (GooglePlacesDropOff.dropOffLatitude = dropOffLatitude),
               (GooglePlacesDropOff.dropOffName = dropOffName),
               (GooglePlacesDropOff.dropOffLongitude = dropOffLongitude);
         }}
         getDefaultValue={() => ''}
         query={{
            key: apiKey.GoolePlaces,
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
         ]}
         debounce={200}
         renderLeftButton={() => (
            <Image
               style={{
                  width: 25,
                  height: 25,
                  marginTop: 10,
                  marginLeft: 15,
               }}
               source={require('../../assets/Images/dropoff.png')}
            />
         )}
         renderRightButton={() => <Text />}
      />
   );
};

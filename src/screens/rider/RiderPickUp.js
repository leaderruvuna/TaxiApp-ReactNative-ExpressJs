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
   Right,
} from 'native-base';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Ionicons } from '@expo/vector-icons';
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
      <Container style={styles.containerView}>
         <Header style={styles.header}>
            <Left>
               <TouchableHighlight
                  style={styles.backButton}
                  onPress={() => props.navigation.navigate('Main')}
               >
                  <Ionicons name="arrow-back-outline" size={24} color="white" />
               </TouchableHighlight>
            </Left>
            <Body>
               <Text style={styles.headerText}>Locations</Text>
            </Body>
            <Right></Right>
         </Header>
         <KeyboardAvoidingView style={{ flex: 1 }}>
            <Content>
               <View style={styles.placesContainer}>
                  <View style={styles.currentLocation}>
                     <GooglePlacesInput />
                  </View>
                  <View style={styles.destination}>
                     <GooglePlacesDropOff />
                  </View>
               </View>
               <View style={styles.bookButtonContainer}>
                  <TouchableOpacity
                     style={styles.bookButton}
                     onPress={() => {}}
                  >
                     <Text style={styles.bookButtonText}>Confirm</Text>
                  </TouchableOpacity>
               </View>
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
   //this._getNearbyDrivers();
};

const GooglePlacesInput = () => {
   return (
      <GooglePlacesAutocomplete
         placeholder="Where are you?"
         minLength={2}
         autoFocus={true}
         returnKeyType={'search'}
         listViewDisplayed="auto"
         fetchDetails={true}
         renderDescription={row => row.description}
         onPress={(data, details = null) => {
            // console.log(data, details);
            // (pickupName = data.description),
            //    (pickupLatitude = `${details.geometry.location.lat}`),
            //    (pickupLongitude = `${details.geometry.location.lng}`),
            //    (GooglePlacesInput.pickupLatitude = pickupLatitude),
            //    (GooglePlacesInput.pickupName = pickupName),
            //    (GooglePlacesInput.pickupLongitude = pickupLongitude);
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
         currentLocationLabel=""
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
         placeholder="Where to?"
         minLength={2}
         autoFocus={false}
         returnKeyType={'search'}
         listViewDisplayed="auto"
         fetchDetails={true}
         renderDescription={row => row.description}
         onPress={(data, details = null) => {
            // (dropOffName = data.description),
            //    (dropOffLatitude = `${details.geometry.location.lat}`),
            //    (dropOffLongitude = `${details.geometry.location.lng}`),
            //    (GooglePlacesDropOff.dropOffLatitude = dropOffLatitude),
            //    (GooglePlacesDropOff.dropOffName = dropOffName),
            //    (GooglePlacesDropOff.dropOffLongitude = dropOffLongitude);
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
         currentLocationLabel=""
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

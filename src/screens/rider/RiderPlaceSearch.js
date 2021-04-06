import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Icon } from 'native-base';
import styles from './styles/search';
import apiKey from '../../constants/ApiKeys';
const homePlace = {
   description: 'Home',
   geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};
const workPlace = {
   description: 'Work',
   geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};

export default GooglePlacesInput = () => {
   return (
      <GooglePlacesAutocomplete
         placeholder="Search"
         minLength={2}
         autoFocus={false}
         returnKeyType={'search'}
         listViewDisplayed="auto"
         fetchDetails={true}
         renderDescription={row => row.description}
         onPress={(data, details = null) => {
            console.log(data, details);
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
            },
            description: {
               fontWeight: 'bold',
            },
            predefinedPlacesDescription: {
               color: '#1faadb',
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
            <Icon name="search" style={styles.searchIcon} />
         )}
         renderRightButton={() => <Text />}
      />
   );
};

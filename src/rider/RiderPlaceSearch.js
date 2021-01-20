import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Icon } from 'native-base';
const homePlace = {
  description: 'Home',
  geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};
const workPlace = {
  description: 'Work',
  geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};

export default class GooglePlacesInput extends React.Component {
  render() {
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
          key: 'AIzaSyANWRmdcfG4hksdtmVYxnqKCIsfW__rsVY',
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
        ]} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
        /*predefinedPlaces={[homePlace, workPlace]}*/

        debounce={200}
        renderLeftButton={() => (
          <Icon name="search" style={styles.searchIcon} />
        )}
        renderRightButton={() => <Text />}
      />
    );
  }
}
const styles = StyleSheet.create({
  searchIcon: {
    color: '#42A5F5',
    marginTop: 8,
    marginLeft: 10,
  },
});

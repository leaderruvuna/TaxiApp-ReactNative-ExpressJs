import React from 'react';
import {
   StyleSheet,
   Text,
   View,
   Button,
   AsyncStorage,
   Image,
   TouchableHighlight,
} from 'react-native';
import {
   Content,
   Container,
   Header,
   Left,
   Icon,
   Footer,
   Body,
} from 'native-base';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import styles from './styles/drop';
import apiKey from '../../constants/ApiKeys';

const homePlace = {
   description: 'Home',
   geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};
const workPlace = {
   description: 'Work',
   geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};
export default RiderPickDrop = () => {
   return (
      <Container>
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
                  onPress={() => props.navigation.navigate('Home')}
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
                  PickUp
               </Text>
            </Body>
         </Header>

         <Content>
            <View
               style={{
                  justifyContent: 'center',
               }}
            >
               <GooglePlacesInput
                  style={{
                     marginTop: 200,
                  }}
               />
            </View>
         </Content>
      </Container>
   );
};

const GooglePlacesInput = () => {
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

import React, {
   useState,
   useEffect,
   useRef,
   useMemo,
   useCallback,
} from 'react';
import {
   Text,
   View,
   Image,
   TouchableHighlight,
   Dimensions,
   AppRegistry,
   TextInput,
   TouchableOpacity,
   ScrollView,
} from 'react-native';
import * as Location from 'expo-location';
import Modal from 'react-native-modal';
import { AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import BottomSheet from '@gorhom/bottom-sheet';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import styles from './styles/homecontents';
const marker = require('../../assets/Images/marker.png');
const taxiImage = require('../../assets/Images/taxi3.png');
const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const API_KEY = 'AIzaSyANWRmdcfG4hksdtmVYxnqKCIsfW__rsVY';
const LATITUDE_DELTA = 0;
const LONGITUDE_DELTA = 0;

export default RiderHomeContents = ({ navigation }) => {
   const [region, setRegion] = useState(null);
   const [DATA, setDATA] = useState([
      { size: 'XL', time: '3mins', price: ' UGX 50000-70000', time: '2mins' },
      { size: 'SM', price: ' UGX 5000-7000', time: '1mins' },
      { size: 'L', price: ' UGX 15000-5000', time: '2mins' },
      { size: 'XXL', price: ' UGX 70000-100000', time: '4mins' },
   ]);
   const [stars, setStars] = useState(['one', 'two', 'three', 'four', 'five']);
   const [numStars, setNumStars] = useState(3);
   const [isModalVisible, setModalVisible] = useState(false);
   const [isPickupSelected, setPickup] = useState(false);
   const [isDestinationSelected, setDestination] = useState(false);
   const bottomSheetRef = useRef(null);
   const [location, setLocation] = useState(null);
   const [errorMsg, setErrorMsg] = useState(null);

   const snapPoints = useMemo(() => ['25%', '90%'], []);
   const handleSheetChanges = useCallback(index => {
      console.log('handleSheetChanges', index);
   }, []);
   const handleSnapPress = useCallback(index => {
      bottomSheetRef.current?.snapToIndex(index);
   }, []);

   const checkGPS = async () => {
      const status = await Location.getProviderStatusAsync();
      if (status.locationServicesEnabled) {
         console.log('GPS is enabled');
      } else {
         console.log('GPS is disabled');
      }
   };
   const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
         setErrorMsg('Permission to access location was denied');
         return;
      }
      const location = await Location.getCurrentPositionAsync({
         accuracy: Location.Accuracy.Highest,
         maximumAge: 10000,
      }).catch(err => {
         console.log(err);
      });
      setLocation(location);
      setRegion({
         latitude: location.coords.latitude,
         longitude: location.coords.longitude,
         latitudeDelta: LATITUDE_DELTA,
         longitudeDelta: LONGITUDE_DELTA,
      });
   };
   useEffect(() => {
      checkGPS();
      getLocation();
   }, []);
   return (
      <View>
         <View style={styles.mapContainer}>
            <View>
               <MapView
                  provider={PROVIDER_GOOGLE}
                  style={styles.map}
                  showsUserLocation={true}
                  showsBuildings={true}
                  region={region}
                  // region={region}
                  // onRegionChange={reg => setRegion(reg)}
                  // onRegionChangeComplete={reg => setRegion(reg)}
               >
                  {region ? (
                     <Marker
                        coordinate={{
                           latitude: region.latitude,
                           longitude: region.longitude,
                        }}
                        pinColor="#E91E63"
                     >
                        <Image
                           source={marker}
                           style={{
                              width: 100,
                              height: 100,
                              borderRadius: 100,
                           }}
                        />
                     </Marker>
                  ) : (
                     <View />
                  )}
               </MapView>
               <TouchableHighlight
                  style={styles.drawerButton}
                  onPress={() => navigation.toggleDrawer()}
               >
                  <MaterialCommunityIcons name="menu" size={24} color="black" />
               </TouchableHighlight>
            </View>
            <BottomSheet
               ref={bottomSheetRef}
               index={1}
               snapPoints={snapPoints}
               onChange={handleSheetChanges}
            >
               <View style={styles.bottomSheetContainer}>
                  <View style={styles.bottomSheetHeader}>
                     <Text style={{ alignSelf: 'flex-start', fontSize: 22 }}>
                        Where are you going?
                     </Text>
                  </View>
                  <ScrollView
                     contentContainerStyle={styles.tripContainer}
                     horizontal={false}
                     keyboardShouldPersistTaps="handled"
                  >
                     <View
                        style={{
                           ...styles.searchBoxView,
                           borderColor: isPickupSelected ? 'green' : 'black',
                        }}
                     >
                        <Entypo
                           style={{ marginTop: 13 }}
                           name="circle"
                           size={20}
                           color={isPickupSelected ? 'green' : 'black'}
                        />
                        <ScrollView
                           contentContainerStyle={{
                              flex: 1,
                              width: '100%',
                              height: '70%',
                           }}
                           horizontal={true}
                           keyboardShouldPersistTaps="handled"
                        >
                           <GooglePlacesAutocomplete
                              placeholder="Pick up location"
                              keyboardShouldPersistTaps="handled"
                              listViewDisplayed={false}
                              onPress={(data, details = null) => {
                                 // 'details' is provided when fetchDetails = true
                                 console.log(data, details);
                              }}
                              query={{
                                 key: API_KEY,
                                 language: 'en',
                              }}
                           />
                        </ScrollView>
                     </View>
                     <View
                        style={{
                           ...styles.searchBoxView,
                           borderColor: isDestinationSelected
                              ? 'green'
                              : 'black',
                        }}
                     >
                        <Entypo
                           style={{ marginTop: 13 }}
                           name="circle"
                           size={20}
                           color={isDestinationSelected ? 'green' : 'black'}
                        />
                        <ScrollView
                           contentContainerStyle={{
                              flex: 1,
                              width: '100%',
                              height: '70%',
                           }}
                           keyboardShouldPersistTaps="handled"
                           horizontal={true}
                        >
                           <GooglePlacesAutocomplete
                              keyboardShouldPersistTaps="handled"
                              placeholder="Destination"
                              listViewDisplayed={false}
                              onPress={(data, details = null) => {
                                 // 'details' is provided when fetchDetails = true
                                 console.log(data, details);
                              }}
                              query={{
                                 key: API_KEY,
                                 language: 'en',
                              }}
                           />
                        </ScrollView>
                     </View>
                     <View style={styles.carsList}>
                        {/* {DATA.map((item, index) => (
                           
                        ))} */}
                     </View>
                  </ScrollView>
                  <View style={styles.bookButtonContainer}>
                     <TouchableOpacity style={styles.bookButton}>
                        <Text style={styles.bookText}>SEARCH CARS</Text>
                     </TouchableOpacity>
                  </View>
               </View>
            </BottomSheet>
         </View>
         <View>
            <Modal isVisible={isModalVisible}>
               <View style={styles.modelContainer}>
                  <View style={styles.modelHeader}>
                     <View style={styles.imageContainer}>
                        <View style={styles.image}>
                           <AntDesign name="user" size={30} color="black" />
                        </View>
                     </View>
                     <View style={styles.driverDetailsContainer}>
                        <View style={styles.driverName}>
                           <Text style={styles.nameText}>James Bond</Text>
                        </View>
                     </View>
                     <View style={styles.raitingContainer}>
                        <View style={styles.raiting}>
                           {stars.map((_, index) =>
                              index + 1 <= numStars ? (
                                 <AntDesign
                                    key={index}
                                    name="star"
                                    size={24}
                                    color="orange"
                                 />
                              ) : (
                                 <AntDesign
                                    key={index}
                                    name="star"
                                    size={24}
                                    color="grey"
                                 />
                              ),
                           )}
                        </View>
                     </View>
                  </View>
                  <View style={styles.modelFooter}>
                     <TouchableOpacity
                        style={styles.cancelButton}
                        onPress={() => {
                           setModalVisible(false);
                        }}
                     >
                        <Text style={styles.cancelText}>CANCEL</Text>
                     </TouchableOpacity>
                     <TouchableOpacity
                        style={styles.acceptButton}
                        onPress={() => {
                           setModalVisible(false);
                        }}
                     >
                        <Text style={styles.acceptText}>ACCEPT</Text>
                     </TouchableOpacity>
                  </View>
               </View>
            </Modal>
         </View>
      </View>
   );
};
const CarItem = ({}) => {
   return (
      <TouchableHighlight
         key={index}
         underlayColor="transparent"
         style={styles.carsContainer}
         onPress={() => {}}
      >
         <View style={styles.carsContainer}>
            <View style={styles.vehicle}>
               <Image
                  source={taxiImage}
                  style={{
                     width: 80,
                     height: 80,
                  }}
               />
            </View>
            <View style={styles.type}>
               <Text style={styles.typeTitle}>{item.size}</Text>
               <Text style={styles.typeTime}>{item.time}</Text>
            </View>
            <View style={styles.priceRange}>
               <Text style={styles.pricing}>{item.price}</Text>
            </View>
         </View>
      </TouchableHighlight>
   );
};
AppRegistry.registerComponent('RiderHomeContents', () => RiderHomeContents);

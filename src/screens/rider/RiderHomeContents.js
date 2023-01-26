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
import { AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import BottomSheet from '@gorhom/bottom-sheet';
import MapView, { PROVIDER_GOOGLE, Callout } from 'react-native-maps';
import Modal from 'react-native-modal';
import styles from './styles/homecontents';
const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
export default RiderHomeContents = props => {
   const [watchId, setWatchId] = useState({});
   const [region, setRegion] = useState({
      latitude: LATITUDE,
      longitude: LONGITUDE,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
   });
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
   const snapPoints = useMemo(() => ['22%', '90%'], []);
   const handleSheetChanges = useCallback(index => {
      console.log('handleSheetChanges', index);
   }, []);
   const handleSnapPress = useCallback(index => {
      bottomSheetRef.current?.snapToIndex(index);
   }, []);

   async function getCurrentPositionFnc() {
      await navigator.geolocation.getCurrentPosition(
         position => {
            setRegion({
               latitude: position.coords.latitude,
               longitude: position.coords.longitude,
               latitudeDelta: LATITUDE_DELTA,
               longitudeDelta: LONGITUDE_DELTA,
            });
         },
         error => console.log(error.message),
         {
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 1000,
         },
      );
   }
   async function watchPositionFnc() {
      await navigator.geolocation.watchPosition(
         position => {
            setRegion({
               latitude: position.coords.latitude,
               longitude: position.coords.longitude,
               latitudeDelta: LATITUDE_DELTA,
               longitudeDelta: LONGITUDE_DELTA,
            });
         },
         //setWatchId(watchingId),
         error => {
            console.log(error.message);
         },
         {
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 1000,
            distanceFilter: 10,
         },
      );
   }
   useEffect(() => {
      getCurrentPositionFnc();
   }, []);
   useEffect(() => {
      watchPositionFnc();
   }, [region, watchId]);
   return (
      <View>
         <View style={styles.mapContainer}>
            <MapView
               provider={PROVIDER_GOOGLE}
               style={styles.map}
               showsUserLocation={true}
               showsBuildings={true}
               region={region}
               onRegionChange={reg => setRegion(reg)}
               onRegionChangeComplete={reg => setRegion(reg)}
            ></MapView>
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
                  <ScrollView contentContainerStyle={styles.tripContainer}>
                     <View
                        style={{
                           ...styles.searchBoxView,
                           borderColor: isPickupSelected ? 'green' : 'black',
                        }}
                     >
                        <Entypo
                           name="circle"
                           size={20}
                           color={isPickupSelected ? 'green' : 'black'}
                        />
                        <TextInput
                           style={styles.searchBox}
                           placeholder=" Search pick up location"
                           underlineColorAndroid="#ffffff"
                           selectionColor="#42A5F5"
                           placeholderTextColor="#000000"
                           onFocus={() => {
                              setPickup(true);
                              setDestination(false);
                              handleSnapPress(1);
                           }}
                           onBlur={() => {
                              setPickup(false);
                              setDestination(false);
                           }}
                        />
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
                           name="circle"
                           size={20}
                           color={isDestinationSelected ? 'green' : 'black'}
                        />
                        <TextInput
                           style={styles.searchBox}
                           placeholder=" Search destination"
                           underlineColorAndroid="#ffffff"
                           selectionColor="#42A5F5"
                           placeholderTextColor="#000000"
                           onFocus={() => {
                              setDestination(true);
                              setPickup(false);
                           }}
                           onBlur={() => {
                              setDestination(false);
                              setPickup(false);
                           }}
                        />
                     </View>
                     <View style={styles.carsList}>
                        {DATA.map((item, index) => (
                           <TouchableHighlight
                              key={index}
                              underlayColor="transparent"
                              style={styles.carsContainer}
                              onPress={() => {
                                 setModalVisible(true);
                              }}
                           >
                              <View style={styles.carsContainer}>
                                 <View style={styles.vehicle}>
                                    <Image
                                       source={require('../../assets/Images/taxi3.png')}
                                       style={{
                                          width: 80,
                                          height: 80,
                                       }}
                                    />
                                 </View>
                                 <View style={styles.type}>
                                    <Text style={styles.typeTitle}>
                                       {item.size}
                                    </Text>
                                    <Text style={styles.typeTime}>
                                       {item.time}
                                    </Text>
                                 </View>
                                 <View style={styles.priceRange}>
                                    <Text style={styles.pricing}>
                                       {item.price}
                                    </Text>
                                 </View>
                              </View>
                           </TouchableHighlight>
                        ))}
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

AppRegistry.registerComponent('RiderHomeContents', () => RiderHomeContents);
import React, { useState, useEffect } from 'react';
import {
   Text,
   View,
   Image,
   TouchableHighlight,
   Dimensions,
   AppRegistry,
   TextInput,
   TouchableOpacity,
   Button,
   ScrollView,
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
import { MaterialCommunityIcons, AntDesign, Entypo } from '@expo/vector-icons';
import StarRating from 'react-native-star-rating';
import MapView, { PROVIDER_GOOGLE, AnimatedRegion } from 'react-native-maps';
import Modal from 'react-native-modal';
import styles from './styles/homecontents';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default RiderHomeContents = props => {
   const [firstName, setFristName] = useState('');
   const [lastName, setLastName] = useState('');
   const [driverId, setDriverId] = useState('');
   const [watchId, setWatchId] = useState({});
   const [region, setRegion] = useState({
      latitude: LATITUDE,
      longitude: LONGITUDE,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
   });
   const [dataSource, setDataSource] = useState(['XL', 'SM', 'L', 'XXL']);
   const [stars, setStars] = useState(['one', 'two', 'three', 'four', 'five']);
   const [numStars, setNumStars] = useState(3);
   const [isModalVisible, setModalVisible] = useState(false);
   const [isConfirmButton, setConfirmButton] = useState(false);
   const [isMounted, setMounted] = useState(false);
   const [isDestinationVisible, setDestinationVisible] = useState(true);
   const [isModelVisible, setModelVisible] = useState(false);

   useEffect(() => {
      navigator.geolocation.getCurrentPosition(
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

      const watchingId = navigator.geolocation.watchPosition(
         position => {
            setRegion({
               latitude: position.coords.latitude,
               longitude: position.coords.longitude,
               latitudeDelta: LATITUDE_DELTA,
               longitudeDelta: LONGITUDE_DELTA,
            });
         },
         //setWatchId(watchingId),
         error =>
            this.setState({
               error: error.message,
            }),
         {
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 1000,
            distanceFilter: 10,
         },
      );
   }, [region, watchId]);

   const navigationOptions = {
      drawerIcon: ({ tintColor }) => (
         <Image
            source={require('../../assets/Images/home.png')}
            style={{
               width: 25,
               height: 25,
            }}
         />
      ),
   };

   return (
      <Container>
         <Header style={styles.headerContainer}>
            <Left>
               <TouchableHighlight
                  style={styles.drawerButton}
                  onPress={() => props.navigation.toggleDrawer()}
               >
                  <MaterialCommunityIcons name="menu" size={24} color="black" />
               </TouchableHighlight>
            </Left>
            <Body>
               <Text style={styles.headerTitle}>Taxi App</Text>
            </Body>
         </Header>
         <Content>
            <View style={styles.mapContainer}>
               <MapView
                  provider={PROVIDER_GOOGLE}
                  style={styles.map}
                  showsUserLocation={true}
                  showsBuildings={true}
                  region={region}
                  onRegionChange={reg => setRegion(reg)}
                  onRegionChangeComplete={reg => setRegion(reg)}
               >
                  <MapView.Marker coordinate={region} pinColor="#E91E63">
                     <Image
                        source={require('../../assets/Images/marker.png')}
                        style={{
                           width: 100,
                           height: 100,
                           borderRadius: 100,
                        }}
                     />
                  </MapView.Marker>
                  <Image
                     source={require('../../assets/Images/driver_car.png')}
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
                  ></Text>
                  <Image
                     source={require('../../assets/Images/driver_car.png')}
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
                  ></Text>
                  <Image
                     source={require('../../assets/Images/driver_car.png')}
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
                  ></Text>
               </MapView>
            </View>
            <View>
               <Modal isVisible={isModelVisible}>
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
                              {stars.map((element, index) =>
                                 index + 1 <= numStars ? (
                                    <AntDesign
                                       name="star"
                                       size={24}
                                       color="orange"
                                    />
                                 ) : (
                                    <AntDesign
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
         </Content>
         <Footer style={styles.footer}>
            {!isDestinationVisible ? (
               <View style={styles.destinationContainer}>
                  <View style={styles.destinationTextContainer}>
                     <Text style={styles.destnationText}>
                        Where are you going ?
                     </Text>
                  </View>
                  <Card style={styles.searchBoxView}>
                     <Entypo name="location" size={24} color="black" />
                     <TextInput
                        style={styles.searchBox}
                        placeholder=" Search destination"
                        underlineColorAndroid="#ffffff"
                        selectionColor="#42A5F5"
                        placeholderTextColor="#000000"
                        onFocus={() => props.navigation.navigate('RiderPickup')}
                     />
                  </Card>
               </View>
            ) : (
               <ScrollView contentContainerStyle={styles.tripContainer}>
                  <View style={styles.closeButtonContainer}>
                     <AntDesign
                        style={styles.closeButton}
                        onPress={() => {
                           setDestinationVisible(false);
                        }}
                        name="closecircleo"
                        size={24}
                        color="black"
                     />
                  </View>
                  {dataSource.map((item, index) => (
                     <TouchableHighlight
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
                              <Text style={styles.typeTitle}>XL</Text>
                              <Text style={styles.typeTime}>2mins</Text>
                           </View>
                           <View style={styles.priceRange}>
                              <Text style={styles.pricing}>UGX 5000-7000</Text>
                           </View>
                        </View>
                     </TouchableHighlight>
                  ))}
               </ScrollView>
            )}
         </Footer>
      </Container>
   );
};

AppRegistry.registerComponent('RiderHomeContents', () => RiderHomeContents);

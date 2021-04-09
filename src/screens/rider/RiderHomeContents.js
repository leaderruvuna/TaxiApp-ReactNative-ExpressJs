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
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import MapView, { PROVIDER_GOOGLE, AnimatedRegion } from 'react-native-maps';
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
   const [isModalVisible, setModalVisible] = useState(false);
   const [isConfirmButton, setConfirmButton] = useState(false);
   const [isMounted, setMounted] = useState(false);

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
         <Content>
            <View
               style={{
                  justifyContent: 'center',
               }}
            >
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
         </Content>
         <Footer style={styles.footer}>
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
                     placeholder="Search destination"
                     underlineColorAndroid="#ffffff"
                     selectionColor="#42A5F5"
                     placeholderTextColor="#000000"
                     onFocus={() => props.navigation.navigate('pickUpLocation')}
                  />
               </Card>
            </View>
         </Footer>
      </Container>
   );
};

AppRegistry.registerComponent('RiderHomeContents', () => RiderHomeContents);

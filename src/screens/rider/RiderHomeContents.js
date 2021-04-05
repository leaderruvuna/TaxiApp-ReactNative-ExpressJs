import React, { useState } from 'react';
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

import MapView, { PROVIDER_GOOGLE, AnimatedRegion } from 'react-native-maps';
import styles from './styles/homecontents';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default function RiderHomeContents(props) {
   const [firstName, setFristName] = useState('');
   const [lastName, setLastName] = useState('');
   const [driverId, setDriverId] = useState('');
   const [region, setRegion] = useState({
      latitude: LATITUDE,
      longitude: LONGITUDE,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
   });
   const [isModalVisible, setModalVisible] = useState(false);
   const [isConfirmButton, setConfirmButton] = useState(false);
   const [isMounted, setMounted] = useState(false);

   // constructor(props) {
   //    super(props);
   //    this.state = {
   //       region: {
   //          latitude: LATITUDE,
   //          longitude: LONGITUDE,
   //          latitudeDelta: LATITUDE_DELTA,
   //          longitudeDelta: LONGITUDE_DELTA,
   //       },
   //       isModalVisible: false,
   //       isConfirmButton: false,
   //       isMounted: false,
   //    };
   //    if (!firebase.apps.length) {
   //       firebase.initializeApp(ApiKeys.FirebaseConfig);
   //    }
   // }

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
   // //-----------COMPONENTDIDMOUNT------------------//
   // componentDidMount() {
   //    //this.isMounted = true;

   //    navigator.geolocation.getCurrentPosition(
   //       position => {
   //          this.setState({
   //             region: {
   //                latitude: position.coords.latitude,
   //                longitude: position.coords.longitude,
   //                latitudeDelta: LATITUDE_DELTA,
   //                longitudeDelta: LONGITUDE_DELTA,
   //             },
   //          });
   //       },
   //       error => console.log(error.message),
   //       {
   //          enableHighAccuracy: true,
   //          timeout: 20000,
   //          maximumAge: 1000,
   //       },
   //    );

   //    this.watchID = navigator.geolocation.watchPosition(
   //       position => {
   //          this.setState({
   //             region: {
   //                latitude: position.coords.latitude,
   //                longitude: position.coords.longitude,
   //                latitudeDelta: LATITUDE_DELTA,
   //                longitudeDelta: LONGITUDE_DELTA,
   //             },
   //          });
   //       },

   //       error =>
   //          this.setState({
   //             error: error.message,
   //          }),
   //       {
   //          enableHighAccuracy: true,
   //          timeout: 20000,
   //          maximumAge: 1000,
   //          distanceFilter: 10,
   //       },
   //    );

   //    YellowBox.ignoreWarnings(['Encountered an error loading page']);
   //    console.disableYellowBox = true;
   // }

   // componentDidUpdate(prevState) {

   //    if (this.state.region !== prevState.region) {

   //    }
   // }

   // componentWillUnmount() {

   //    navigator.geolocation.clearWatch(this.watchID);

   // }

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
                  onPress={() => this.props.navigation.toggleDrawer()}
               >
                  <Icon
                     name="menu"
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
                  Taxi App
               </Text>
            </Body>
         </Header>

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
                  >
                     John
                  </Text>
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
                  >
                     John
                  </Text>
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
                  >
                     John
                  </Text>
               </MapView>
            </View>
            <Card style={styles.searchBoxView}>
               <Image
                  style={styles.pickupImage}
                  source={require('../../assets/Images/pickup.png')}
               />
               <TextInput
                  style={styles.DropUpLocation}
                  placeholder="PickUp Location"
                  underlineColorAndroid="#ffffff"
                  selectionColor="#42A5F5"
                  placeholderTextColor="#000000"
                  onFocus={() => props.navigation.navigate('pickUpLocation')}
               />
            </Card>
         </Content>
         <Footer style={styles.footer}>
            {isConfirmButton ? (
               <TouchableOpacity
                  style={styles.DoneButton}
                  onPress={() => props.navigation.navigate('pickUpLocation')}
               >
                  <Text
                     style={{
                        color: '#ffffff',
                        fontWeight: 'bold',
                     }}
                  >
                     CONFIRM
                  </Text>
               </TouchableOpacity>
            ) : null}
            {!isModalVisible ? (
               <View
                  style={{
                     width: 300,
                     height: 70,
                     backgroundColor: '#ffffff',
                     position: 'absolute',
                     flexDirection: 'row',
                  }}
               >
                  <Image
                     source={require('../../assets/Images/avatar.png')}
                     style={{
                        width: 50,
                        height: 50,
                        borderRadius: 50,
                        marginTop: 10,
                        marginLeft: 7,
                     }}
                  />
                  <Text
                     style={{
                        fontSize: 18,
                        marginTop: 18,
                        fontWeight: 'bold',
                     }}
                  >
                     {RiderHomeContents.firstName +
                        ' ' +
                        RiderHomeContents.lastName}
                  </Text>
                  <Text
                     style={{
                        fontSize: 18,
                        marginTop: 18,
                        color: '#42A5F5',
                     }}
                  >
                     {' '}
                  </Text>
               </View>
            ) : null}
         </Footer>
      </Container>
   );
}

AppRegistry.registerComponent('RiderHomeContents', () => RiderHomeContents);

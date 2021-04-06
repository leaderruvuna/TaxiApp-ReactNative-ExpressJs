import React from 'react';
import {
   StyleSheet,
   Text,
   View,
   Button,
   Image,
   TouchableHighlight,
   TouchableOpacity,
   Dimensions,
   AppRegistry,
   TextInput,
   YellowBox,
   AppState,
   AsyncStorage,
   Alert,
} from 'react-native';
import {
   Content,
   Container,
   Header,
   Left,
   Right,
   Icon,
   Footer,
   Body,
   Card,
} from 'native-base';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import styles from './styles/homecontents';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
// const LATITUDE = 0;
// const LONGITUDE = 0;
// const LATITUDE_DELTA = 0.0922;
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default DriverHomeContents = () => {
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
                  Driving
               </Text>
            </Body>
            <Right />
         </Header>

         <Content>
            <View></View>
         </Content>
      </Container>
   );
};

AppRegistry.registerComponent('RiderHomeContents', () => RiderHomeContents);

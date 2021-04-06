import React, { useState } from 'react';
import {
   StyleSheet,
   Text,
   View,
   Button,
   YellowBox,
   AsyncStorage,
   TouchableOpacity,
   TouchableHighlight,
   TextInput,
   KeyboardAvoidingView,
   Image,
   Platform,
   ActivityIndicator,
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
} from 'native-base';
import Toast from 'react-native-simple-toast';
import styles from './styles/licence';

export default DriverLicence = props => {
   const [licenceNumber, setLicenceNumber] = useState('');
   const [vehicleType, setVehicleType] = useState('');
   const [dateIssued, setDateIssued] = useState('');
   const [dateExpiry, setDateExpiry] = useState('');
   const navigationOptions = {
      drawerIcon: ({ tintColor }) => (
         <Image
            source={require('../../assets/Images/licence.png')}
            style={{ width: 25, height: 25 }}
         />
      ),
   };
   return (
      <Container style={styles.wrapper}>
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
                  Driver Licence
               </Text>
            </Body>
         </Header>

         <Content>
            <View style={styles.container}>
               <Image
                  source={require('../../assets/Images/licence.png')}
                  style={{
                     width: 200,
                     height: 100,
                  }}
               />
               <TextInput
                  style={styles.textInputEmail}
                  placeholder="LICENCE NUMBER"
                  maxLength={40}
                  onChangeText={licence => setLicenceNumber(licence)}
                  underlineColorAndroid="#c0c0c0"
               />
               <View
                  style={{
                     flexDirection: 'row',
                  }}
               >
                  <TextInput
                     style={styles.textInputMobile}
                     placeholder="VALID VEHICLE TYPE"
                     maxLength={40}
                     onChangeText={vehicle => setVehicleType(vehicle)}
                     underlineColorAndroid="#c0c0c0"
                  />
               </View>
               <TextInput
                  style={styles.textInputEmail}
                  placeholder="ISSUED ON "
                  maxLength={40}
                  onChangeText={issued => setDateIssued(issued)}
                  underlineColorAndroid="#c0c0c0"
                  secureTextEntry={true}
               />
               <TextInput
                  style={styles.textInputEmail}
                  placeholder="EXPIRY DATE "
                  maxLength={40}
                  onChangeText={expiry => setDateExpiry(expiry)}
                  underlineColorAndroid="#c0c0c0"
                  secureTextEntry={true}
               />

               <TouchableOpacity
                  style={styles.NextButton}
                  onPress={() => alert('driver licence')}
               >
                  <Text
                     style={{
                        color: '#ffffff',
                        fontWeight: 'bold',
                     }}
                  >
                     SUBMIT
                  </Text>
               </TouchableOpacity>
            </View>
         </Content>
      </Container>
   );
};

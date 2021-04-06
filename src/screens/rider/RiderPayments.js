import React, { useState } from 'react';
import {
   Text,
   AsyncStorage,
   Image,
   TouchableHighlight,
   TouchableOpacity,
   Alert,
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
import CheckBox from 'react-native-check-box';
import Toast from 'react-native-simple-toast';
import styles from './styles/payments';

export default RiderPayments = props => {
   const [mobileMoney, setMobileMoney] = useState('');
   const [cash, setCash] = useState('');
   const [bitcoin, setBitcoin] = useState('');
   const [paypal, setPaypal] = useState('');

   const navigationOptions = {
      drawerIcon: ({ tintColor }) => (
         <Image
            source={require('../../assets/Images/payments.png')}
            style={{ width: 25, height: 25 }}
         />
      ),
   };

   return (
      <Container style={{ flex: 1 }}>
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
                  Payments
               </Text>
            </Body>
         </Header>
         <Content>
            <Card>
               <CardItem style={{ marginTop: 5 }}>
                  <Body
                     style={{
                        flexDirection: 'row',
                     }}
                  >
                     <Image
                        source={require('../../assets/Images/paypal.png')}
                        style={{
                           height: 50,
                           width: 50,
                        }}
                     />
                     <Text
                        style={{
                           color: 'gray',
                           fontSize: 20,
                           marginTop: 5,
                           marginLeft: 5,
                        }}
                     >
                        paypal
                     </Text>
                     <CheckBox
                        style={{
                           padding: 10,
                           position: 'absolute',
                           left: 280,
                           width: 50,
                           height: 50,
                        }}
                        isChecked={paypal}
                        onClick={() => setPaypal(paypal)}
                        checkBoxColor="#42A5F5"

                        //isChecked={data.checked}
                        //leftText={leftText}
                     />
                  </Body>
               </CardItem>
            </Card>
            <Card>
               <CardItem style={{ marginTop: 5 }}>
                  <Body
                     style={{
                        flexDirection: 'row',
                     }}
                  >
                     <Image
                        source={require('../../assets/Images/mobileMoney.png')}
                        style={{
                           height: 50,
                           width: 50,
                        }}
                     />
                     <Text
                        style={{
                           color: 'gray',
                           fontSize: 20,
                           marginTop: 5,
                           marginLeft: 5,
                        }}
                     >
                        MOBILE MONEY
                     </Text>
                     <CheckBox
                        style={{
                           padding: 10,
                           position: 'absolute',
                           left: 280,
                           width: 50,
                           height: 50,
                        }}
                        isChecked={mobileMoney}
                        onClick={() => setMobileMoney(mobileMoney)}
                        checkBoxColor="#42A5F5"

                        //isChecked={data.checked}
                        //leftText={leftText}
                     />
                  </Body>
               </CardItem>
            </Card>
            <Card>
               <CardItem style={{ marginTop: 5 }}>
                  <Body
                     style={{
                        flexDirection: 'row',
                     }}
                  >
                     <Image
                        source={require('../../assets/Images/cash.png')}
                        style={{
                           height: 50,
                           width: 50,
                        }}
                     />
                     <Text
                        style={{
                           color: 'gray',
                           fontSize: 20,
                           marginTop: 5,
                           marginLeft: 5,
                        }}
                     >
                        cash
                     </Text>
                     <CheckBox
                        style={{
                           padding: 10,
                           position: 'absolute',
                           left: 280,
                           width: 50,
                           height: 50,
                        }}
                        onClick={() => setCash(cash)}
                        isChecked={cash}
                        checkBoxColor="#42A5F5"
                        //leftText={leftText}
                     />
                  </Body>
               </CardItem>
            </Card>
            <Card>
               <CardItem style={{ marginTop: 5 }}>
                  <Body
                     style={{
                        flexDirection: 'row',
                     }}
                  >
                     <Image
                        source={require('../../assets/Images/bitcoin.png')}
                        style={{
                           height: 50,
                           width: 50,
                        }}
                     />
                     <Text
                        style={{
                           color: 'gray',
                           fontSize: 20,
                           marginTop: 5,
                           marginLeft: 5,
                        }}
                     >
                        bitcoin
                     </Text>
                     <CheckBox
                        style={{
                           padding: 10,
                           position: 'absolute',
                           left: 280,
                           width: 50,
                           height: 50,
                        }}
                        onClick={() => setBitcoin(bitcoin)}
                        isChecked={bitcoin}
                        checkBoxColor="#42A5F5"
                     />
                  </Body>
               </CardItem>
            </Card>
            <TouchableOpacity
               style={styles.DoneButton}
               onPress={this._addPayments}
            >
               <Text
                  style={{
                     color: '#ffffff',
                     fontWeight: 'bold',
                  }}
               >
                  DONE
               </Text>
            </TouchableOpacity>
         </Content>
      </Container>
   );
};

_addPayments = async () => {
   Alert.alert(
      'Payments Confirm',
      'If you accept,your payments status is going to be updated ',
      [
         {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
         },
         {
            text: 'OK',
            onPress: this._addPaymentsToRiderDatabase,
         },
      ],
      { cancelable: false },
   );
};

_addPaymentsToRiderDatabase = async () => {
   AsyncStorage.getItem('riderId')
      .then(riderID =>
         firebase
            .database()
            .ref(`Payments/${riderID}/PaymentsMode/`)
            .set({
               mobileMoney,
               cash,
               bitcoin,
            })
            .then(
               () => {
                  Toast.show('payments updated successfully', Toast.SHORT);
               },
               error => {
                  Toast.show(error.message, Toast.SHORT);
               },
            ),
      )
      .catch(e => console.log('err', e));
};

import React, { useState } from 'react';
import {
   Text,
   AsyncStorage,
   Image,
   TouchableHighlight,
   TouchableOpacity,
   View,
} from 'react-native';
import {
   Content,
   Container,
   Header,
   Left,
   Icon,
   Footer,
   Right,
   Body,
   Card,
   CardItem,
} from 'native-base';
import CheckBox from 'react-native-check-box';
import Toast from 'react-native-simple-toast';
import styles from './styles/payments';
import { Ionicons } from '@expo/vector-icons';

export default RiderPayments = props => {
   const [mobileMoney, setMobileMoney] = useState('');
   const [cash, setCash] = useState('');
   const [bitcoin, setBitcoin] = useState('');
   const [paypal, setPaypal] = useState('');

   return (
      <Container style={styles.cotainer}>
         <Header style={styles.header}>
            <Left>
               <TouchableHighlight
                  style={styles.backButton}
                  onPress={() => props.navigation.goBack()}
               >
                  <Ionicons name="arrow-back-outline" size={24} color="white" />
               </TouchableHighlight>
            </Left>
            <Body>
               <Text style={styles.headerText}>Payments</Text>
            </Body>
            <Right></Right>
         </Header>
         <Content>
            <Card>
               <CardItem style={styles.cardItem}>
                  <Body style={styles.body}>
                     <Image
                        source={require('../../assets/Images/paypal.png')}
                        style={styles.image}
                     />
                     <Text style={styles.paymentTypeText}>paypal</Text>
                     <CheckBox
                        style={styles.paymentChoice}
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
               <CardItem style={styles.cardItem}>
                  <Body style={styles.body}>
                     <Image
                        source={require('../../assets/Images/mobileMoney.png')}
                        style={styles.image}
                     />
                     <Text style={styles.paymentTypeText}>MOBILE MONEY</Text>
                     <CheckBox
                        style={styles.paymentChoice}
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
               <CardItem style={styles.cardItem}>
                  <Body style={styles.body}>
                     <Image
                        source={require('../../assets/Images/cash.png')}
                        style={styles.image}
                     />
                     <Text style={styles.paymentTypeText}>Cash</Text>
                     <CheckBox
                        style={styles.paymentChoice}
                        onClick={() => setCash(cash)}
                        isChecked={cash}
                        checkBoxColor="#42A5F5"
                        //leftText={leftText}
                     />
                  </Body>
               </CardItem>
            </Card>
            <Card>
               <CardItem style={styles.cardItem}>
                  <Body
                     style={{
                        flexDirection: 'row',
                     }}
                  >
                     <Image
                        source={require('../../assets/Images/bitcoin.png')}
                        style={styles.image}
                     />
                     <Text style={styles.paymentTypeText}>bitcoin</Text>
                     <CheckBox
                        style={styles.paymentChoice}
                        onClick={() => setBitcoin(bitcoin)}
                        isChecked={bitcoin}
                        checkBoxColor="#42A5F5"
                     />
                  </Body>
               </CardItem>
            </Card>
            <View style={styles.doneButtonContainer}>
               <TouchableOpacity style={styles.doneButton} onPress={() => {}}>
                  <Text style={styles.doneText}>DONE</Text>
               </TouchableOpacity>
            </View>
         </Content>
      </Container>
   );
};

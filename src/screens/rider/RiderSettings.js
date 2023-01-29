import React from 'react';
import {
   StyleSheet,
   Text,
   View,
   Image,
   TouchableHighlight,
} from 'react-native';
import {
   Content,
   Container,
   Header,
   Left,
   Icon,
   Body,
   Right,
} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles/settings';

export default RiderSettings = props => {
   return (
      <Container>
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
            <View
               style={{
                  justifyContent: 'center',
               }}
            />
         </Content>
      </Container>
   );
};

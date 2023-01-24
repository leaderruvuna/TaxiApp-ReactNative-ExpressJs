import React from 'react';
import { DrawerItems } from 'react-navigation-drawer';
import { Content, Container, Header, Body } from 'native-base';
import { Image, Text, View } from 'react-native';
import styles from '../styles/drawer';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

export default customDrawerContentComponent = props => (
   <Container>
      <Header style={styles.header}>
         <Body style={styles.body}>
            <View style={styles.headerContainer}>
               <View style={styles.imageContainer}>
                  <AntDesign name="user" size={30} color="black" />
               </View>
               <View>
                  <MaterialIcons
                     name="add-photo-alternate"
                     size={28}
                     color="black"
                  />
               </View>
            </View>
            <View style={styles.nameTextContainer}>
               <Text style={styles.textName}>Leader ruvuna</Text>
            </View>
         </Body>
      </Header>
      <Content>
         <DrawerItems {...props} />
      </Content>
   </Container>
);

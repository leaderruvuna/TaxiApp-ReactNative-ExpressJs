import React from 'react';
import { DrawerItems } from 'react-navigation-drawer';
import { Content, Container, Header, Body } from 'native-base';
import { Image, Text } from 'react-native';

export default customDrawerContentComponent = props => (
   <Container>
      <Header style={{ height: 200, backgroundColor: '#42A5F5' }}>
         <Body
            style={{
               alignItems: 'center',
               justifyContent: 'center',
            }}
         >
            <Image
               source={require('../../assets/Images/avatar.png')}
               style={{
                  width: 100,
                  height: 100,
                  borderRadius: 100,
               }}
            />
            <Text
               style={{
                  color: '#ffffff',
                  fontWeight: 'bold',
                  fontSize: 20,
               }}
            >
               Username
            </Text>
         </Body>
      </Header>
      <Content>
         <DrawerItems {...props} />
      </Content>
   </Container>
);

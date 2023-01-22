import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createAppContainer } from 'react-navigation';
// import { createDrawerNavigator } from 'react-navigation-drawer';
// import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import customDrawerContentComponent from '../components/DrawerComponent/riderDrawerContainer';
import RiderHistory from '../screens/rider/RiderHistory';
import RiderSettings from '../screens/rider/RiderSettings';
import RiderPayments from '../screens/rider/RiderPayments';
import RiderNotifications from '../screens/rider/RiderNotifications';
import RiderHelp from '../screens/rider/RiderHelp';
import RiderLogout from '../screens/rider/RiderLogout';
import RiderHomeContents from '../screens/rider/RiderHomeContents';
import RiderPickUp from '../screens/rider/RiderPickUp';
import DriverHomeContents from '../screens/driver/DriverHomeContents';
import DriverSettings from '../screens/driver/DriverSettings';
import DriverLicence from '../screens/driver/DriverLicence';
import DriverLogout from '../screens/driver/DriverLogout';
import { createStackNavigator } from '@react-navigation/stack';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const RiderHomeStackNav = () => {
   return (
      <Stack.Navigator>
         <Stack.Screen name="Main" component={RiderHomeContents} />
         <Stack.Screen name="pickUpLocation" component={RiderPickUp} />
      </Stack.Navigator>
   );
};

function RiderHomeDrawer() {
   return (
      <NavigationContainer>
         <Drawer.Navigator>
            <Drawer.Screen name="Home" component={RiderHomeStackNav} />
            <Drawer.Screen name="Payments" component={RiderPayments} />
            <Drawer.Screen name="Settings" component={RiderSettings} />
            <Drawer.Screen name="Logout" component={RiderLogout} />
         </Drawer.Navigator>
      </NavigationContainer>
   );
}

function DriverHomeDrawer() {
   return (
      <NavigationContainer>
         <Drawer.Navigator>
            <Drawer.Screen name="Home2" component={DriverHomeContents} />
            <Drawer.Screen name="Settings2" component={DriverSettings} />
            <Drawer.Screen name="Licence2" component={DriverLicence} />
            <Drawer.Screen name="Logout2" component={DriverLogout} />
         </Drawer.Navigator>
      </NavigationContainer>
   );
}

export { RiderHomeDrawer, DriverHomeDrawer };

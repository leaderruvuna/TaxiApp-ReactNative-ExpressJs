import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RiderSettings from '../screens/rider/RiderSettings';
import RiderPayments from '../screens/rider/RiderPayments';
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
         <Stack.Screen
            name="Main"
            component={props => <RiderHomeContents {...props} />}
            options={{ headerShown: false }}
         />
         <Stack.Screen
            name="pickUpLocation"
            component={RiderPickUp}
            options={{ headerShown: false }}
         />
      </Stack.Navigator>
   );
};

function RiderHomeDrawer() {
   return (
      <Drawer.Navigator>
         <Drawer.Screen
            name="Home"
            component={RiderHomeContents}
            options={{ headerShown: false }}
         />
         <Drawer.Screen
            name="Payments"
            component={RiderPayments}
            options={{ headerShown: false }}
         />
         <Drawer.Screen
            name="Settings"
            component={RiderSettings}
            options={{ headerShown: false }}
         />
         <Drawer.Screen
            name="Logout"
            component={RiderLogout}
            options={{ headerShown: false }}
         />
      </Drawer.Navigator>
   );
}

function DriverHomeDrawer() {
   return (
      <NavigationContainer>
         <Drawer.Navigator>
            <Drawer.Screen name="Home" component={DriverHomeContents} />
            <Drawer.Screen name="Settings" component={DriverSettings} />
            <Drawer.Screen name="Licence" component={DriverLicence} />
            <Drawer.Screen name="Logout" component={DriverLogout} />
         </Drawer.Navigator>
      </NavigationContainer>
   );
}

export { RiderHomeDrawer, DriverHomeDrawer };

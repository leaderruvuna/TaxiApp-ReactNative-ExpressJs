import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import customDrawerContentComponent from '../components/DrawerComponent/riderDrawerContainer';
import RiderHistory from '../screens/rider/RiderHistory';
import RiderSettings from '../screens/rider/RiderSettings';
import RiderPayments from '../screens/rider/RiderPayments';
import RiderNotifications from '../screens/rider/RiderNotifications';
import RiderHelp from '../screens/rider/RiderHelp';
import RiderLogout from '../screens/rider/RiderLogout';
import RiderHomeContents from '../screens/rider/RiderHomeContents';
import RiderPickUp from '../screens/rider/RiderPickUp';

const RiderHomeStackNav = createStackNavigator(
   {
      Main: { screen: RiderHomeContents },
      pickUpLocation: { screen: RiderPickUp },
   },
   {
      headerMode: 'none',
      navigationOptions: {
         headerVisible: false,
      },
   },
);

export default RiderHomeDrawer = createAppContainer(
   createDrawerNavigator(
      {
         Home: { screen: RiderHomeStackNav },
         Payments: { screen: RiderPayments },
         Settings: { screen: RiderSettings },
         History: { screen: RiderHistory },
         Notifications: { screen: RiderNotifications },
         Help: { screen: RiderHelp },
         Logout: { screen: RiderLogout },
      },
      {
         initialRouteName: 'Home',
         contentComponent: customDrawerContentComponent,
         drawerOpenRoute: 'DrawerOpen',
         drawerCloseRoute: 'DrawerClose',
         drawerToggleRoute: 'DrawerToggle',
      },
   ),
);

// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { useSelector } from 'react-redux';

// import { navigationRef } from './NavigationService';

// import Login from 'app/screens/Login';
// import Home from 'app/screens/Home';

// const Stack = createStackNavigator();

// const homeOptions = {
//   title: 'My home',
//   headerStyle: {
//     backgroundColor: '#f4511e',
//   },
//   headerTintColor: '#fff',
//   headerTitleStyle: {
//     fontWeight: 'bold',
//   },
// };

// function App() {
//   const isLoggedIn = useSelector(state => state.loginReducer.isLoggedIn);

//   return (
//     <NavigationContainer ref={navigationRef}>
//       <Stack.Navigator>
//         {isLoggedIn ? (
//           <Stack.Screen name="Home" component={Home} options={homeOptions} />
//         ) : (
//           <Stack.Screen
//             name="Login"
//             component={Login}
//             options={{
//               animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
//             }}
//           />
//         )}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

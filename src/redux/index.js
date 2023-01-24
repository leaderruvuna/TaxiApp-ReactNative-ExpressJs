/**
 * React Native App
 * Everthing starts from the entrypoint
 */
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import Navigator from '../navigation';
import configureStore from './store/configureStore';
const { persistor, store } = configureStore();

const theme = {
   ...DefaultTheme,
   roundness: 2,
   colors: {
      ...DefaultTheme.colors,
   },
};

export default function Entrypoint() {
   return (
      <Provider store={store}>
         <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
            <PaperProvider theme={theme}>
               <Navigator />
            </PaperProvider>
         </PersistGate>
      </Provider>
   );
}

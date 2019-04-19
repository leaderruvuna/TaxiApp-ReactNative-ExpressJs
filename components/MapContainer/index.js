import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MapView } from 'react-native-maps';
export const MapContainer = ({ region }) => {
  return (
    <View style={styles.container}>
      <MapView
        //provider={MapView.PROVIDER_GOOGLE}
        style={styles.map}
        region={region}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

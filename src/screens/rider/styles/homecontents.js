import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
   containerView: {
      flex: 1,
      backgroundColor: '#ffffff',
   },
   footer: {
      backgroundColor: '#ffffff',
      height: 80,
   },
   map: {
      height: 490,
      marginTop: 0,
   },
   searchBoxView: {
      flexDirection: 'row',
      backgroundColor: 'white',
      width: 320,
      minHeight: 50,
      position: 'absolute',
      top: 10,
      left: 20,
      borderRadius: 5,
      elevation: 5,
   },
   searchIcon: {
      color: '#42A5F5',
      marginTop: 12,
      marginLeft: 10,
   },
   DropUpLocation: {
      alignSelf: 'stretch',
      width: 280,
      paddingBottom: 2,
      marginTop: -3,
      marginLeft: 8,
      backgroundColor: '#fff',
      fontSize: 17,
   },
   pickupImage: {
      marginLeft: 8,
      marginTop: 10,
      width: 25,
      height: 25,
   },
   DoneButton: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#42A5F1',
      height: 50,
      width: 350,
      marginTop: 5,
      marginLeft: 3,
   },
});

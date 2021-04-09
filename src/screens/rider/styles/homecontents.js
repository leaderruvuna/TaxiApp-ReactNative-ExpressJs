import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
   containerView: {
      flex: 1,
      backgroundColor: '#ffffff',
   },
   footer: {
      backgroundColor: '#ffffff',
      height: 150,
      justifyContent: 'center',
      paddingVertical: 5,
      borderRadius: 10,
   },
   map: {
      height: 690,
      marginTop: 0,
   },
   searchBoxView: {
      flexDirection: 'row',
      backgroundColor: 'white',
      alignItems: 'center',
      paddingHorizontal: 10,
      width: 320,
      minHeight: 50,
      marginTop: 18,
      borderRadius: 10,
   },
   searchIcon: {
      color: '#42A5F5',
      marginTop: 12,
      marginLeft: 10,
   },
   searchBox: {
      alignSelf: 'stretch',
      width: 280,
      paddingLeft: 5,
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
   destinationContainer: {
      width: '100%',
      alignItems: 'center',
      paddingVertical: 5,
   },
   destinationTextContainer: {
      width: '100%',
      alignItems: 'flex-start',
      paddingHorizontal: 47,
   },
   destnationText: {
      fontSize: 18,
      fontWeight: 'bold',
   },
});

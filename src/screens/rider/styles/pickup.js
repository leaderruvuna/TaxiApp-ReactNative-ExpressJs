import { StyleSheet } from 'react-native';
export default styles = StyleSheet.create({
   containerView: {
      flex: 1,
      backgroundColor: '#F8F8F8',
   },
   map: {
      height: 600,
      marginTop: 0,
   },
   searchIcon: {
      marginTop: 8,
      marginLeft: 8,
   },
   bookButton: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#42A5F5',
      height: 50,
      width: '100%',
   },
   header: {
      backgroundColor: '#42A5F5',
      height: 50,
   },
   backButton: {
      width: 50,
      height: 50,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
   },
   headerText: {
      color: '#ffffff',
      fontSize: 20,
      fontWeight: 'bold',
   },
   currentLocation: {
      width: '100%',
      paddingHorizontal: 10,
   },
   destination: {
      width: '100%',
      paddingHorizontal: 10,
   },
   bookButtonText: {
      color: '#ffffff',
      fontWeight: 'bold',
      fontSize: 18,
   },
   bookButtonContainer: {
      width: '100%',
      paddingHorizontal: 10,
      marginTop: '50%',
   },
   placesContainer: {
      flexDirection: 'column',
      marginTop: 5,
   },
});

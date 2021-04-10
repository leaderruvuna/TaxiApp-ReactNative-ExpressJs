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
      width: '90%',
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
      paddingHorizontal: 20,
   },
   destnationText: {
      fontSize: 18,
      fontWeight: 'bold',
   },
   headerContainer: {
      backgroundColor: '#fff',
      height: 50,
   },
   headerTitle: {
      fontSize: 20,
      fontWeight: 'bold',
   },
   drawerButton: {
      width: 50,
      height: 50,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
   },
   tripContainer: {
      width: '100%',
      height: 'auto',
      alignItems: 'center',
      paddingHorizontal: 10,
   },
   carsContainer: {
      flexDirection: 'row',
      width: '100%',
      height: '20%',
   },
   vehicle: {
      width: '30%',
      justifyContent: 'center',
      alignItems: 'center',
   },
   type: {
      width: '30%',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
   },
   priceRange: {
      width: '40%',
      justifyContent: 'center',
      alignItems: 'center',
   },
   typeTitle: {
      fontSize: 17,
      fontWeight: 'bold',
   },
   typeTime: {
      color: 'grey',
   },
   pricing: {
      fontSize: 15,
      fontWeight: 'bold',
   },
   closeButton: {
      marginTop: 5,
      fontSize: 30,
   },
   closeButtonContainer: {
      borderStartColor: 'red',
      alignSelf: 'flex-end',
   },
});

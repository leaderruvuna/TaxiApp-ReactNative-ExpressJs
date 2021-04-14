import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   containerView: {
      flex: 1,
      backgroundColor: '#ffffff',
   },
   map: {
      height: 600,
      marginTop: 0,
   },
   doneButton: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#42A5F5',
      height: 50,
      width: '100%',
      marginTop: 160,
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
   doneButtonContainer: {
      width: '100%',
      paddingHorizontal: 10,
   },
   cardItem: {
      marginTop: 5,
   },
   body: {
      flexDirection: 'row',
   },
   image: {
      height: 50,
      width: 50,
   },
   paymentTypeText: {
      color: 'gray',
      fontSize: 20,
      marginTop: 5,
      marginLeft: 5,
   },
   paymentChoice: {
      padding: 10,
      position: 'absolute',
      left: 280,
      width: 50,
      height: 50,
   },
   doneText: {
      color: '#ffffff',
      fontWeight: 'bold',
   },
});

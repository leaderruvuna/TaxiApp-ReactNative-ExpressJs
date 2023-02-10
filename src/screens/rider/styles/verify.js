import { Dimensions, StyleSheet } from 'react-native';
const { width } = Dimensions.get('screen');
export default styles = StyleSheet.create({
   wrapper: {
      flex: 1,
   },
   container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
   },
   verifyContainer: {
      justifyContent: 'flex-end',
      alignItems: 'center',
      flexDirection: 'row',
      width: '100%',
      paddingHorizontal: 10,
      paddingVertical: 5,
   },
   verifyButton: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#42A5F5',
      flexDirection: 'row',
      width: '30%',
      height: 45,
      marginTop: 15,
   },
   nextText: {
      color: '#ffffff',
      fontWeight: 'bold',
   },
   headerContainer: {
      width: '100%',
      height: '10%',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingVertical: 5,
   },
   headerText: {
      fontSize: 17,
      color: 'grey',
   },
   otpInputs: {
      tintColor: '#42A5F5',
   },
   otpContainer: {
      // width:'80%',
   },
});

import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
   wrapper: {
      flex: 1,
      backgroundColor: '#fff',
   },
   container: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop: '20%',
   },
   textInputMobile: {
      alignSelf: 'stretch',
      width: '90%',
      paddingLeft: 10,
      paddingBottom: 15,
      marginTop: 10,
      marginLeft: 5,
      backgroundColor: '#fff',
   },
   countrCode: {
      width: '10%',
   },
   LoginButton: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#42A5F5',
      width: '30%',
      height: 45,
      marginTop: 15,
   },
   passwordForgotten: {
      backgroundColor: '#ffffff',
      marginTop: 10,
   },
   activityIndicator: {
      position: 'absolute',
      alignSelf: 'center',
   },
   loginText: {
      color: '#ffffff',
      fontWeight: 'bold',
   },
   loginContainer: {
      justifyContent: 'flex-end',
      alignItems: 'center',
      flexDirection: 'row',
      width: '100%',
      paddingHorizontal: 10,
      paddingVertical: 5,
   },
   mobileContainer: {
      width: '100%',
      flexDirection: 'row',
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginTop: '5%',
   },
   headerContainer: {
      width: '100%',
      height: '10%',
      flexDirection: 'column',
      paddingHorizontal: 10,
      paddingVertical: 5,
   },
   headerText: {
      fontSize: 17,
      color: 'grey',
   },
});

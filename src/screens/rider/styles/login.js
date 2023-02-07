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
      width: '80%',
      paddingLeft: 10,
      paddingVertical: 6,
      marginTop: 10,
      marginLeft: 5,
      backgroundColor: '#fff',
      borderWidth: 1,
   },
   countrCode: {
      width: '10%',
   },
   LoginButton: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#42A5F5',
      flexDirection: 'row',
      width: '30%',
      height: 45,
      // marginTop: 15,
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
      justifyContent: 'center',
      alignItems: 'center',
   },
   headerContainer: {
      width: '100%',
      flexDirection: 'column',
      paddingHorizontal: 10,
   },
   headerText: {
      fontSize: 18,
      color: 'grey',
   },
   countryContainer: {
      width: '20%',
      alignItems: 'center',
   },
   contryButton: {
      width: 60,
      height: 40,
      backgroundColor: 'grey',
      padding: 10,
      marginTop: 10,
   },
   countryCodeText:{
      color: 'white',
      fontSize: 14,
   },
   loginHeaderText:{
      fontSize:22
   }
});

import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
   wrapper: {
      flex: 1,
      backgroundColor: '#fff',
   },
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      marginTop: 10,
   },
   firstnameContainer: {
      width: '90%',
      height: 50,
      marginHorizontal: 5,
      marginTop: 5,
      borderWidth:0.5,
      justifyContent:'center'
   },
   lastnameContainer: {
      width: '90%',
      height: 50,
      marginHorizontal: 5,
      marginTop: 5,
      borderWidth:0.5,
      justifyContent:'center'
   },
   emailContainer: {
      width: '90%',
      height: 50,
      marginHorizontal: 5,
      marginTop: 5,
      borderWidth:0.5,
      justifyContent:'center'
   },
   registerContainer: {
      width: '100%',
      height: 200,
      paddingHorizontal: 15,
      marginTop: 5,
   },
   imageContainer: {
      width: 80,
      height: 80,
      backgroundColor: '#D3D3D3',
      borderRadius: 80,
      justifyContent: 'center',
      alignItems: 'center',
   },
   registerButton: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#42A5F5',
      width: '100%',
      height: '25%',
      marginTop: 15,
      flexDirection:'row'
   },
   skipButton: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFFFFF',
      borderColor:'#42A5F5',
      borderWidth:1,
      width: '100%',
      height: '25%',
      marginTop: 15,
   },
   nextText: {
      color: '#ffffff',
      fontWeight: 'bold',
   },
   skipText: {
      color: '#42A5F5',
      fontWeight: 'bold',
   },
   firstnameInput: {
      paddingHorizontal: 4,
      borderBottomColor: 'grey',
      borderBottomWidth: 0.2,
   },
   lastnameInput: {
      paddingHorizontal: 4,
      borderBottomColor: 'grey',
      borderBottomWidth: 0.2,
   },
   emailInput: {
      paddingHorizontal: 4,
      borderBottomColor: 'grey',
      borderBottomWidth: 0.2,
   },
   userImage: {
      width: 20,
      height: 20,
      borderRadius: 50,
   },
   headerContainer: {
      width: '100%',
      height: 90,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
   },
});

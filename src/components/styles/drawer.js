import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
   header: {
      height: 200,
      backgroundColor: '#fff',
   },
   headerContainer: {
      width: '100%',
      height: 90,
      flexDirection: 'row',
      //   justifyContent: 'center',
      alignItems: 'center',
   },
   body: {
      alignItems: 'center',
   },
   textName: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 20,
   },
   nameTextContainer: {
      width: '100%',
      marginTop: 5,
   },
   imageContainer: {
      width: '35%',
      height: '100%',
      backgroundColor: '#D3D3D3',
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
   },
});

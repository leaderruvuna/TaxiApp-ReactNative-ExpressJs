import { StyleSheet,Dimensions } from 'react-native';
const {width,height} = Dimensions.get('screen')
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
      width:width-10,
      minHeight: 50,
      marginTop: 2,
      paddingHorizontal:8,
      borderWidth:1,
   },
   searchIcon: {
      color: '#42A5F5',
      marginTop: 12,
      marginLeft: 10,
   },
   searchBox: {
      alignSelf: 'stretch',
      fontSize: 17,
      width:'100%'
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
      position:'absolute',
      width: 50,
      height: 50,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
   },
   tripContainer: {
      width,
      alignItems: 'center',
      justifyContent:'center',
   },
   carsContainer: {
      flexDirection: 'row',
      width: '100%',
      height: '22%',
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
   modelContainer: {
      backgroundColor: '#fff',
      width: '100%',
      height: '50%',
      paddingVertical: 8,
   },
   modelHeader: {
      width: '100%',
      height: 300,
      backgroundColor: '#fff',
      alignSelf: 'flex-end',
   },
   modelFooter: {
      width: '100%',
      height: 100,
      backgroundColor: '#fff',
      alignSelf: 'flex-end',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
   },
   acceptButton: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#42A5F5',
      width: '30%',
      height: 45,
      marginTop: 15,
      marginHorizontal: 8,
      borderRadius: 8,
   },
   cancelButton: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#42A5F5',
      width: '30%',
      height: 45,
      marginTop: 15,
      marginHorizontal: 8,
      borderRadius: 8,
   },
   acceptText: {
      color: '#ffffff',
      fontWeight: 'bold',
   },
   cancelText: {
      color: '#ffffff',
      fontWeight: 'bold',
   },
   image: {
      width: '22%',
      height: '100%',
      backgroundColor: '#D3D3D3',
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
   },
   imageContainer: {
      width: '100%',
      height: 80,
      justifyContent: 'center',
      alignItems: 'center',
   },
   driverName: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
   },
   driverDetailsContainer: {
      width: '100%',
      height: 80,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
   },
   raiting: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
   },
   raitingContainer: {
      width: '100%',
      height: 80,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
   },
   nameText: {
      fontSize: 19,
      fontWeight: 'bold',
   },
   mapContainer: {
      justifyContent: 'center',
   },
   bookButton:{
      backgroundColor: '#000',
      height: '50%',
      alignItems: 'center',
      justifyContent: 'center',
   },
   bookButtonContainer:{
      width,
      height: height / 8,
      paddingHorizontal: 7,
      position:'absolute',
      top:height-160
   },
   bookText:{ color: 'white' },
   bottomSheetContainer:{ 
      flex: 1, 
      alignItems: 'center'
   },
   bottomSheetHeader:{
      width,
      paddingHorizontal: 7,
      marginVertical: 3,
   },
   carsList:{ 
      marginTop: 50,
      position:'relative',
      width
    }
});
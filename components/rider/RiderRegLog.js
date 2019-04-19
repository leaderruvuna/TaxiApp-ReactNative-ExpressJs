import React from 'react';
import { StyleSheet, Text, View,Button ,TouchableOpacity,Image} from 'react-native';

export default class RiderRegLog extends React.Component{
  static navigationOptions={
         headerStyle: {
             backgroundColor: '#42A5F5',
         },
         headerTitleStyle: {
             color: '#fff',
         },
         headerBackTitleStyle: {
             color: '#fff',
         },
         headerTintColor: '#fff',
         title:'Rider Login And Register'


 }

  render() {
    return (
      <View style={styles.container}>
        {/*<Text>RiderRegLog</Text>
          <Button title="riderLogin" onPress={this._navigateRiderLogin}/>
          <Button title="riderRegister" onPress={this._navigateRiderRegister}/>
        */}
        <View style={styles.rideLogoContent}>
          <Image  source={require('../Images/taxi.png')} style={styles.logo} />
            <Text style={{color:'#ffffff',fontSize:30}}>Riding</Text>
          </View>
          <View style={styles.rideButtonContent}>
                <Text style={{marginTop:2,color:'#DCDCDC',fontSize:30,fontWeight:'bold'}}>Taxi App</Text>
                <View style={{flexDirection:'row',marginTop:10}}>
                <Text style={{color:'gray',fontSize:18,fontWeight:'bold'}}>Login or Sign Up I know you want to</Text>

                </View>
                <Text style={{color:'gray',fontSize:14}}>It will take less than a minute</Text>

                <View style={styles.ButtonContent}>

                <TouchableOpacity
                  style={styles.RiderLogin}
                  onPress={this._navigateRiderLogin}
                  >
                  <Text style={{color:'#42A5F5',fontWeight:'bold'}}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.RiderRegister}
                  onPress={this._navigateRiderRegister}
                  >
                  <Text style={{color:'#ffffff',fontWeight:'bold'}}>Register</Text>
                </TouchableOpacity>

                </View>

          </View>


      </View>
    );
  }
  _navigateRiderLogin = async () => {
  this.props.navigation.navigate('RiderLog');
  };
  _navigateRiderRegister = async () => {
  this.props.navigation.navigate('RiderReg');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent:'center',
    alignItems:'center'
  },
  rideButtonContent:{
    //backgroundColor:"#ffffff",
    backgroundColor:"#ffffff",
    height:250,
    width:320,
    marginTop:-180,
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center'

  },
  rideLogoContent:{
    backgroundColor:"#42A5F5",
    height:570,
    width:400,
    borderBottomLeftRadius:120,
    borderBottomRightRadius:120,
    justifyContent:'center',
    alignItems:'center'
  },
  ButtonContent:{
    flex:1,
    flexDirection:'row',
    backgroundColor:"#ffffff",
    height:10,
    width:320,
    marginTop:50,

  },
    RiderRegister:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#42A5F5',
    height:50,
    width:155,
    marginLeft:13
  },
    RiderLogin:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#ffffff',
    height:50,
    width:155,
    borderColor:'#dcdcdc',
    borderWidth:0.4
 },
 logo:{
   height:70,
   width:70,
   borderRadius:90,
   marginTop:-100
 },
});

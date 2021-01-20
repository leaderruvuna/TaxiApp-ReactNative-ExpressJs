import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  AsyncStorage,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
import PhoneInput from 'react-native-phone-input';
export default class RiderVerifyNumber extends React.Component {
  static navigationOptions = {
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
    title: 'Verify Mobile',
  };
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      firstname: '',
      lastname: '',
      email: '',
      mobile: '',
    };
  }
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.wrapper}>
        <View style={styles.container}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'gray', fontSize: 18, fontWeight: 'bold' }}>
              We are unable to autoverify your mobile number
            </Text>
            <Text style={{ color: 'gray', fontSize: 15, fontWeight: 'bold' }}>
              Please enter the code tested to your number
            </Text>
          </View>

          <TextInput
            style={styles.VerifyNumber}
            placeholder="ENTER OTP"
            onChangeText={password => this.setState({ password })}
            underlineColorAndroid="#c0c0c0"
          />
          <TouchableOpacity
            style={styles.SubmitButton}
            onPress={this._signInAsync}
          >
            <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
  _signInAsync = async () => {
    //await AsyncStorage.setItem('userToken', 'rider');
    //this.props.navigation.navigate('App1');
    alert(this.props.navigation.state.params.phonenumber);
  };
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textInputln: {
    alignSelf: 'stretch',
    width: 170,
    paddingLeft: 34,
    marginLeft: 5,
    backgroundColor: '#fff',
  },
  VerifyNumber: {
    alignSelf: 'stretch',
    width: 350,
    paddingLeft: 40,
    paddingBottom: 15,
    marginTop: 10,
    marginLeft: 5,
    backgroundColor: '#fff',
  },
  SubmitButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#42A5F5',
    height: 50,
    width: 350,
    marginTop: 15,
  },
});

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
export default class RiderForgotPassword extends React.Component {
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
    title: 'Forgot Password',
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
              Do not worry just ener your email ID below
            </Text>
            <Text style={{ color: 'gray', fontSize: 15, fontWeight: 'bold' }}>
              And we will send you the password reset instructions
            </Text>
          </View>

          <TextInput
            style={styles.ForgotPassword}
            placeholder="EMAIL OF PASSWORD"
            onChangeText={password => this.setState({ password })}
            underlineColorAndroid="#c0c0c0"
          />
          <TouchableOpacity
            style={styles.ResetPassword}
            onPress={this._resetPassWord}
          >
            <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>
              RESET PASSWORD
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
  _resetPassWords = async () => {
    //await AsyncStorage.setItem('userToken', 'rider');
    //this.props.navigation.navigate('App1');
    alert('reset password');
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
  ForgotPassword: {
    alignSelf: 'stretch',
    width: 350,
    paddingLeft: 40,
    paddingBottom: 15,
    marginTop: 10,
    marginLeft: 5,
    backgroundColor: '#fff',
  },
  ResetPassword: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#42A5F5',
    height: 50,
    width: 350,
    marginTop: 15,
  },
});

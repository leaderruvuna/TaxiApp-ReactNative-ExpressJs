import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  YellowBox,
  AsyncStorage,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
  KeyboardAvoidingView,
  Image,
  Platform,
  ActivityIndicator,
} from 'react-native';
import {
  Content,
  Container,
  Header,
  Left,
  Icon,
  Footer,
  Body,
  Card,
  CardItem,
} from 'native-base';
import Toast from 'react-native-simple-toast';
import * as firebase from 'firebase';
import ApiKeys from '../constants/ApiKeys';
export default class DriverLicence extends React.Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../Images/licence.png')}
        style={{ width: 25, height: 25 }}
      />
    ),
  };
  constructor(props) {
    super(props);
    this.state = {
      licence_number: '',
      vehicle_type: '',
      date_issued: '',
      date_expiry: '',
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(ApiKeys.FirebaseConfig);
    }
  }
  render() {
    return (
      <Container style={styles.wrapper}>
        <Header style={{ backgroundColor: '#42A5F5', height: 75 }}>
          <Left>
            <TouchableHighlight
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 20,
              }}
              onPress={() => this.props.navigation.navigate('Home')}
            >
              <Icon name="arrow-back" style={{ color: '#ffffff' }} />
            </TouchableHighlight>
          </Left>
          <Body>
            <Text
              style={{
                color: '#ffffff',
                fontSize: 20,
                fontWeight: 'bold',
                marginTop: 20,
              }}
            >
              Driver Licence
            </Text>
          </Body>
        </Header>

        <Content>
          <View style={styles.container}>
            <Image
              source={require('../Images/licence.png')}
              style={{ width: 200, height: 100 }}
            />
            <TextInput
              style={styles.textInputEmail}
              placeholder="LICENCE NUMBER"
              maxLength={40}
              onChangeText={licence_number => this.setState({ licence_number })}
              underlineColorAndroid="#c0c0c0"
            />
            <View style={{ flexDirection: 'row' }}>
              <TextInput
                style={styles.textInputMobile}
                placeholder="VALID VEHICLE TYPE"
                maxLength={40}
                onChangeText={vehicle_type => this.setState({ vehicle_type })}
                underlineColorAndroid="#c0c0c0"
              />
            </View>
            <TextInput
              style={styles.textInputEmail}
              placeholder="ISSUED ON "
              maxLength={40}
              onChangeText={date_issued => this.setState({ date_issued })}
              underlineColorAndroid="#c0c0c0"
              secureTextEntry={true}
            />
            <TextInput
              style={styles.textInputEmail}
              placeholder="EXPIRY DATE "
              maxLength={40}
              onChangeText={date_expiry => this.setState({ date_expiry })}
              underlineColorAndroid="#c0c0c0"
              secureTextEntry={true}
            />

            <TouchableOpacity
              style={styles.NextButton}
              onPress={() => alert('driver licence')}
            >
              <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>
                SUBMIT
              </Text>
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    );
  }

  _addDriverLicence = async () => {
    DriverID = firebase.auth().currentUser.uid;
    if (DriverID) {
      firebase
        .database()
        .ref(`Drivers/${DriverID}/DriverLicence/`)
        .set({
          licence_number: this.slicence_number,
          vehicle_type: this.state.vehicle_type,
          date_issued: this.state.date_issued,
          date_expiry: this.state.date_expiry,
        })
        .then(
          () => {
            Toast.show('licence updated successfully', Toast.SHORT);
          },
          error => {
            Toast.show(error.message, Toast.SHORT);
          },
        );
    }
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
  textInputEmail: {
    alignSelf: 'stretch',
    width: 350,
    paddingLeft: 40,
    paddingBottom: 25,
    marginLeft: 5,
    backgroundColor: '#fff',
  },
  textInputMobile: {
    alignSelf: 'stretch',
    width: 350,
    paddingLeft: 40,
    paddingBottom: 25,
    marginLeft: 5,
    backgroundColor: '#fff',
  },
  NextButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#42A5F5',
    height: 50,
    width: 350,
    marginTop: 15,
  },
});

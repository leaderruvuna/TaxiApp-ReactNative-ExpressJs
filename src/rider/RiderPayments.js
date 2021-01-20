import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  AsyncStorage,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
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
import CheckBox from 'react-native-check-box';
import Toast from 'react-native-simple-toast';
import * as firebase from 'firebase';
import ApiKeys from '../constants/ApiKeys';
export default class RiderPayments extends React.Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../Images/payments.png')}
        style={{ width: 25, height: 25 }}
      />
    ),
  };
  constructor(props) {
    super(props);
    this.state = {
      MobileMoney: false,
      Cash: true,
      Bitcoin: false,
      Paypal: false,
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(ApiKeys.FirebaseConfig);
    }
  }
  render() {
    return (
      <Container style={{ flex: 1 }}>
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
              Payments
            </Text>
          </Body>
        </Header>

        <Content>
          {/*
      <Card>
       <CardItem>
         <Body style={{flexDirection:'row'}}>
           <Image source={require('../Images/paypal.png')} style={{height:50,width:50}}/>
           <Text style={{color:'gray',fontSize:20,marginTop:5,marginLeft:5}}>PAYPAL</Text>
         </Body>
       </CardItem>

     </Card>
     <Card>
      <CardItem >
        <Body style={{flexDirection:'row'}}>
          <Image source={require('../Images/credit.png')} style={{height:50,width:50}}/>
          <Text style={{color:'gray',fontSize:20,marginTop:5,marginLeft:5}}>CREDIT CARD</Text>
        </Body>
      </CardItem>
    </Card>
    */}
          <Card>
            <CardItem style={{ marginTop: 5 }}>
              <Body style={{ flexDirection: 'row' }}>
                <Image
                  source={require('../Images/paypal.png')}
                  style={{ height: 50, width: 50 }}
                />
                <Text
                  style={{
                    color: 'gray',
                    fontSize: 20,
                    marginTop: 5,
                    marginLeft: 5,
                  }}
                >
                  Paypal
                </Text>
                <CheckBox
                  style={{
                    padding: 10,
                    position: 'absolute',
                    left: 280,
                    width: 50,
                    height: 50,
                  }}
                  isChecked={this.state.Paypal}
                  onClick={() => this.setState({ Paypal: this.state.Paypal })}
                  checkBoxColor="#42A5F5"

                  //isChecked={data.checked}
                  //leftText={leftText}
                />
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem style={{ marginTop: 5 }}>
              <Body style={{ flexDirection: 'row' }}>
                <Image
                  source={require('../Images/mobileMoney.png')}
                  style={{ height: 50, width: 50 }}
                />
                <Text
                  style={{
                    color: 'gray',
                    fontSize: 20,
                    marginTop: 5,
                    marginLeft: 5,
                  }}
                >
                  MOBILE MONEY
                </Text>
                <CheckBox
                  style={{
                    padding: 10,
                    position: 'absolute',
                    left: 280,
                    width: 50,
                    height: 50,
                  }}
                  isChecked={this.state.MobileMoney}
                  onClick={() =>
                    this.setState({ MobileMoney: !this.state.MobileMoney })
                  }
                  checkBoxColor="#42A5F5"

                  //isChecked={data.checked}
                  //leftText={leftText}
                />
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem style={{ marginTop: 5 }}>
              <Body style={{ flexDirection: 'row' }}>
                <Image
                  source={require('../Images/cash.png')}
                  style={{ height: 50, width: 50 }}
                />
                <Text
                  style={{
                    color: 'gray',
                    fontSize: 20,
                    marginTop: 5,
                    marginLeft: 5,
                  }}
                >
                  CASH
                </Text>
                <CheckBox
                  style={{
                    padding: 10,
                    position: 'absolute',
                    left: 280,
                    width: 50,
                    height: 50,
                  }}
                  onClick={() => this.setState({ Cash: this.state.Cash })}
                  isChecked={this.state.Cash}
                  checkBoxColor="#42A5F5"
                  //leftText={leftText}
                />
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem style={{ marginTop: 5 }}>
              <Body style={{ flexDirection: 'row' }}>
                <Image
                  source={require('../Images/bitcoin.png')}
                  style={{ height: 50, width: 50 }}
                />
                <Text
                  style={{
                    color: 'gray',
                    fontSize: 20,
                    marginTop: 5,
                    marginLeft: 5,
                  }}
                >
                  BITCOIN
                </Text>
                <CheckBox
                  style={{
                    padding: 10,
                    position: 'absolute',
                    left: 280,
                    width: 50,
                    height: 50,
                  }}
                  onClick={() =>
                    this.setState({ Bitcoin: !this.state.Bitcoin })
                  }
                  isChecked={this.state.Bitcoin}
                  checkBoxColor="#42A5F5"
                  //leftText={leftText}
                />
              </Body>
            </CardItem>
          </Card>
          <TouchableOpacity
            style={styles.DoneButton}
            onPress={this._addPayments}
          >
            <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>DONE</Text>
          </TouchableOpacity>
        </Content>
      </Container>
    );
  }

  //----------------------------
  //AddPayments
  //----------------------------

  _addPayments = async () => {
    //alert("Mobile Money:"+this.state.MobileMoney+"  Cash"+this.state.Cash);
    Alert.alert(
      'Payments Confirm',
      'If you accept,your payments status is going to be updated ',
      [
        //{text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: this._addPaymentsToRiderDatabase },
      ],
      { cancelable: false },
    );
  };

  //addPayments to the database
  _addPaymentsToRiderDatabase = async () => {
    AsyncStorage.getItem('riderId')
      .then(riderID =>
        firebase
          .database()
          .ref(`Payments/${riderID}/PaymentsMode/`)
          .set({
            MobileMoney: this.state.MobileMoney,
            Cash: this.state.Cash,
            Bitcoin: this.state.Bitcoin,
          })
          .then(
            () => {
              //firebase.database().ref(`Payments/${RiderID}/PaymentsHistory`);
              Toast.show('payments updated successfully', Toast.SHORT);
            },
            error => {
              Toast.show(error.message, Toast.SHORT);
            },
          ),
      )
      .catch(e => console.log('err', e));
  };
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  map: {
    height: 600,
    marginTop: 0,
  },
  DoneButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#42A5F5',
    height: 50,
    width: 350,
    marginTop: 160,
    marginLeft: 5,
  },
});

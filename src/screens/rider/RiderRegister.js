import React, { useState } from 'react';
import {
   StyleSheet,
   Text,
   View,
   Button,
   YellowBox,
   AsyncStorage,
   TouchableOpacity,
   TextInput,
   KeyboardAvoidingView,
   Image,
   Platform,
   ActivityIndicator,
} from 'react-native';
import Toast from 'react-native-simple-toast';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import styles from './styles/register';

export default RiderRegister = props => {
   const [firstname, setFirstname] = useState('');
   const [lastname, setLastname] = useState('');
   const [email, setEmail] = useState('');

   return (
      <View style={styles.wrapper}>
         <View style={styles.container}>
            <View style={styles.headerContainer}>
               <View style={styles.imageContainer}>
                  <AntDesign name="user" size={30} color="black" />
               </View>
               <View>
                  <MaterialIcons
                     name="add-photo-alternate"
                     size={28}
                     color="black"
                  />
               </View>
            </View>
            <View style={styles.firstnameContainer}>
               <TextInput
                  style={styles.firstnameInput}
                  placeholder="Firstname"
               />
            </View>
            <View style={styles.lastnameContainer}>
               <TextInput
                  style={styles.lastnameInput}
                  placeholder="Latstname"
               />
            </View>
            <View style={styles.emailContainer}>
               <TextInput style={styles.emailInput} placeholder="Email" />
            </View>
            <View style={styles.registerContainer}>
               <TouchableOpacity
                  style={styles.registerButton}
                  onPress={() => {
                     goNext(props);
                  }}
               >
                  <Text style={styles.nextText}>NEXT</Text>
               </TouchableOpacity>
            </View>
         </View>
      </View>
   );
};

const goNext = props => {
   props.navigation.navigate('Main');
};
const ToastStyle = {
   backgroundColor: '#4ADDFB',
   width: 300,
   height: Platform.OS === 'ios' ? 50 : 100,
   color: '#ffffff',
   fontSize: 15,
   lineHeight: 2,
   lines: 4,
   borderRadius: 15,
   fontWeight: 'bold',
   yOffset: 40,
};

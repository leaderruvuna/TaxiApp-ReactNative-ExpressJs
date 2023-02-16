import React, { useState, useEffect } from 'react';
import {
   Text,
   View,
   TouchableOpacity,
   TextInput,
   ActivityIndicator,
   Image,
} from 'react-native';
import Toast from 'react-native-simple-toast';
import { useRoute } from '@react-navigation/native';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { httpCloudFactory, httpFactory } from '../../factory/httpFactory';
import styles from './styles/register';
import * as ImagePicker from 'expo-image-picker';

export default RiderRegister = ({ navigation }) => {
   const [firstname, setFirstname] = useState('');
   const [lastname, setLastname] = useState('');
   const [email, setEmail] = useState('');
   const [isRequired, setRequired] = useState(0);
   const [isLoading, setLoading] = useState(0);
   const [image, setImage] = useState(null);
   const [imageData, setImageData] = useState(null);
   const router = useRoute();
   const { userId } = router.params;
   useEffect(() => {
      (async () => {
         if (Platform.OS !== 'web') {
            const {
               status,
            } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
               alert(
                  'Sorry, we need camera roll permissions to make this work!',
               );
            }
         }
      })();
   }, []);
   const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
         mediaTypes: ImagePicker.MediaTypeOptions.All,
         allowsEditing: true,
         aspect: [4, 3],
         quality: 1,
         base64: true,
      });
      let base64Img = `data:image/jpg;base64,${result.base64}`;
      let data = {
         file: base64Img,
         upload_preset: 'taxi_app_images_preset',
      };
      if (!result.cancelled) {
         setImageData(data);
         setImage(result.uri);
      }
   };
   const goNext = async () => {
      if (!firstname || !lastname || !email) {
         setRequired(1);
         Toast.show('All fields are required!');
         return;
      }
      setLoading(1);
      try {
         const imageUrl = await httpCloudFactory
            .post('image/upload', imageData)
            .then(res => res.data.url)
            .catch(err => err.message);
         const { data } = await httpFactory.put(`auth/rider/profile/update`, {
            user_id: userId,
            firstname,
            lastname,
            email,
            date: `${Date.now()}`,
            image:`${imageUrl}`
         });
         if (data?.status === 200) {
            setRequired(0);
            setLoading(0);
            navigation.navigate('Main');
         } else {
            setRequired(0);
            setLoading(0);
            Toast.show('Network error!');
         }
      } catch (err) {
         setRequired(0);
         setLoading(0);
         Toast.show('Netwok Error!');
      }
   };
   return (
      <View style={styles.wrapper}>
         <View style={styles.container}>
            <View style={styles.headerContainer}>
               <TouchableOpacity
                  style={styles.imageContainer}
                  onPress={pickImage}
               >
                  {image ? (
                     <Image
                        source={{ uri: image }}
                        style={{
                           width: '100%',
                           height: '100%',
                           borderRadius: 80,
                        }}
                     />
                  ) : (
                     <AntDesign name="user" size={30} color="black" />
                  )}
               </TouchableOpacity>
               <TouchableOpacity onPress={pickImage}>
                  <MaterialIcons
                     name="add-photo-alternate"
                     size={28}
                     color="black"
                  />
               </TouchableOpacity>
            </View>
            <View
               style={{
                  ...styles.firstnameContainer,
                  borderColor: isRequired && !firstname ? '#C72C41' : '#42A5F5',
               }}
            >
               <TextInput
                  onChangeText={fName => {
                     setFirstname(fName);
                  }}
                  style={styles.firstnameInput}
                  placeholder="Firstname"
               />
            </View>
            <View
               style={{
                  ...styles.lastnameContainer,
                  borderColor: isRequired && !lastname ? '#C72C41' : '#42A5F5',
               }}
            >
               <TextInput
                  onChangeText={lName => {
                     setLastname(lName);
                  }}
                  style={styles.lastnameInput}
                  placeholder="Latstname"
               />
            </View>
            <View
               style={{
                  ...styles.emailContainer,
                  borderColor: isRequired && !email ? '#C72C41' : '#42A5F5',
               }}
            >
               <TextInput
                  onChangeText={mail => {
                     setEmail(mail);
                  }}
                  style={styles.emailInput}
                  placeholder="Email"
               />
            </View>
            <View style={styles.registerContainer}>
               <TouchableOpacity
                  disabled={isLoading}
                  style={styles.registerButton}
                  onPress={() => {
                     goNext();
                  }}
               >
                  <Text style={styles.nextText}>NEXT</Text>
                  {isLoading ? <ActivityIndicator color={'white'} /> : <View />}
               </TouchableOpacity>
               <TouchableOpacity
                  style={styles.skipButton}
                  onPress={() => {
                     navigation.navigate('Main');
                  }}
               >
                  <Text style={styles.skipText}>SKIP</Text>
               </TouchableOpacity>
            </View>
         </View>
      </View>
   );
};

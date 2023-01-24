import firebase from 'firebase';
import firebaseConfig from '../config/firebaseConfig';
import { getVerificationCode } from '../../utils/index';
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore(firebaseApp);
const riderSignIn = async rider => {
   const verificationCode = getVerificationCode();
   const { phonenumber } = rider;
   firebase
      .auth()
      .signInWithPhoneNumber(phonenumber)
      .then(confirmationResult => {
         return confirmationResult.confirm(verificationCode);
      })
      .catch(error => {
         console.log(error);
      });
};
const saveRiderDoc = rider => {
   const { phonenumber, firstname, lastname, email, riderId } = rider;
   firestore.collection('riders').add({
      rider_id: `${riderId}`,
      email: `${email}`,
      phonenumber: `${phonenumber}`,
      firstname: `${firstname}`,
      lastname: `${lastname}`,
   });
};
export { riderSignIn, saveRiderDoc };

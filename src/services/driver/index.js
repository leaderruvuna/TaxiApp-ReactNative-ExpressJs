import firebase from 'firebase';
import firebaseConfig from '../config/firebaseConfig';
import { getVerificationCode } from '../../utils/index';
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore(firebaseApp);
const driverSignIn = async driver => {
   const verificationCode = getVerificationCode();
   const { phonenumber } = driver;
   firebaseApp
      .auth()
      .signInWithPhoneNumber(phonenumber)
      .then(confirmationResult => {
         return confirmationResult.confirm(verificationCode);
      })
      .catch(error => {
         console.log(error);
      });
};
const saveDriverDoc = driver => {
   const { phonenumber, firstname, lastname, email, driverId } = driver;
   firestore.collection('drivers').add({
      driver_id: `${driverId}`,
      email: `${email}`,
      phonenumber: `${phonenumber}`,
      firstname: `${firstname}`,
      lastname: `${lastname}`,
   });
};
export { driverSignIn, saveDriverDoc };

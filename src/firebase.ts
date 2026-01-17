// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, RecaptchaVerifier, createUserWithEmailAndPassword, PhoneAuthProvider, linkWithCredential, OAuthProvider, signInWithCredential} from 'firebase/auth';
import { getFirestore, collection, getDoc, doc, setDoc} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export async function getUsers() {
//   const db = getFirestore(app);
//   const userCol = collection(db, 'userinfo');
//   const snapShot = await getDocs(userCol);
//   snapShot.forEach((doc) => {
//     console.log(`${doc.id}, ${doc.data()}`);
//   })
// }

export async function checkDuplicate(username:string) {
  const db = getFirestore(app);
  const userRef = doc(db, 'userinfo', username);
  const snapShot = await getDoc(userRef);
  if(snapShot.exists()) return true;
  else return false;
}

export interface IUser {
  username: string,
  id: string,
  password: string,
  confirmPassword: string,
  email: string,
  phone: string,
}

export async function insertUser(data:IUser) {
  const db = getFirestore(app);
  await setDoc(doc(db, 'userinfo', data.username), {
    ...data
  });
  console.log(`${data.username} is inserted.`);
}

export async function requestPhone(phone:string):Promise<any> {
  console.log('requestPhone start');
  const auth = getAuth(app);
  console.log("auth:", auth);
  console.log("container:", document.getElementById("recaptcha-container"));
  var appVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {});
  window.recaptchaVerifier = appVerifier;
  var provider = new PhoneAuthProvider(auth);
  return provider.verifyPhoneNumber(phone, appVerifier)
    .then((value) => {
      console.log('verification id: ', value);
      return value;
    })
    .catch((error) => {
      console.log('phone verification error: ', error);
      return null;
    })
}

export async function certifyPhone(verificationId:string, verificationCode:string) {
  console.log('certifyPhone start');
  console.log('vid: ', verificationId);
  var phoneCredential;
  try {
    phoneCredential = PhoneAuthProvider.credential(verificationId, verificationCode)
  } catch(error) {
    alert(`올바른 코드를 입력해주세요.`);
  }
  return phoneCredential;
}

export async function createUser(email:string, password:string, credential:any):Promise<any> {
  console.log('createUser start.');
  const auth = getAuth(app);
  console.log('credential: ', credential);
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('user: ', user);
      if(!user) {
        alert('올바른 이메일과 비밀번호를 입력해주세요.');
        return null;
      }
      else {
        console.log(credential);
        return linkWithCredential(user, credential)
          .then((linkResult) => {
            console.log(linkResult);
            // const linkCredential = OAuthProvider.credentialFromResult(linkResult);
            // console.log(linkCredential);
            // if(!linkCredential) {
            //   alert('유저정보 병합 오류');
            //   return null;
            // }
            // else return signInWithCredential(auth, linkCredential);
          })
          // .then((signInResult) => {
          //   console.log(signInResult);
          //   return signInResult;
          // })
          .catch((error) => {
            console.log('signIn error: ', error);
            alert(error);
            return null;
          })
      }
    })
    .catch((error) => {
      console.log('error: ', error.code, ' / ', error.message);
      return null;
    })
}
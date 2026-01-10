// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDoc, doc, setDoc } from "firebase/firestore";
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
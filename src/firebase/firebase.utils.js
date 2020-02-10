import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'; 

const config = {
    apiKey: "AIzaSyAFXTbByG_8DxBdCOfcN82Jo-VtQ20Pg2g",
    authDomain: "firstreact-e88ae.firebaseapp.com",
    databaseURL: "https://firstreact-e88ae.firebaseio.com",
    projectId: "firstreact-e88ae",
    storageBucket: "firstreact-e88ae.appspot.com",
    messagingSenderId: "663022941592",
    appId: "1:663022941592:web:03a0338244d39f77e427ed",
    measurementId: "G-D2JGZN7Q9X"
};

export const createUserProfileDocument = async (userAuth, additionalData )=>{
    if(!userAuth)return;
     
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const collectionRef = firestore.collection('users');


    const snapshot = await userRef.get();
    const collectionSnapShot = collectionRef.get();

    console.log({collection: (await collectionSnapShot).docs.map(doc=>doc.data()) });

    if(!snapshot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log("error creating user", error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


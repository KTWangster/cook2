import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAX_vCOcB0Hgvspc-puG__3aW3xm6gCzd0",
    authDomain: "chefapp-92b3c.firebaseapp.com",
    databaseURL: "https://chefapp-92b3c.firebaseio.com",
    projectId: "chefapp-92b3c",
    storageBucket: "chefapp-92b3c.appspot.com",
    messagingSenderId: "938311576581"
};
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const providerFB = new firebase.auth.FacebookAuthProvider();
export const auth = firebase.auth();
export default firebase;
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import app from "./firebaseconfig";


// === authentiction methoods ===

const auth = getAuth(app);

let signUpUser = (obj) => {
    return createUserWithEmailAndPassword(auth, obj.email, obj.password)

};
let logInUser = (obj) => {
    return  signInWithEmailAndPassword(auth, obj.email, obj.password)
};
// let logOutUser = () => {
//     signOut(auth).then(() => {
//         // Sign-out successful.
//     }).catch((error) => {
//         // An error happened.
//     });

// };
// let checkAuthUser = () => {
//     onAuthStateChanged(auth, (user) => {
//         if (user) {
//             // User is signed in, see docs for a list of available properties
//             // https://firebase.google.com/docs/reference/js/firebase.User
//             const uid = user.uid;
//             // ...
//         } else {
//             // User is signed out
//             // ...
//         }
//     });
// };


//== database methoods ==




export default {signUpUser, logInUser};
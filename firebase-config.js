import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';

// Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyAM-ob_pjFScXWk7UojJ-Wph5g0O7bjiIs",
    authDomain: "everyday-e4be4.firebaseapp.com",
    databaseURL: "https://everyday-e4be4-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "everyday-e4be4",
    storageBucket: "everyday-e4be4.firebasestorage.app",
    messagingSenderId: "108146260282",
    appId: "1:108146260282:web:ae81dfde5ec75fea967803",
    measurementId: "G-7081N2YTD7"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Sign in function
document.getElementById('signInBtn').addEventListener('click', () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result.user);
        })
        .catch((error) => {
            console.error(error);
        });
});

// Sign out function
document.getElementById('signOutBtn').addEventListener('click', () => {
    signOut(auth).then(() => {
        console.log('User signed out');
    }).catch((error) => {
        console.error(error);
    });
});

// Listen to authentication state changes
onAuthStateChanged(auth, (user) => {
    if (user) {
        window.location.href = "./account/creationaccount.html";

    } else {
        document.getElementById('whenSignedIn').hidden = true;
        document.getElementById('whenSignedOut').hidden = false;
    }
})


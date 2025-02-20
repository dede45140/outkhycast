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

const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

const submit = document.getElementById('submit');
submit.addEventListener("click",function(){
  event.preventDefault()
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("creer comptr fait")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;0
    alert("erorr reesssaye")
    // ..
  });
})

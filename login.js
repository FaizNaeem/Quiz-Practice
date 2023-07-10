
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";

import { getAuth,  signInWithEmailAndPassword ,GoogleAuthProvider ,signInWithPopup,signInWithRedirect} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyCarN6h6FPkS3raGOKAScjMJcdp_r0kHWU",
  authDomain: "smitproject-39703.firebaseapp.com",
  projectId: "smitproject-39703",
  storageBucket: "smitproject-39703.appspot.com",
  messagingSenderId: "849520424684",
  appId: "1:849520424684:web:2a1feca7190271ea5557c9",
  measurementId: "G-LKLK8SZ6EX"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const google = new GoogleAuthProvider(app);
const analytics = getAnalytics(app);
// console.log(google);
document.getElementById("btn_1").addEventListener("click", () => {
    let email = document.getElementById("text_1").value
    let pass = document.getElementById("pass_1").value
signInWithEmailAndPassword(auth, email, pass)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);

    if(user.emailVerified== true){
          
      Swal.fire(
        'CONGRULATION',
        'Login SUCCES',
        'success'
        )
        setTimeout(()=>{
            window.location.href="./quiz.html"
          }, 2000)
  }
  else if(user.emailVerified== false){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please Verify Email',
    })
  }
    // Swal.fire(
    //     'CONGRULATION',
    //     'LOGIN SUCCES',
    //     'success'
    //   )
    // window.location.href="./quiz.html"
    // console.log(user);

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'WRONG PASSWORD',
      })
    console.log(errorCode,errorMessage);
  });
});
// google sign IN
document.getElementById("btn_google").addEventListener("click",()=>{
  google.setCustomParameters({
    'login_hint': 'user@example.com'
});
signInWithRedirect(auth, google)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        window.location.href = "./quiz.html"
        // ...
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorMessage);
        // ...
    });

})

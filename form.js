
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  let firebaseConfig = {
    apiKey: "AIzaSyCBlHhSb7lll8i3wOszLrLUPzTGlj1sGcU",
    authDomain: "login-system-2c479.firebaseapp.com",
    projectId: "login-system-2c479",
    storageBucket: "login-system-2c479.appspot.com",
    messagingSenderId: "666744673628",
    appId: "1:666744673628:web:370ab06d5848ac35875d99",
    measurementId: "G-0T1L7FMSLZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();

  //signup function
  function signUp(){
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
  }

  //signIN function
  function  signIn(){
    let email = document.getElementById("email");
    let password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    // alert("SignIn Successfully from System");
    console.log("Hi" + " " + email.value);
  }


  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      let email = user.email;
      alert("Active user "+email);

    }else{
      alert("No Active user Found")
    }
  })
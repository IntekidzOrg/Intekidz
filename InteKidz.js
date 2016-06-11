//Variablen
var datenbank = [
    ["Peter", "Jon", "Claudia"],
    ["1234", "JonJon", "qwertz"]
]; //namen, passwörter
var text = [
    ["Falsches Passwort oder Benutzername",
        "Ausgeloggt"
    ],
    ["Wrong username or password",
        "Logged out"
    ],
    ["اسم المستخدم أو كلمة المرور غير صحيحة",
        "تسجيل الدخول"
    ]
];
var lang = 0; //0 = Deutsch; 1 = Englisch; 2 = Arabisch
var username = document.getElementById("username"); //eingegebener Name
var password = document.getElementById("password"); //eingegebenes PW
var userId = "null"; //eingeloggter Benutzer
//Funktionen
// Initialize Firebase
var config = {
    apiKey: "AIzaSyDLP-5MsGjTMjYQ7WOdhm9BmgK9xHSfXfc",
    authDomain: "intekidz.firebaseapp.com",
    databaseURL: "https://intekidz.firebaseio.com",
    storageBucket: "",
};
firebase.initializeApp(config);

function changeLang(pLang) { //Sprache wechseln
    "use strict";
    lang = pLang;
}
var i;

function intekidzlogin() {

    firebase.auth().signInWithEmailAndPassword(username.value, password.value)
    .then(
      function (result) {
        document.location.href = "index.html";
      },
      function(error){
        alert("error");
        console.log(error.message);
      });
}

function intekidzregister() {

    firebase.auth().createUserWithEmailAndPassword(username.value, password.value)
    .then(
      function (result) {
    	  var ref = new Firebase("https://intekidz.firebaseio.com");
    	  ref.createUser({
    	    email: username.value,
    	    password: password.value
    	  }, function(error, userData) {
    	    if (error) {
    	      switch (error.code) {
    	        case "EMAIL_TAKEN":
    	          console.log("The new user account cannot be created because the email is already in use.");
    	          break;
    	        case "INVALID_EMAIL":
    	          console.log("The specified email is not a valid email.");
    	          break;
    	        default:
    	          console.log("Error creating user:", error);
    	      }
    	    } else {
    	      console.log("Successfully created user account with uid:", userData.uid);
    	    }
    	  });
        document.location.href = "login.html";
      },
      function(error){
        alert("error");
        console.log(error.message);
      });
}


function intekidzlogout() {
    document.location.href = "login.html";
}


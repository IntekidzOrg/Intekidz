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

   /* for (i = 0; i < datenbank[0].length; i++) { //gehe gesp. Namen durch
        if (datenbank[0][i] == username) { //einge. Name ist in Dateb
            if (datenbank[1][i] == password) { //to do: enkrypte
                userId = datenbank[0][i];
                break;
            } else {

                break;
            }
        } else {
            document.location.href = "index.html";
            break;
        }
    } */
}

function intekidzlogout() {
    if (userId != "null") {
        userId = "null";
        alert(text[lang][1])
    }
}

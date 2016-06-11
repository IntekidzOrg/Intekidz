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
	var usernameReg = document.getElementById("usrRegister");
	var passwordReg = document.getElementById("pswRegister");
    firebase.auth().createUserWithEmailAndPassword(usernameReg.value, passwordReg.value)
    .then(
      function (result) {
    	alert("success");
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



function Event(name, ort, zeit, veranstalter, beschreibung) {
    if (nameEvent !== null && ort !== null && zeit !== null && veranstalter !== null && beschreibung !== null) {
        this.name = name;
        this.ort = ort;
        this.zeit = zeit;
        this.veranstalter = veranstalter;
        this.beschreibung = beschreibung;
        alert("Event wurde erstellt");
    }
    else {
        alert("Ungueltige Eingabe");
    }
}

function newEvent() {
    
    var event = {
        name:  document.getElementById("name").value,
        ort:  document.getElementById("ort").value,
        zeit:  document.getElementById("zeit").value,
        veranstalter: document.getElementById("veranstalter").value,
        beschreibung : document.getElementById("beschreibung").value
    };
    console.log(event);

    var newEventy = firebase.database().ref().child('events').push().key;

    firebase.database().ref('events/' + newEventy).set(event);
  
}


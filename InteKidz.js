//Variablen
var datenbank = [
    ["Peter", "Jon", "Claudia"],
    ["1234", "JonJon", "qwertz"]
]; //namen, passwörter
var text = [
    ["Falsches Passwort oder Benutzername",
        "Ausgeloggt",
        "Anmelden",
        "Benutzername",
        "Passwort",
        "Registrieren",
        "Weitere Optionen",
        "Sprache ändern",
        "Event erstellen",
        "Profil",
        "Abmelden",
        "Erstellen",
        "Name des Events",
        "Ort",
        "Zeit",
        "Veranstalter",
        "Beschreibung",
        "E-Mail"],
    ["Wrong username or password",
        "Logged out",
        "Log in",
        "Username",
        "Password",
        "register",
        "More options",
        "Change Language",
        "Add event",
        "Profile",
        "Log out",
        "Add",
        "Name of the Event",
        "Location",
        "Time",
        "organizer",
        "Description",
        "E-Mail"],
    ["اسم المستخدم أو كلمة المرور غير صحيحة",
        "تسجيل الدخول",
        "تسجيل",
        "اسم المستخدم",
        "كلمة المرور",
        "تسجيل",
        "المزيد من الخيارات",
        "تغيير اللغة",
        "إنشاء الحدث",
        "البيانات الشخصية",
        "تسجيل الخروج",
        "وضع",
        "اسم الحدث",
        "مكان",
        "وقت",
        "منظم",
        "وصف",
        "البريد الالكتروني"]];
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
    lang = pLang;
    /*document.getElementById("login").value = text[lang][2];
    document.getElementById("usr").innerText = text[lang][3];
    document.getElementById("pwd").innerText = text[lang][4];
    document.getElementById("registrieren").value = text[lang][5];
    document.getElementById("register").value = text[lang][5];
    document.getElementById("option").getElementsByTagName(text[lang][6]);
    */document.getElementById("changeLang").innerHTML = text[lang][7];
    document.getElementById("addEvent").innerHTML = text[lang][8];
    document.getElementById("profile").innerHTML = text[lang][9];
    document.getElementById("logout").innerHTML = text[lang][10];
    /*document.getElementById("success").value = text[lang][11];
    document.getElementById("event").innerText = text[lang][12];
    document.getElementById("ort").innerText = text[lang][13];
    document.getElementById("time").innerText = text[lang][14];
    document.getElementById("veranstalter").innerText = text[lang][15];
    document.getElementById("description").innerText = text[lang][16];
    document.getElementById("mail").innerText = text[lang][17];
    document.getElementById("passwort").innerText = text[lang][4];
    */
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


function listEvents() {
  /*  firebase.database().ref('events').on('value', function (snapshot) {
        console.log("test");
        updateEvents(postElement, snapshot.val());
    }); */
    firebase.database().ref('events').once('value').then( function (snapshot) {
        console.log("test");
        updateEvents(snapshot.val());
    });
}

function updateEvents(value) {
    console.log(value);
    Object.keys(value).forEach(function (key) {
        console.log(value[key]);
        var tr = document.createElement("tr");
        var tdName = document.createElement("td");
        tdName.appendChild(document.createTextNode(value[key].name));
        var tdOrt = document.createElement("td");
        tdOrt.appendChild(document.createTextNode(value[key].ort));
        var tdZeit = document.createElement("td");
        tdZeit.appendChild(document.createTextNode(value[key].zeit));
        tr.appendChild(tdName);
        tr.appendChild(tdOrt);
        tr.appendChild(tdZeit);
        document.getElementById("eventTable").appendChild(tr);
    })
}





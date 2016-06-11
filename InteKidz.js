//Variablen
var datenbank = [["a", "b"], ["c", "d"]]; //namen, passwörter
var text = [["Falsches Passwort oder Benutzername",
             "Benutzername wurde nicht gefunden",
             "Ausgeloggt"], 
            ["Wrong username or password",
             "Username not found",
             "Logged out"],
            ["اسم المستخدم أو كلمة المرور غير صحيحة",
             "اسم المستخدم لم يتم العثور",
             "تسجيل الدخول"]];
var lang = 0; //0 = Deutsch; 1 = Englisch; 2 = Arabisch
var username = document.getElementById("username"); //eingegebener Name
var password = document.getElementById("password"); //eingegebenes PW
var userId = null; //eingeloggter Benutzer
//Funktionen
function changeLang(pLang) {//Sprache wechseln
    "use strict";
    lang = pLang; }
var i;
function intekidzlogin()
{
	for(i = 0; i < datenbank[0].length; i++ ) //gehe gesp. Namen durch
	{
		if(datenbank[0][i] == username) //einge. Name ist in Dateb
			{
				if(datenbank[1][i] == password) //to do: enkrypten
					{
						userId = datenbank[0][i];
						break;
					} else
						{
							alert(text[lang][0]);
							break;
						}
			}
		}
	if(userId === null)
		{
			alert(text[lang][1]);
		}
	}
function intekidzlogout()
{
	if(userId !== null)
		{
			userId = null;
			alert(text[lang][2])
		}
}
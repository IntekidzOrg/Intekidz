function Event(name, location, time, veranstalter, description)
{
	if(name !== null && location !== null && time !== null && veranstalter !== null && description !== null)
		{
			this.name = name;
			this.location = location;
			this.time = time;
			this.veranstalter = veranstalter;
			this.description = description;
			alert("Event wurde erstellt");
		}
	else
		{
			alert("Ungueltige Eingabe");
		}
}

function newEvent()
{
	var Event = new Event(document.getElementById("name").innerHTML,
						  document.getElementById("location").innerHTML,
						  document.getElementById("time").innerHTML,
						  document.getElementById("veranstalter").innerHTML,
						  document.getElementById("description").innerHTML);
}
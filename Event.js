function Event(name, location, time, veranstalter, description)
{
	if(name !== null && location !== null && time !== null && veranstalter !== null && description !== null)
		{
			this.name = name;
			this.location = location;
			this.time = time;
			this.veranstalter = veranstalter;
			this.description = description;
			
		}
	
}

function newEvent()
{
    var event = new Event(document.getElementById("name").innerHTML,
						  document.getElementById("location").innerHTML,
						  document.getElementById("time").innerHTML,
						  document.getElementById("veranstalter").innerHTML,
						  document.getElementById("description").innerHTML);

	var newEventey = firebase.database().ref().child('events').push().key;

	firebase.database().ref('events/' + newEventy).set(event);

}

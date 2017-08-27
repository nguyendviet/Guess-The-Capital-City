var names = [
"Abu Dhabi","Abuja","Accra","Addis Ababa","Aden","Algiers","Amman","Amsterdam","Andorra la Vella","Ankara","Antananarivo","Apia","Ashgabat","Asmara","Astana","Asuncion","Athens",
"Baghdad","Baku","Bamako","Bandar Seri Begawan","Bangkok","Bangui","Banjul","Basseterre","Beijing","Beirut","Belgrade","Belmopan","Berlin","Bern","Bishkek","Bissau","Bogota","Brasilia","Bratislava","Brazzaville","Bridgetown","Brussels","Bucharest","Budapest","Buenos Aires","Bujumbura",
"Cairo","Canberra","Cape Town","Caracas","Castries","Chisinau","Conakry","Copenhagen",
"Dakar","Damascus","Dhaka","Dili","Djibouti","Dodoma","Doha","Dublin","Dushanbe",
"Freetown","Funafuti",
"Gaborone","Georgetown","Grozny","Guatemala City",
"Hanoi","Harare","Havana","Helsinki",
"Islamabad",
"Jakarta","Jerusalem","Juba",
"Kabul","Kampala","Kathmandu","Khartoum","Kiev","Kigali","Kingston","Kingstown","Kinshasa","Kuala Lumpur","Kuwait City",
"La Paz","Libreville","Lilongwe","Lima","Lisbon","Ljubljana","Lome","London","Luanda","Lusaka","Luxembourg",
"Madrid","Malabo","Male","Managua","Manama","Manila","Maputo","Maseru","Mbabane","Mexico City","Minsk","Mogadishu","Monaco","Monrovia","Montevideo","Moroni","Moscow","Muscat","Nairobi","Nassau","Naypyidaw","N Djamena","New Delhi","Niamey","Nicosia","Nouakchott","Nukualofa",
"Oslo","Ottawa","Ouagadougou",
"Panama City","Paramaribo","Paris","Phnom Penh","Podgorica","Port Louis","Port Moresby","Port Vila","Port au Prince","Port of Spain","Porto Novo","Prague","Praia","Pyongyang",
"Quito",
"Rabat","Ramallah","Reykjavik","Riga","Riyadh","Rome","Roseau",
"San Jose","San Marino","San Salvador","Santiago","Santo Domingo","Sao Tome","Sarajevo","Seoul","Singapore","Skopje","Sofia","Sri Jayawardenepura Kotte","St Georges","St Johns","Stockholm","Suva",
"Tallinn","Tarawa","Tashkent","Tbilisi","Tegucigalpa","Tehran","Thimphu","Tirana","Tokyo","Tripoli","Tunis",
"Ulaanbaatar",
"Vaduz","Valletta","Vatican City","Victoria","Vienna","Vientiane","Vilnius",
"Warsaw","Washington DC","Wellington","Windhoek",
"Yamoussoukro","Yaounde","Yaren","Yerevan",
"Zagreb"];

var nameChosen = names[Math.floor(Math.random() * names.length)];
var nameSplit = nameChosen.split("");
var updated = [];
var attempt = Math.floor(nameChosen.length * 2 / 3) + Math.floor((Math.random() * 5) + 1);
var keyStore = [];
var nameStore = [];
var nameReform, underscoreRemain;

//replace letter with underscore and space with dash
function display(char) {
	//set to default when no char given
	char = char || "_";	
	var nameDisplayed = [];
	
	for (var i = 0; i < nameSplit.length; i++) {
		if (updated[i] || (char.toLowerCase() === nameSplit[i].toLowerCase())) {
			nameDisplayed += nameSplit[i] + " ";
			updated[i] = true;
		}
		else if (nameSplit[i] == " ") {
			nameDisplayed += "- ";
		} 
		else {
			nameDisplayed += "_ ";
			underscoreRemain = true;
		}
	}
	
	document.getElementById("nameDisplay").innerHTML = nameDisplayed;
	
	//capture nameDisplayed, convert it
	nameStore = nameDisplayed;
	nameReform = nameStore.replace(/\s/g, "").split("").join("");
}

//check if key is used
function checkKey(charStr) {	
	if (keyStore.includes(charStr)) {
		return false;
	}
	else {
		//record pressed key
		keyStore.push(charStr); 
		
		if (nameChosen.toLowerCase().includes(charStr)) {
			display(charStr);
		}
		else {
			attempt--;
			
			//print out wrong-guess key
			document.getElementById("wrongGuess").innerHTML = document.getElementById("wrongGuess").innerHTML + charStr + " ";
		}
	}
}

function noticeDecor() {
	document.getElementById("notice").style.fontWeight = "bold";
	document.getElementById("notice").style.color = "white";
}

function gameWon() {
	document.getElementById("container").style.backgroundColor = "#00ff00";
	document.getElementById("notice").innerHTML = "CONGRATULATIONS! YOU'VE GOT IT!";
	noticeDecor();
	showCountry();
	playAnthem();
}

function gameLost() {
	document.getElementById("container").style.backgroundColor = "red";
	document.getElementById("notice").innerHTML = "SORRY, YOU'VE LOST THE GAME!" + "<p>It's " + nameChosen + "</p>";
	noticeDecor();
	showCountry();
}

function showCountry() {
	switch (nameChosen) {
		case "Abuja":
			document.getElementById("ng").style.display = "block";
		break;
		case "Accra":
			document.getElementById("gh").style.display = "block";
		break;
		case "Basseterre":
			document.getElementById("kn").style.display = "block";
		break;
		case "Belmopan":
			document.getElementById("bz").style.display = "block";
		break;
		case "Bridgetown":
			document.getElementById("bb").style.display = "block";
		break;
		case "Canberra":
			document.getElementById("au").style.display = "block";
		break;
		case "Freetown":
			document.getElementById("sl").style.display = "block";
		break;
		case "Georgetown":
			document.getElementById("gy").style.display = "block";
		break;
		case "Hanoi":
			document.getElementById("vn").style.display = "block";
		break;
		case "Kingston":
			document.getElementById("jm").style.display = "block";
		break;
		case "Kingstown":
			document.getElementById("vc").style.display = "block";
		break;
		case "London":
			document.getElementById("uk").style.display = "block";
		break;
		case "Nairobi":
			document.getElementById("ke").style.display = "block";
		break;
		case "Nassau":
			document.getElementById("bs").style.display = "block";
		break;
		case "Ottawa":
			document.getElementById("ca").style.display = "block";
		break;
		case "Port of Spain":
			document.getElementById("tt").style.display = "block";
		break;
		case "Roseau":
			document.getElementById("dm").style.display = "block";
		break;
		case "Singapore":
			document.getElementById("sg").style.display = "block";
		break;
		case "St Georges":
			document.getElementById("gd").style.display = "block";
		break;
		case "St Johns":
			document.getElementById("ag").style.display = "block";
		break;
		case "Washington DC":
			document.getElementById("us").style.display = "block";
		break;
		case "Wellington":
			document.getElementById("nz").style.display = "block";
		break;
	}
}

function playAnthem() {
	switch(nameChosen) {
		case "Canberra":
			document.getElementById("anthemAu").play();
		break;
		case "Hanoi":
			document.getElementById("anthemVn").play();
		break;
		case "London":
			document.getElementById("anthemUk").play();
		break;
		case "Ottawa":
			document.getElementById("anthemCa").play();
		break;
		case "Washington DC":
			document.getElementById("anthemUs").play();
		break;
	}
}

document.getElementById("attempt").innerHTML = attempt;

//get key pressed by user
document.addEventListener("keypress", function handler(evt) {
	
	evt = evt || window.event;
	var charCode = evt.keyCode || evt.which;
	var charStr = String.fromCharCode(charCode);
  
	checkKey(charStr);
	
	//check loss
	if (attempt == 0) {
		gameLost();
		this.removeEventListener(event.type, handler);
	}
	
	//check win
	underscoreRemain = nameReform.includes("_");
	if (!underscoreRemain) {
		gameWon();
		this.removeEventListener(event.type, handler);
	}
	
	document.getElementById("attempt").innerHTML = attempt;
});

//call onload
display();

//new game
document.getElementById("newGame").onclick = function() {
	location.reload();
}
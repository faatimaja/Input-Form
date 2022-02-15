var name = document.getElementById('name').value;
var surname = document.getElementById('surname').value;
var age = document.getElementById('age').value;
var email = document.getElementById('email').value;
var gender = document.querySelector('input[name="gender"]:checked').value;
var continent = document.getElementById('continent').value;
var chocoladeyesno = document.querySelector('.chocolade:checked').value; //nece da radi

function getData(){

   document.getElementById('your-data').innerHTML = '<b> Information you sent about yourself: </b>';
   document.querySelector('.name').innerHTML = '<b> Name: </b>' + name;
   document.querySelector('.surname').innerHTML = '<b> Surname: </b>' + surname;
   document.querySelector('.age').innerHTML = '<b> Date od Birth: </b>' + age;
   document.querySelector('.email').innerHTML = '<b> Email Adress: </b>' + email;
   document.querySelector('.gender').innerHTML = '<b> Gender: </b>' + gender;
   document.querySelector('.continent').innerHTML = '<b> Continent: </b>' + continent;
   document.querySelector('.chocolade').innerHTML = '<b> Do you like chocolade: </b>' + chocoladeyesno;
}

function validateData(){
    
}


function capitalizeString(a){

	var firstLetter = a[0].toUpperCase();
	var restOfLetters = a.substring(1, a.length).toLowerCase();
	var newString = firstLetter + restOfLetters;

	return newString;
}

var body = document.getElementById('body');
body.addEventListener('mousemove', runEvent);
function runEvent(e){
   console.log("Blabla");
document.body.style.backgroundColor ="rgb(" + e.offsetX + "," + e.offsetY + ", 40)";
}
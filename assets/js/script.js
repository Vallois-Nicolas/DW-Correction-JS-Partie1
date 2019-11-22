// Partie 1

// Exercice 1

var firstVar = 'Bonjour le monde !';

alert(firstVar);

// Exercice 2

var lastName = 'Doe', firstName = 'John', city = 'New-York';

alert('Nom : ' + lastName + '\n' + 'Prénom : ' + firstName + '\n' + 'Ville : ' + city);

// Exercice 3

var yourName = prompt('Quel est votre prénom ?');

alert('Bonjour ' + yourName);

// Exercice 4

function dataPick() {
    var anOtherFirstName = document.getElementById('firstName').value;
    var anOtherLastName = document.getElementById('lastName').value;
    var anOtherCity = document.getElementById('city').value;

    alert('Nom : ' + anOtherLastName + '\n' + 'Prénom : ' + anOtherFirstName + '\n' + 'Ville : ' + anOtherCity);
}

// Exercice 5

function divideThem(){
    var firstNumber = document.getElementById('firstNumber').value;
    var secondNumber = document.getElementById('secondNumber').value;
    var result = firstNumber % secondNumber;

    alert(result);
}

// Exercice 6

function magicFunction(){
    var pointureEnAnglais = document.getElementById('pointureEnAnglais').value;
    var birthYear = document.getElementById('birthYear').value;

    var magicResult = ((pointureEnAnglais * 2 + 5) * 50) - birthYear + 1769;

    alert(magicResult);
}

// Exercice 7

window.onload = function(){
    var age = prompt('Quel est votre âge ?');
    if (age >= 18) {
        alert('Vous êtes majeur !');
    } else {
        alert('Vous êtes mineur !');
    }
}
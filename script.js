
let infoMurphy = ['Murphy', 'Mix', 120.00];
let infoPoppy = ['Poppy', 'Havanese', 123.45];
let infoJack = ['Jack', 'Beagle', 110.20];
let infoDuffy = ['Duffy', 'Pit Bull', 125.35];
let infoLucas = ['Lucas', 'Dutch Shepherd', 105.00];
let infoJake = ['Jake', 'Yellow Lab', 100.00];
let infoAngus = ['Angus', 'Boxer', 107.00];
let infoViolet = ['Violet', 'Chocolate Lab', 140.50];
let infoPiper = ['Piper', 'American Shepherd', 130.15];
let infoMaximus = ['Maximus', 'Russell Terrier', 122.80];
let infoLuna = ['Luna', 'Yellow Lab', 123.40];
let infoStella = ['Stella', 'Chihuahua', 80.00];

let currentTotal = null;



function getInfo(infoDog) {

    alert("Name: " + infoDog[0] + "\nBreed: " + infoDog[1] + "\nAdoption Fees: " + infoDog[2]);
}

function addTotal(newFee) {

    let newTotal = currentTotal + newFee;
    alert("Your total is: $" + newTotal);
    currentTotal = newTotal;
}

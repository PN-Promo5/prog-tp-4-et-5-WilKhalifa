/* ---------------1.1-----------------*/

let arrayUser = [
  ["Mathias", "Ritrono", "34", "Nantes", "mr@yopmail.com", "1"],
  ["Salif", "Bamogo", "25", "Brest", "sb@yopmail.com", "2"],
  ["Kristina", "Pavlov", "20", "Villeurbanne", "kp@yopmail.com", "3"],
  ["Elise", "Seti", "30", "Grenoble", "es@yopmail.com", "4"],
  ["Pierrick", "Di Angelo", "18", "Strasbourg", "pd@yopmail.com", "5"],
  ["Mohamed", "Khaoui", "23", "Lille", "mh@yopmail.com", "6"],
  ["Paige", "Anderson", "42", "Evry", "pa@yopmail.com", "7"]
];

/*-------------1.2----------------*/

/*function addUser(firstName, name, age, city, mail) {
  let newArray = [firstName, name, age, city, mail, id];
  arrayTP5.push(newArray);
  let id = arrayUser.length;
  return array;
};

/*-----------------1.3--------------------*/

function findUserWithCity(arrayUser, city) {
  let i = 0;
  let elementCurrent;
  let j;
  let elementCurrent2;
  let newArray = [];
  while (i < arrayUser.length) {
    elementCurrent = arrayUser[i]
    j = 0;
    while (j < arrayUser[i].length) {
      elementCurrent2 = arrayUser[i][j];
      j++
      if (city === elementCurrent2) {
        newArray.push(arrayUser[i]);
      }
    }
    i++
  }
  return newArray;
}


/*------------1.4-------------*/


function findUserWithName(arrayUser, name) {
  let i = 0;
  let elementCurrent;
  let j;
  let elementCurrent2;
  let newArray = [];
  while (i < arrayUser.length) {
    elementCurrent = arrayUser[i];
    j = 0;
    while (j < arrayUser[i].length) {
      elementCurrent2 = arrayUser[i][j];
      j++;
      if (name === arrayUser[i][0] || name === arrayUser[i][1]) {
        newArray.push(arrayUser[i]);
      }
    }
    i++;
  }
  return newArray;
}


/*--------------1.5--------------*/

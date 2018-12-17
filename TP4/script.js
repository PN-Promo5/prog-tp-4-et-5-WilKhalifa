/*-----------------------EXERCICE 1---------------------------*/

let arrayNumber = [98, 67, 54, 102, 3];
let arrayNumber2 = [103, 3, 90, 9, 7]

/*function arrayValues(array) {
let elementCurrent //création de l'élément courrant
let i = 0 //initiation de la variable d'incrémentation i
while (i < arrayNumber.length) { //condition de validation
  elementCurrent = arrayNumber[i] // affection de l'élément courrant en fonction de l'index de arrayNumber
  i++ //incrémentation de i
  console.log(elementCurrent)
}
}

arrayValues(arrayNumber);*/


/*--------------------EXERCICE 2-------------------------*/

/*let array2Number = [4, 7, 0, 8, 1, 65, 87];

function firstNumbers(array) {
  let elementCurrent //creation de l'élément courrant
  let i = 0//cration de la variable d'incrémentation
  while (i < array2Number.length) {//condition de validation
    elementCurrent = array2Number[i]//// affection de l'élément courrant en fonction de l'index de array2Number
    i++
    if (i <= 10) { //test conditionel
      console.log(elementCurrent) //si i est inférieur ou égal à 10(les 10 premières valeurs) o affiche l'élément courrant
    }
  }
}

firstNumbers(array2Number); */

/*------------------------EXERCICE 3---------------------------*/

/*let array3Number = [6, 98, 43, 6, 5, 7, 4, 78, 3456, 98, 98, 24, 54, 65, 76, 89, 78, 78, 78, 43, 9, 8]

function lastNumbers(array) {
  let elementCurrent //création de l'élément courrant
  let i = array3Number.length - 1 //affection de la variable d'incrémentation à la longueur du tableau -1
  while (i >= array3Number.length - 10) { //condition de validation
    elementCurrent = array3Number[i]//affectation de l'élément courrant à la valeur de array3Number en fonction de son index
    i-- //décrémentation de i
    console.log(elementCurrent)
    }
  }

lastNumbers(array3Number); */

/*----------------------------EXERCICE 4-------------------------*/

/*let array4Number = [8, 9, 6, 3, 3, 2, 7, 1]

function increaseNumbers(array){
  let elementCurrent //creation de l'élément courrant
  let i = 0 //creation de la variable d'incrémentation
  while (i < array4Number.length) { //condition de validation
    let newArray //initialisation du'un nouveau tableau
    newArray = array4Number[i] + 1 //affection du nouveau tableau à la valeur du tableau array4Number en fonction de l'index +1
    elementCurrent = array4Number[i] //affection de l'élément courrant au tableau array4Number en fonction de son index
    i++ //incrémentation de i
    console.log(newArray)
  }
}

increaseNumbers(array4Number); */

/*-------------------------EXERCICE 5-----------------------*/

/*let arrayPrice = [2, 3, 7, 78, 24, 6, 5, 23, 17, 69]

function oddOrEvenNumbers(array) {
  let elementCurrent; //creation de l'élément courrant
  let i = 0;//creation de la variable d'incrémentation
  while (i < arrayPrice.length) {//condition de validation
    elementCurrent = arrayPrice[i];//affection de l'élément courrant en foction de l'index du tableau
    i++;//incrémentation de i
    let indication;//creation de la variable d'indication pair ou impair
    if ((elementCurrent % 2) > 0) { // test conditionel
      indication = "odd"; // si il y a un reste de la division de la valeur de l'élément courrant c'est un nombre impair
    } else {
      indication = "even"; // sinon c'est un nombre pair
    }
    console.log(elementCurrent + " " + indication);
  }
}

oddOrEvenNumbers(arrayPrice); */


/*--------------------EXERCICE 6-------------------*/

/*let arrayGrade = [1, 14, 15, 19, 10, 9, 17]

function sumNumbers(array) {
  let elementCurrent;//creation de l'élément courrant
  let i = 0;//creation de la variable d'incrémentation
  let sumGrade = 0;//création de la variable somme
  while (i < arrayGrade.length) { //condition de validation
    elementCurrent = arrayGrade[i];//affection de l'élément courrant en fonction de l'index du tableau
    sumGrade += elementCurrent; // somme des 2 variables
    i++;//incrémentation de i
  }
  console.log(sumGrade);
}

sumNumbers(arrayGrade);*/


/*-------------------------EXERCICE 7-----------------------*/

/*let arrayTemperature = [2, 3, 7, 78, 24, 6, 5, 23, 17, 69]

function countEvenNumbers(array) {
  let elementCurrent;//creation de l'élement courrant
  let i = 0;//creation de la variable d'incrémentation
  let countEven = 0;//creation de la variable de comptage de nombre pair
  while (i < arrayTemperature.length) {// condition de validation
    elementCurrent = arrayTemperature[i];// affectation de l'élément couurant  au tableau de température
    i++;// incrémentation de i
    if ((elementCurrent % 2) == 0) { // test conditionel
      countEven++ // si le reste de la division de l'élément courrant est égal à 0 on ajoute 1 au comptage des nombres pairs
    }
  }
  console.log(countEven);
}

countEvenNumbers(arrayTemperature); */

/*----------------EXERCICE 8---------------*/

/*function maxValues(array) {
  let elementCurrent;// creation de l'élément courrant
  let i = 0;// création de la variable d'incrémentation
  let maxNumber = array[0];// affection de la valeur maximum à la premiere valeur du tableau
  while (i < array.length) {// condition de validation
    i++;//incrémentation de i
    elementCurrent = array[i];//affectation de l'élément courrant en fonction de l'index du tableau
    if (elementCurrent > maxNumber) {// test conditionel
      maxNumber = elementCurrent // si l'élément courant est supérieur à la variable du nombre maximum on attribut la valeur de l'élément courrant à maxNumber
    }
  }
  console.log(maxNumber);
}

maxValues(arrayNumber); */

/*------------------EXERCICE 9----------------*/

/*function maxMinValues(array) {
  let elementCurrent;//creation de la variable élément courrant
  let i = 0;// création de la variable d'incrémentation
  let maxNumber = array[0];//affectation de la valeur maximum à la première valeur du tableau
  let minNumber = array[0];//affectation de la valeur minimum à la première valeur du tableau
  while (i < array.length) {// condition de validation
    i++;//incrémentation de i
    elementCurrent = array[i];// affectation de l'élément courrant en fonction de l'index du tableau
    if (elementCurrent > maxNumber) { //test conditionel
      maxNumber = elementCurrent// si l'élément courrant est supérieur à la valeur de maxNumber, maxNumber = elementCurrent
    }
    if (elementCurrent < minNumber) {//test conditionel
      minNumber = elementCurrent // si l'élement courrant est inférieur à la valeur minimum, on attribut la valeur de l'élément courrant à minNumber
    }
  }
  console.log(maxNumber);
  console.log(minNumber);
}

maxMinValues(arrayNumber);*/


/*-------------------EXERCICE 10---------------------*/

/*function incrasingDescendingNumber (array) {
  let elementCurrent;//creation de l'élément courrant
  let i = 0;//creation de la variable d'inspect d'incrémentation
  while (i < array.length) {// condition de validation
    i++;// incrémentation de i
    elementCurrent = array[i];//affectation de l'élément courrant en fonction de l'index du tableau
    if (array[i] < array[i++]) {//test conditionel
      console.log("true")//si la valeur en fonction de l'index est inférieur à la valeur qui la suit cela affiche vrai
    } else {
      console.log("false")//sinon affiche faux
    }
  }
}

incrasingDescendingNumber(arrayNumber);*/

/*----------------EXERCICE 11--------------*/


/*

function occurrence (array) {
  let elementCurrent;//creation de l'élément courrant
  let i = 0;//creation de la variable d'incrémentation
  let j;//cration de la deuxième variable d'incrémentation
  let copyOffArray = [array[i]];//affectation d'une copie d'un tableau en fonction de l'index de array
  let secondElementCurrent;//creation du decond élément courrant
  let already = false;//booleen qui vérifie si il est déja présent ou pas
  while (i < array.length) {//condition de validation
    elementCurrent = array[i];//affectation de l'élement courrant en fonction de l'index du tableau
    i++;//incrémentation de i
    j = 0;//initiation de j à 0
    while (j < copyOffArray.length) { // 2eme condition de validation
      secondElementCurrent = copyOffArray[j];//affection du second élément courrant en fonction de l'index de la copie du tableau
      j++//incrémentation de j
      if (elementCurrent === secondElementCurrent) {//test conditionel
          already = true;// si le premier élement courrant est égal au second élément courrant already est vrai
      }
    }
    if (!already) { //test conditionel
      copyOffArray.push(elementCurrent); // si le contraire de already est vrai alors on ajoute l'élement courant à la copie du tableau
    } else {
      already = false; //sinon already vaut faux
    }
  }
  console.log(copyOffArray);
  return copyOffArray;
}

occurrence(array);*/

/*----------------EXERCICE 12---------------*/

/*function increaseNumbers(array){
  let elementCurrent
  let i = 0
  while (i < array.length) {
    let newArray
    newArray = array[i] + 1
    elementCurrent = array[i]
    i++
    console.log(newArray)
  }
}
increaseNumbers(arrayNumnber);*/

/*--------------------EXERCICE 13---------------------*/

function concatenation(array, array2) {
  let elementCurrent;// création de l'élément courrant
  let i = 0;// création de la veariable d'incrémentation
  let newArray = [];//création d'un nouveau tableau vide
  while (i < array2.lenght) {//condition de validation
    elementCurrent = array2[i];//affectation de l'élément courrant en fonction de l'index du tableau 2
    newArray = array;// affectation du nouveau tableau au tableau 1
    newArray.push(elementCurrent);//ajout de chaque valeur de l'élément courrant au nouveau tableau
    i++;//incrémentation de i
  }
  console.log(newArray);
}

concatenation(arrayNumber, arrayNumber2);

/*--------------------EXERCICE 14--------------------*/

/*let arrayOffString = ["et", "avoir", "mais", "ballon", "donc", "chocolat", "ordinateur"]

function startingVowel (array) {
  let i = 0;//création de la variable d'incrémentation
  let elementCurrent;//création de l'élément courrant
  let newArray;//creation d'un nouveau tableau
  while (i < array.lenght) {//condition de validation
    elementCurrent = array[i];//affectation de l'élément courrant en fonction de l'index du tableau
    i++;//incrémentation de i
    if (elementCurrent[0] == "a" || elementCurrent[0] == "e" || elementCurrent[0] == "i" || elementCurrent == "o" || elementCurrent[0] == "u" || elementCurrent[0] == "y") {//test conditionel
      newArray = elementCurrent; // si l'élément courant est égal à et, ou, donc, or, ni, ou car le nouveau tableau est égal à l'élément courrant 
    }
  }
    console.log(newArray);
}

startingVowel(arrayOffString);*/









/*function exercice_16 (string1, string2) {
  let i = string1.length
  let elementCurrent
  let secondElementCurrent
  let j
  while (i >= 0) {
    elementCurrent = string1.charAt(i)
    i--
    j = string2.length
    while (j >= 0) {
      secondElementCurrent = string2.charAt(j)
    }

  }
  return elementCurrent
}

function anagramme (string1, string2) {
  let elementCurrent1;
  let elementCurrent2;
  let array1 = string1.split("");
  let array2 = string2.split("");
  let i = 0;
  let j;
  if (string1.length !== string2.length) {
    return false;
  }
  while (i < array1[i]) {
  elementCurrent1 = array1[i];
  i++;
  j= 0;
  while (j < array2[j]) {
  elementCurrent2 = array2;
  j++;
    }
  }
}*/

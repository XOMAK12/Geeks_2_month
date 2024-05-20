let num = 9;
let romanNum;

if (num === 1) {
    romanNum = "I";
} else if (num === 2) {
    romanNum = "II";
} else if (num === 3) {
    romanNum = "III";
} else if (num === 4) {
    romanNum = "IV";
} else if (num === 5) {
    romanNum = "V";
} else if (num === 6) {
    romanNum = "VI";
} else if (num === 7) {
    romanNum = "VII";
} else if (num === 8) {
    romanNumeral = "VIII";
} else if (num === 9) {
    romanNum = "IX";
}

console.log(num + " > " + romanNum);



let num2 = 3;
let romanNum2;

switch (num2) {
    case 1:
        romanNum2 = "I";
        break;
    case 2:
        romanNum2 = "II";
        break;
    case 3:
        romanNum2 = "III";
        break;
    case 4:
        romanNum2 = "IV";
        break;
    case 5:
        romanNum2 = "V";
        break;
    case 6:
        romanNum2 = "VI";
        break;
    case 7:
        romanNum2 = "VII";
        break;
    case 8:
        romanNum2 = "VIII";
        break;
    case 9:
        romanNum2 = "IX";
        break;
}

console.log(num2 + " > " + romanNum2);



let cardType = "gold";
let liters = 600;
let points;

if (cardType === "silver") {
    points = liters * 0.5;
} else if (cardType === "gold") {
    points = liters * 0.75;
} else if (cardType === "platinum") {
    points = liters;
}

console.log("На ваш счет поступило:", points, "баллов");



let cardType2 = "gold";
let liters2 = 100;
let points2;

switch (cardType2){
    case "silver":
        points2 = liters2 * 0.5
        break
    case "gold":
        points2 = liters2 * 0.75
        break
    case "platinum":
        points2 = liters2 * 1
        break
}

console.log("На ваш счет поступило:", points2, "баллов")



let sum = 600;
let typeOfFuel = "gas";
let numOfLiters;

if (typeOfFuel === "92"){
    numOfLiters = sum / 50;
} else if (typeOfFuel === "95"){
    numOfLiters = sum / 55;
} else if (typeOfFuel === "98"){
    numOfLiters = sum / 60;
} else if (typeOfFuel === "df"){
    numOfLiters = sum / 40;
} else if (typeOfFuel === "gas"){
    numOfLiters = sum / 30;
}

console.log("Количество литров:", numOfLiters)



let sum2 = 10000;
let typeOfFuel2 = "98";
let numOfLiters2;

switch (typeOfFuel2){
    case "92":
        numOfLiters2 = sum2 / 50
        console.log("Количество литров:", numOfLiters2)
        break
    case "95":
        numOfLiters2 = sum2 / 55
        console.log("Количество литров:", numOfLiters2)
        break
    case "98":
        numOfLiters2 = sum2 / 60
        console.log("Количество литров:", numOfLiters2)
        break
    case "df":
        numOfLiters2 = sum2 / 40
        console.log("Количество литров:", numOfLiters2)
        break
    case "gas":
        numOfLiters2 = sum2 / 30
        console.log("Количество литров:", numOfLiters2)
        break
}
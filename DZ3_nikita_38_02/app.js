let num = prompt('Введите число');
if (num <2 || num > 10) {
    alert("Число не подходит, попробуйте еще раз")
}else{
    for (let multiplyNum= 1 ; multiplyNum <= 10 ; multiplyNum++){
        let result = num * multiplyNum
        console.log(num, "*", multiplyNum, "=", result)
    }
}



let cards= ["46782346", "85781218", "49874568", "12157845", "36151845", "41250895", "41201961"];
let visaCards = 0;
for (let card of cards){
    if (card.charAt(0) === "4"){
        visaCards++
    }
}

console.log("Карт Visa: ", visaCards)
//global scope
const fixedNumber = 15

console.log(fixedNumber)
console.log(one)
console.log(two)
console.log(three)
console.log(number)

function getApi(){
    let number = 10 /*function scope*/
    console.log(API)
    console.log(number)
    function innerFunction(){
        var three = "3"
    }
}

getApi();
if (true){
    let number =20 /*block scope*/
    console.log(number)
    var two = "2"
}

var one = "1"

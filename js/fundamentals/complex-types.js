//complex data types
//arrays
var myArray=[1,'str1',true, {key1: "values1"}]
myArray[5]="the fifth value" //one way to add new element in the array
console.log(myArray)
console.log("the first element "+ myArray[0])
console.log("the second element "+ myArray["1"])
console.log("the third element "+ myArray['2'])
console.log("the fourth element "+ myArray[`3`])

console.log("myArray.length "+myArray.length);
myArray.forEach(element => {
    console.log(element);
});




//object
var user = {key1:"someValue", key2: 1.5, key3: true}
console.log(user);
console.log(user.key1+" "+ user.key2+" "+ user.key3);

//NaN
console.log(Math.sqrt("hello"));
console.log(isNaN(Math.sqrt("hello")));
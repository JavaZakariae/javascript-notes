//array like
let rgb = {
    0: "red",
    1: "blue",
    2: "green",
    length: 3
}

//converting array like to an array
let rgbArray = Array.from(rgb)
rgbArray.push('toto')

console.log(rgbArray)
console.log(rgbArray.length)

let arrayof = Array.of(1, "10")
let newArray = Array(10)


//testing predicate on arrays
const values = [1, 3, 99]
let atLeastOneGreaterThan3 = values.some((number, index, myArray)=>{
    console.log(number);
    return number > 3
})
console.log(atLeastOneGreaterThan3);

let allGreaterThan3 = values.every((number)=>{
    console.log(number);
    return number > 3
})
console.log(allGreaterThan3);


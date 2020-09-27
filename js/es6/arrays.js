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

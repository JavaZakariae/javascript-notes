const studentinfo = ["zaki", 22, "belgium"]
const values = [1, 3, 99]

//using concat method
mergedarrays = studentinfo.concat(values)
console.log("studentinfo", studentinfo)
console.log("mergedarrays", mergedarrays)


//using the spread operator
usingspreadoperator = [...studentinfo, ...values]
console.log("usingspreadoperator", usingspreadoperator)

//spread operator on object
const user = {
    name: 'zaki',
    age: 28
}
const usercopy = {...user}
console.log(usercopy)

//spread operator on object
function calc(a, b, c) {
    return a+b+c    
}
let sum = calc(...values)
console.log(sum);

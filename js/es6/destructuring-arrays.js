const studentinfo = ["zaki", 22, "belgium"]
const [name, age, country, hobby="football"] = studentinfo
console.log(name, age, country, hobby);

const [,, onlyTheCountry] = studentinfo
console.log(country);

//swapping values
let a=4
let b=9;
[a, b] = [b, a]
console.log(a);

const {myname, myage}=studentinfo
console.log(myage, myage);

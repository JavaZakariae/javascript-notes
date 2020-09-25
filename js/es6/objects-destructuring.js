const user = {
    name: 'zaki',
    age: 28
}

//result of copy by reference
let userCopy = user;
console.log("before modification");
console.log(userCopy);
console.log(user);

userCopy.name="ibra"
console.log("after modification")
console.log(user)
console.log(userCopy)

//destruring object
let {name, age} = user;
console.log(name);
console.log(age);

//destruring nested objects


const player = {
    name: 'ibra',
    age: 38,
    teams:{
        spain: true,
        italie: true,
        belgium: false
    }
}

const {teams: {spain, italie}} = player
console.log(spain);
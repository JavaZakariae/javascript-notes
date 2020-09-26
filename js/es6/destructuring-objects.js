const user = {
    name: 'zaki',
    age: 28
}

//result of copy by reference
let userCopy = user;
console.log("before modification");
console.log(userCopy===user);

userCopy.name="ibra"
console.log("after modification")
console.log(user)
console.log(userCopy)
console.log(userCopy===user);


//destruring object
let {age, name} = user;//the order is not important, the variables name are
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
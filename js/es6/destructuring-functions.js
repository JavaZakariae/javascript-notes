//destructuring object using arrow function call
const getUser = (name='zakariae', age=20) =>({
    name: 'zaki',
    age: 28
})

let {name, age} = getUser()
console.log(name, age);

//passing object to an arrow function
const getstudent = ({name='IBRAHIM', age=20}) =>
                     {
                        return name +" "+ age             
                     }
const ibra = getstudent({age:55})
console.log(ibra);



//if running from nodejs environement, this reference the global object
//if it is running inside a browser, this will reference the Window object 
function add(){
    console.log(this);
}
add()


console.log("still this will refer the global scope");
function minus(){
    function innerfunction(){
        // keep in mind, if we use 'use strict', this will be undefined and will no longer reference the window object  
        console.log(this)
    }
    innerfunction();
}
minus()


console.log("let's see another scope");
let person = {
    name: 'zaki',
    age: 33,
    getage: function(){
        console.log(this);
        return this.age;
    }
}
console.log(person);
console.log(person.getage());


// in this example, this will reference the window object and not the person object.
// as window dosen't have an age variable, undefined is returned.
console.log("let's see something else");
agefunction = person.getage;
console.log(agefunction());

console.log("another case with arrow function inside a function");
let person2 = {
    name: 'brahim',
    age: 30,
    getage : function  (){
        return ()=> {
            console.log(this);
            return this.age;
        }
    }  
}
agefunction2 = person2.getage();
console.log(agefunction2());
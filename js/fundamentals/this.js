//if running from nodejs environement, this reference the global object
//if it is running inside a browser, this will reference the Windows object 
function add(){
    console.log(this);
}
add()


console.log("still this will refer the global scope");
function minus(){
    function innerfunction(){
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


console.log("let's see something else");
agefunction = person.getage;
console.log(agefunction());

// in the above example, this will reference the windows object and not the person object.
// as windows dosen't have an age variable, undefined is returned.









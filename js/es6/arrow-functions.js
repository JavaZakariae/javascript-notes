// //Syntax
// const getStudent = ()=>{
//     return {
//         name: "zaki",
//         age: 33
//     }
// }
// console.log(getStudent());

// const getStudent2 = ()=>({
//         name: "Ibra",
//         age: 30
//     })
// console.log(getStudent2());

// problem with this using standard function
const incrementFunction = {
     x:0,
     increment : function(){
         setTimeout(
             function increment() {
                   console.log( this)// this will reference the window object
                   console.log(this.x)
             }
         , 500);
     },
     increment2 : function(){
        setTimeout(
            function increment() {
                  console.log( this)// this will reference the object passed to the bind method
                  console.log(this.x)
            }.bind(this)
        , 500)
    }
}
console.log(incrementFunction.increment());
console.log(incrementFunction.increment2());
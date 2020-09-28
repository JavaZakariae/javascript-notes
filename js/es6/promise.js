//using promise
const articleReadingPromise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve(100)
        // reject("hello boy")
    }, 1000);
}); 

//calling the promise
articleReadingPromise
        .then((result) => {
            console.log(result)
        }).catch((err) => {
            console.log(err)
        });

const values = [34, 2, 6]
//second example using promise
const pushingElementPromise = new Promise((resolve, reject)=>
                                {
                                    setTimeout(() => {
                                        values.push(12)
                                        resolve(values)
                                    }, 2000);

                                }
)        
pushingElementPromise.then(result=>{
                           console.log(result);
                           return result
                    }).then(result=>{
                        console.log(result[result.length-1]);
                    })

//another promise
Promise.all([articleReadingPromise, pushingElementPromise])
       .then((result) => {
            console.log(result instanceof Array);
            console.log("result", result);
       }).catch((err) => {
        console.log("error", err);
       });

//fetching data from the web and getting promise as a response
const fetch = require("node-fetch");
fetch("https://jsonplaceholder.typicode.com/posts/1")
     .then(response => {return  response.json()} )
     .then(res => console.log(res))


//promise chaining
const runforonehour = new Promise((resolve, rejecte)=>{
    setTimeout(() => {
        resolve("i run for 1 hour")
    }, 2000);
})     

const walkforonehour = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve("i walked for 1 hour")
    }, 500);
})

runforonehour
    .then(
        res =>  {
            console.log(res);
            return walkforonehour;
    } 
    ).then(
        res =>  {
            console.log(res);
        } 
    )


//promise chaning using inner promise(promise returned from a given function)
function add(x, y){
   return new Promise((resolve, _reject)=> 
    {
        setTimeout(() => {
            resolve(x+y)
        }, 3000);
    } 
   
   )
}

function substract(x, y){
    return new Promise((resolve, _reject)=> resolve(x-y))
}
 
add(2,4)
    .then(response=> {
        console.log(response)
        return substract(response, 1)
    })
    .then(res=>console.log(res))
    
//Promise.all
let pr1 = Promise.resolve("1")
let pr2 = Promise.resolve(2)
let pr3 = Promise.resolve(true)
Promise.all([Promise.resolve("1"), pr2, pr3])
        .then(res=>console.log(res))
        .catch(error=> console.log(error))
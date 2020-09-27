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
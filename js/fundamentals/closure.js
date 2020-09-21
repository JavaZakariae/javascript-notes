function counter(){
    let num = 0;
    num++;
    console.log("num "+num);
}
console.dir(counter);
counter();
counter();
counter();

//using Closure
function counterUsingClosure(){
    let num = 0;
    return function innerFunction (){
        num++;
        console.log("num2 "+num);
    }
}

let counter2 = counterUsingClosure();
console.dir(counter2);
counter2();counter2();counter2();
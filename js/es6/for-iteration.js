let values = [45, 65, 7, 8, 1];
//ES5, can't break the loop
values.forEach((number, index, array) => {
    console.log(number, index, array);
});

//ES6, not recommended if we need to use the index value in a matematical operation
for(const index in values){
    console.log(typeof index);
    console.log(index+1);
}

//ES6, we can break the loop
for(const value of values){
    console.log(value);
}
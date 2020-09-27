//passed by value
let str = "hello"
let copy = str
copy = "hi"
console.log(str)//will print hello



let strArray = ["hello", "hi"] 
let arrayCopy = strArray
arrayCopy.push("new item")
console.log(strArray)//will print ["hello", "hi", "new item"]  

# javascript-notes
This is a repository that contains my notes about javascript, as a Java Developer I omitted many part of the javascript fundamentals for similarities reasons between java and Js. 

## Types
- In Javascript, we don't declare the type of the data, for example we can declare and initialize a number variable like that `var n=1`, later in the program we can also change the type of the variable `n="nowitisastringvariable"`. In java for example we need to declare it as follows: `int n=1`, later in the program we can't change the type of `n`.
- Javascript is a dynamically typed language, to learn more, check the following links: [1](https://stackoverflow.com/questions/1517582/what-is-the-difference-between-statically-typed-and-dynamically-typed-languages), [2](https://android.jlelse.eu/magic-lies-here-statically-typed-vs-dynamically-typed-languages-d151c7f95e2b).

There are two categories of javascript data, the primitive data types and the complex data types. 

## Primitive Values 
- number: One type for decimals and floats, `var n=3.14`.
- string: "str1", 'str2', \`str3\`
- boolean: true or false
- undefined: When we create a variable without assigning a value to it, its value will be undefined, the type also will be undefined.
- null: means an empty value, `var n=null`, the value of n will be null and the  type of n will be object.

## Complex Values 
There are two types in this category, arrays and objects.
- array: `[1,'str1',true]`, arrays are `0` indexed, they can contains heterogenous types, objects type included as follows: `[1,'str1',true, {key1: 1.5}]` .
- object: `{key1:"value1", key2: 1.5, key3: true}`

## Comparison Operators
- `45 == 45` will return true, we check if the two are equal.
- `45 === "45"` will return false, we check if both are equal and their type is the same, it is called the strict equal.
- `5 != "5"` will return false, we check if the two numbers are not equal.
- `5 !== "5"` will return true, we check if the two numbers are not equal or they don't have the same type.


### Articles
- [Semicolon in Js](https://flaviocopes.com/javascript-automatic-semicolon-insertion/).

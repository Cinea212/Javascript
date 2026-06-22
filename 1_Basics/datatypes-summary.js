// primitive data types and non primitive datatypes
// 7 types (Call by value and not by reference): String, boolean, null, undefined, number, symbol, BigInt

const score = 100
const scoreValue = 90
const isLoggedIn = true
const outsideTemp = null
let userEmail;
const id = Symbol('1234')
const anotherId = Symbol('1234')
console.log(id)
console.log(anotherId)

console.log(id===anotherId);



// reference type (Also called Non Prrimitive): 
//Arrays, Objects, Functions, 

const heros = ["Ironman", "Shaktiman"]
let obj = {
    name: "Om",
    age: 19,
    city: "Mumbai"
}

const myFxn = function (){
    console.log("HEllo Zindagi")
}
console.log(typeof myFxn);

//++++++++++++++++++++++++++++++++++++++++++++

//types of memories Stack memory and heap memory
// Stack (Primitive) , Heap (Non Primitive)

let myYtName = "hjdjkbj"
let anotherName = myYtName 
anotherName = "jahbdijh"
console.log(myYtName);
console.log(anotherName);

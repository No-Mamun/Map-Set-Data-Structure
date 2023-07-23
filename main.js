
//Map & Set Data Structure

/*
Node:1

let myMap = new Map();

myMap.set(1, "Nasim");

myMap.set("2","Forhad");

myMap.set("name","Rashid");

myMap.set("age",50);

myMap.set(true,"isActive");

for (item of myMap.values()){

console.log(item);

};

*/

/*
Node:2

let myMap = new Map();

let users = {

name : 'Nasim',

address: "Dhaka",

post:"Freelancer"

}

myMap.set(1, "Nasim");

myMap.set("2","Forhad");

myMap.set("name","Rashid");

myMap.set("age",50);

myMap.set(true,"isActive");

myMap.set("users",users);

myMap.delete('name');

for (item of myMap.values()){

console.log(item);

};

*/

/*
Node:3

let mySet = new Set();

mySet.add({name:"Nasim"},[334324,"Dhaka"],true,20, null);

console.log(mySet);

*/

/*
Node:4

let mySet = new Set();

const myObject = { name: "Nasim" };
const myArray = [334324, "Dhaka"];

mySet.add(JSON.stringify(myObject));
mySet.add(JSON.stringify(myArray));
mySet.add(true);
mySet.add(20);
mySet.add(null);

console.log(mySet);

*/

// Node:5

let mySet = new Set();

mySet.add("Nasim");                    // Add a string "Nasim"
mySet.add(1);                          // Add a number 1
mySet.add([10, 20, 30, 40]);           // Add an array [10, 20, 30, 40]
mySet.add({ name: "Nasim", age: 40 }); // Add an object {name: "Nasim", age: 40}

mySet.clear();  // Removes all elements from the Set

console.log(mySet);  // Output: Set {}

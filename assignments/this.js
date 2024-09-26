/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Binding: 'this' refers to the window, basically the top level object...filled with objects...filled with objects...
* 2. Implicit Binding: When calling a function inside an Object 'this' refers to that same level object.
* 3. New Binding: Used in constructor functions to refer to the current object getting created.
* 4. Explicit Binding: Explicitly define what object 'this' refers to.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
// console.log(this);

// Principle 2

// // code example for Implicit Binding
// const testObject = {
//     name: 'test',
//     sayName: function(name) {
//         console.log(`I am a ${this.name}`);
//     }
// }

// Principle 3

// code example for New Binding
// function Doge(name) {
//     this.name = name;
//     this.bark = `woof woof bark, my name is ${this.name}`;
//     this.givePaw = 'slap hands!';
// }
// const ammo = new Doge('Ammo');
// const jax = new Doge('Jax');


// Principle 4

// code example for Explicit Binding
// 
// 
// function bark() {
//     this.name = name;
//     this.bark = `woof woof bark, my name is ${this.name}`;
// }
// 
// bark.call(Ammo);

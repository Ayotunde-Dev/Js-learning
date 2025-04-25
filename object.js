// Objects are containers of other datatypes
// objects are passed via reference - unlike prmitive data types, object name points to an address in memory 
// const myObj = new Object()
// myObj = 0x6a99aa2f

//objects link to a prototype

//creating objects
//1. Object literal Syntax  key - value

const myCourse = {
    title: 'Arrays and objects'
    
};
 //2. New Syntax
const myDate  = new Date();

const person = {
    name: "Ayotunde",
    age: 19,
    Student: true,
    greet: function() {
      console.log("Hello, my name is " + person.name);
    }
  };
  
  person.greet(); 
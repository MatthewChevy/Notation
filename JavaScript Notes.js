'Matthew Chevy'.split(' '); // [ 'Matthew', 'Chevy']
'Matthew Chevy'.replace( /\s+/g,'-'); // Matthew-Chevy /s - small white spaces, /g - goes through the whole string, does not stop at the first  
Number('23') = 23; // Change string to number
parseInt('23') = 23; // Change string to number
 
//requests
requestAnimationFrame( myFunction ); //You should call this method whenever you're ready to update your animation onscreen.

// Array functions
[].find( condition ); // return first value
[].findIndex( condition ); // return index first value
[].filter( condition ); // return all values from array which meet condition
[].map( condition ); // adjusts the values according to the condition, create new array
[].fill(); //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
[].copyWithin(); //Copies part of an array to another location in the same array
[].from( HTLMCollection ); // Array from htmlcollection
[].some( condition ); // return bollen. If some meet condtition = true, inverse = false
[].every( condition ); // return bollen. If everz meet condtition = true, inverse = false

//Math
Math.floor( 10.5 ) // 10
Math.round( 10.5 ) // 11


console.log( typeof 'Dude') // Which type is 'Dude' ? 

document.getElementById('Dude'); // Get ID
document.querySelector('dude');
document.getElementsByTagName('h1')[0]; // Get 0 index Html tag,  //HTMLcollection

dude.firstChild;
dude.removeChild;

getComputedStyle( 'class', 'id' ); // Get all css values

dude.classList.remove("dude"); 
dude.classList.add("dude");
dude.classList.contains("dude"); //Check if dude have class
dude.classList.toggle("dude", fart < grumble ); //toggle of classList, second parameter is condition

dude.nextElementSibling() // Get Sibling
dude.textContent = 'value' // Get text inside element and change text
dude.alt // Get alt atribute

// html element <canvas>

const canvas = document.querySelector("canvas"); 
const ctx = canvas.getContext('2d'); //If I want draw 2d or 3d 

//LocalStorage

localStorage.setItem('Name', value );  // In Localstorage save value in to the Name
localStorage.getItem( 'Name' );
localStorage.removeItem( 'Name' );


performance.now()  // Return count milisecond, how long you have open websites

function dude( parameter ){ /* blaaa */ };
dude(argument);
( function(){ }() ); // Self invoking anonymous function ( IIFE ), Hoisting will be not work
function dude(){ }; // Hoisting it will be possible

//Math function

arrOfNumbers.reduce((a , b) => a + b, 0)  // sum of all numbers in array

// Module Pattern, for example
var XYZ = ( function(){
    function doStuff(){ 
      return true 
    }

    return{ doStuff: doStuff, /*or*/ 
      doStuff /*if name is equal*/ 
     }
}());

// Global enviroment
XYZ.doStuff();

/*-------------------------------------------------------------------

Technical definitions

Debounce - Fire request when stop performing the action
Throttle - Limit how often the code runs
Bottleneck - Part of code which make your code slowly
Single threaded - You can run only 1 script at the same time
Multithreading / Web worker - Method how to run multiple scrpit at the same time
ASI or Automatic Semicolon Insertion - The name implies
-------------------------------------------------------------------*/
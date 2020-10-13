
/********** ES6 ***********/

//  => - arrow operator

array.map( x => x.length ); // Take array and return length of each x. Map take array and create new array

array.forEach( x => console.log( x )) // Take array console log each x

// This exception

// => - arrow operator haven't this

// 1.
var rich = {
    name: 'Rich Evans',
    cry: function() {
        console.log( this ) // 'this' = rich
    }
}

// 2.
function name( ) {  }; 
name( this ) // this = window, if use strict mode this = undefined ( function,  this = global object )

// 3.
var Fraud = function ( name, disease ){
    this.name = name;
    this.disease = disease; // here 'this' is var Fraud
}

var rich = new Fraud(' Rich Evans', 'diabetes' ); // If create object with new, 'this' is var rich 

// 4.
var redLetterMedia = ['Mike', 'Jay', 'Rich Evans'];

function kill () {
    console.log( this );
}

kill(); // this = window
kill.call( redLetterMedia ); // Call function kill and set redLetterMedia to 'this'

// implicit block                // explicit block 

if ( bool )                     if ( bool )
{                               {
    let thing = 'a boob';           {
    console.log( thing );               let thing = 'a boob';
}                                       console.log( thing );
/**/                                }
/**/                            }

/* { block scope } */

{
    const name = 'My Library',             
          version = '1.0.0';
    let fun = function() {};

    window.mattLibrary = {
        name: name,
        version : version,
        fun : fun
    }
          
}

console.log( version ); //err
console.log( mattLibrary.version ); // '1.0.0'

//Object destructuring / Destructuring assignment-------------------------
let warcraft = {                 
    name: 'Glob',        
    race: 'Elf',
    weapon: 'Axe',
    level: 12
}

let { name, level } = warcraft,

name = 'Glob';
level = 12;

// Template `Strings`, Smart Strings --------------------------------------

let title = 'hot piss';
  
`<article>
    <h1>${title}</h1>
</article>`
  
let artist = 'Kolowrat',
    song = 'Ja a slečna Ts';
  
`Pieseň od ${artist} sa volá ${song} a 2 + 2 je ${ 2+2 }`.toUpperCase();

// ---------------------------------------------------------------

// Any admins in da house?
const users = [
    { name: 'Marceline' },
    { name: 'Lyra', administrator: true },
    { name: 'Matilda' }
];
  
//At least one of them has the 'administrator' feature?
users.some( user => 'administrator' in user );
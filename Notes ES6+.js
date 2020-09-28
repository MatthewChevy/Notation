//  => - arrow operator

array.map( x => x.length ); // Take array and return length of each x. Map take array and create new array
array.map( x => x + ' bla bla' );

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
name( this ) // this' = window, if use strict mode this = undefined ( function,  this = global object )

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
kill.call( redLetterMedia ); // Call function kill and set redLetterMedia to this 

toFixed( 3 ) // Zaorkuhli na 3 desatine miesta
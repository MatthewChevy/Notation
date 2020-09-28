// JS v prehliadaci (16)
var dude = test,
    dudes = test;


console.log( typeof 'Dude') // Which type is 'Dude' ? 

document.getElementById('Dude'); // Get ID
document.querySelector('dude');
document.getElementsByTagName('h1')[0]; // Get 0 index Html tag,  //HTMLcollection
dude.addEventListener( 'click', function(){ }); // Listener

dude.alt // Get alt atribute

dude.classList.remove("dude"); 
dude.classList.add("dude");
dude.classList.contains("dude"); //Check if have class

dude.nextElementSibling() // Get Sibling
.textContent = 'Another Text' // Get text inside element and change text

getComputedStyle( class / id ) // Get all css values

Number( '68') = 68; // Change string to integer
parseInt ('sting') = number;

// Switch NodeList to Array

dudes = document.querySelectorAll('.Class img') // Select all img they are inside of .class
console.log( dudes ) // When log a 'dudes', will return NodeList
dudes = Array.from( dudes ); // We have got to switch to array 
var arr = [].slice.call( htmlCollection ) // Array from HTLM colection

// or
dudes = document.querySelectorAll('.Class img');
dudes = Array.prototype.slice.call(dudes);

//ForEach

array.forEach( function( variable ){  // Variable are items from array
    //-----
});

// Work with LocalStorage

localStorage.setItem('Name', value );  // In Localstorage save value in to the Name
localStorage.getItem( 'Name' );
localStorage.removeItem( 'Name' );

// Window object 

window.outerHeight; //out window height
window.outerWidth;

window.innerHeight; //in window height
window.innerWidth;

window //- global SCOPE;
function k() // - local SCOPE; Variable inside a function can't by read from outside

(function() { //Self invoking anonymous function ( IIFE )
}() ); // When I want to run an anonymous function

var dude = ( function(){ }() ); // Hoisting will be not work

function dude(){ }; // Hoisting it will be possible



// SVG
    
<svg height="200" width="200"> //Notes in note block
    <circle cx="50" cy="50" r="30"></circle>
</svg> 

progress.classList.toggle('danger', this >= thenThis );  //Add class if condition is true

var that = this;
 setTimeout(function () {
     that.doStuff();
 }, 4000);

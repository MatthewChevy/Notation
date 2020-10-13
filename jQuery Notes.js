//12: Document ready funkcia, kompatibilita jQuery s inými Javascript knižnicami
//Komentare ako v Sass //, /* */,

(function($){ })(jQuery); // odizolovanie kodu

console.log();
console.dir(); // Viac info


pes.vek; // Cez bodkovu notaciu pristupujem k veku psa

$('.post-title').text() // Dostanem text / Getter
$('.post-title').text('Posielam text') // Poslem text / Setter


//( 8-12 ) jQuery Animacie 
// -------------------------

$('.post-title').hide();
hide(3000)  // 3000 ms / 3s
show(5000)

fadeIn() - opacity +
fadeOut() - opacity -

slideDown()
slideUp()
slideToggle() // Funguje ako prepinac, aj je slideDown spravi slideUp a naopak


$('.post-title').animate({ width : 500}, 3000); 
					// Aku hodnotu chcem animovat ? Width! 
					// Aku chcem aby mala hodontu na konci ? 500 !
					// Ako dlho bude trvart animacia ? 3 sekundy!


$('body').height() // Cez consolu vypise vysku body elementu


//JavaScript eventy (13-19)
//-------------------------

$('post-title').on('click', function() {  // Click event
	//funkcia ktora sa ma vykonat;
});

alebo

function nazovFunkcie() {
	//funkcia ktora sa ma vykonat;
}

$('post-title').on('click', nazovFunkcie() );

$(this) - // Pouzitie pre konkretny element

premenna.on('mouseenter');{ // 'click', function(){ // - Na 'mouseenter' sa spusti funkcia
	$(this).animate(settings, speed) // - Na ten konkretni element sa bude animovat setting, speed
}; 

/*14: Traverzovanie po DOM (Document Object Model)
------------------------------------------------*/

var zoznam = $('li');

zoznam.children('dt'); // Najde priamych potomkov, konkretne 'dt'

zoznam.children('dt').first(); // a zaroven prvneho
zoznam.children(':first-child'); // prveho potmka

zoznam.children(':nth-child(2)').next(); // Najde dalsieho
zoznam.children(':nth-child(2)').prev(); // Najde predosleho


find(':nth-child(3)'); 
children().eq(2); //alebo
find('li:eq(2)'); //alebo

find('li').children(':not(:eq(2))'); // vsetky okrem 2
find('li').children().not(':eq(2)'); // alebo


zoznam.parent(); // Najde rodica
zoznam.parents(); // Najde vsetkytch rodicov


event.stopPropagation(); // Zastavi bublanie
event.preventDefault(); // Vypnutie zakladnej akcie

prepend(); // Prida na zaciatok, ku nejakemu elementu
append(); // Prida na koniec

prependTo(); // Ked chcem vytvorit novy element a k nemu nieco pridat
appendTo(); // Prida na koniec

zoznam.before()
zoznam.after()

insertBefore()
insertAfter()

add()

$($0).attr('href', 'Zmena hrefu'); // Prvym atributom vyberem co potrbujem, druhym to zmenim 

//jQuery Traversing


//18: Eventy, event listener, event handler, vybublávanie, delegácia
// -----------------------------------------------------------------

var dt = $(this),
	dd = dt.next();

dt.clone().appendTo( list );
dd.clone().appendTo( list ); 

// Skratenie kodu 

dt.add(dd).clone().appendTo( list );

//19: Event object, podmienky, ternárny operátor, zastavenie animácií, príprava na Lightbox
//-----------------------------------------------------------------------------------------

fadeTo( 200, .5) // - Do fadeTo mozem poslat 2 hodnoty, a to : time, opacity

var opacity = event.type === 'mouseenter' ? 1 : .5; // - Ternarny Operator

var overlay = $('<div/>', {	 id: 'overlay', 'xxx'}); // - Vytvorenie noveho elementu a pridanie id
image = $('<img>', { src: href, alt:'blabla'});
$('<div id="overlay"></div>').appendTo('body'); // -Tiez vytvorenie elementu

/*Ked si na kliknutie vytvorim novy element, a chcem
nan uplatnint funkcie, nebudu funkovat pretoze pri
nacitani stranky este neexistoval, cize musim pouzit toto vybublavanie : */

$(document).on('click', '#overlay', function(){
	$(this).hide();
})

/* Prikaz hovori ze : Necham si odchytit kliknutie na samotny dokument
ak tento klik padne na #overlay, tento element nechame skryt */

if ( $('#overlay').length < 1){ //Testovanie existencie elemntu
	bla bla
} else{ }

// Scrolovanie

offset().top; // Dostanem top a left hodnotu napr. objektu kde sa nachadza
$('body,html').scrollTop(); // Dostanem hodnotu ako hlboko na stranke sa nachadzam (px)

window.location.hash = this.hash; // Pridanie hash do adresy

//26: jQuery image slider, časť druhá
//-----------------------------------


console.log( 'ja sa opakujem', math.random() * 100); // *100 pre to lebo generuje cisla od 0 po 1;

console.log( 'ja sa opakujem', math.floor(math.random() * 100)); // floor/random zaokruhli cisla

clearInterval() // -Zastavenie intervalu

$(this).animate( { left: '+=50' } ); // K aktualnej pozicii hodi +50px

//29: Pokročilé jQuery animácie #1 - spolupráca jQuery a CSS3
//-----------------------------------------------------------

animate({ left: 400}, {  // Za normalnych okolnosti sa elementy skladaju na sebe
	duration: 3000,
	queue: false, // <-- Zamedzi tomu skladaniu a zanimuje sa to naraz
	easing: 'linear' //https://api.jqueryui.com/easings
})
.deleay() // <-- Pauza medzi animaciami
.animate( { top: -400}, 5000); 

// 30: Pokročilé jQuery animácie #1 - animovanie farieb 
//------------------------------------------------------

// https://github.com/jquery/jquery-color

// Nahodne vytiahnutie indexu

var colors = ['pole']
var newColor = colors[ Math.floor( Math.random() * colors.length ) ];

// Math.random() * colors.length - 
// Math.random() Generuje cisla od 1 po 0 takze to musim vynasobit velkostou pola * colors.length;
// Kazde pole i zo sebou nesie atribut ktory hovori o jeho velkosti - length

//Math.floor - Zaokruhlenie cisla smerom na dol

//colors [1] - By korespondovalo s hodnotou 1, celou matematikou sme dostali nahodnu farbu


//Zrusenie opakvania animacie

if ( $(this).is( ':animated' ) ) return;

//Ak sa element prave animuje, return znamena ze vyskoci z funkice, if vrati true
// ':animated' - Specialny jquery seletor

console.dir($) // fx, fn

$.fx.speeds.myFast = 5000;
fadeOut('myFast');

//32: CSS3 animovaná galéria, HTML5 data atribúty, práca so stringami v Javascripte
//---------------------------------------------------------------------------------


$.extend( Slider.config, settings);  // Ak posleme settings tak sa hodnota zmeni, ak nie ostane povodna


console.log( attr('data-options') ); // Pristupovanie k DATA 
console.log( data('options') ); // Tento vypluje javascript object

'string'.toUpperCase() // STRING
'STRING'.toLowerCase() // string

'string'.charAt(3) // i 
'string'.slice(0) // tring
'string'.slice(1, 5) // trin

'string'.charAt(0).toUpperCase() + 'string'.slice(1); // String 


// 34: AJAX
//---------


var fb = [
	'http://graph.facebook.com/learn2codesk',
	'http://graph.facebook.com/spaceunicorn',
	'http://graph.facebook.com/bedroomsk'

]; //Pole obsahuje value : url adresa,
  //a index, v tomto pripade [1],[2],[3],

  $.each(fb, function(index, value) {

	console.log( index, value )

	/* console.logne sa mi toto 

	0 'http://graph.facebook.com/learn2codesk',
	1 'http://graph.facebook.com/spaceunicorn',
	2 'http://graph.facebook.com/bedroomsk' */
  });

  $.each(fb, function(index, value) {

	console.log( index, value )

	$.ajax({
		url:value, //co chcem nacitat, v tomto pripade je value url adresy pola fb[]
		type:'GET',
		dataType: 'json'  // Aky element budeme prijmat
	}).done( function( data ){
		console.log( data )  //5:44
	});

  });

  // Promises

var request = $.ajax({
	  url: fb[0],
	  type: 'GET',
	  dataType: 'json'
  }).promise();  // Necham si vratit promise() od Ajax metody,
				 // To si ulozim do premennej ( request )
				 // Na tu object (premennu) zavolam funkciu then
				 // then sa odpali vtedy ked sa slub naplni


  request.then(function(data){ 

  });



  



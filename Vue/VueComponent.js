import Dude from "./components/Dude.vue" // Aby mi toto fungovalo, musí mi bežať module bundler

Vue.component('bike-card',{  // 'bike-card' je nazov mnou vytvoreneho HTML elementu

    template:               // Mozem to zapisat aj 'bikeCard'
    `
        <li>
            <article>
                {{ value }}
            <article>
            <aside>
                <slot> </slot> // Slot sluzi na urcenie miesta pre obsah v HTML kode        
            </aside>
        </li>    
    `,

    data(){
        return{
            value : 5,  // Hodnoty musia byt vratene ako vysledok funkcie
        }              //Dovod je ze kazdy komponent bude mat svoje vlastne data
                      // Keby v duhom koponente mali rovnaky nazov tak sa neprepisu
    },

    props: [   //Pole vlastnosti ktore mozem odchytit z atributov HTML elementov
              // Velmi casty sposob ako poslat atribut HTML elementu do komponentu
     'title' //V HTML si ulozim nieco do atributu title, cez props si to odchytim
    ]       // a potom to mozem pouzit na vlozenie ako text {{ titile }} alebo ako premennu


})

const app = new Vue({  //Tento kus kodu musi byt pod vue.component

    el:'#navigation', //Vue bude zit na elemente #navigation, ak by to bol class tak .navigation
    data: {
        value: 5, // K tejto hodnote pristupim v HTML {{ value }}
    }

})   

/*<html>

:title = 'premenna' --> Ked pouzijem : pred atribut tak obsah atributu moze byt javascript
v-bind:class = 'podmienka' --> v-bind: = :

v-if="awesome"

/</html>*/
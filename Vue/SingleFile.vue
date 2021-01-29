<template> 
 <!-- -->   
    <div id='wrap'> Vsekto musi byt obalene vjednom elemente

        <div v-if='javascript'> cely element zmizne zo stranky ak podmienka neplati</div>
        <div v-else-if='value'></div>
        <div v-else ></div>

        <div v-show='javascript'> element dostane len display: none, efektivnejsie z hladiska vykonu</div>

        <div v-bind:class='javascript'> v-bind:class == :class </div>

        <div v-cloak > Div sa nezobrazi dokym nieje plne pripraveny, v css najlepsie nastavit display: none </div>

        <div :title = 'javascript'> Ked pouzijem : pred atribut tak obsah atributu moze byt javascript, PROPS </div>
        <div :style="{ width: value + '%', fontWeight: 'bold'}"> Do style musi byt vlozeny objekt </div>
        
        <div  class="example"> class aj :class mozu byt naraz na jednom elemente.
                class je default
                :class sa prida dynamicky ked je splnena podmienka 
        </div>
        <div :class="{ main: score < 9 }"> Prida sa class len vtedy ak bude paltit podmienka </div>

        <div @click="this.console.log('2 + 2')"> Ako pouzit console.log v HTML </div>
        
        <div @click.alt.shift="value++"> Po kliknuti alt + shift, Modifikator </div>
        <div @click.once="value++"> Iba jeden klik, Modifikator </div>

        <input v-model='value'> Do premennej value ulozi text z inputu
        <input ref='inputRef'> Hodnota 123 //Sluzi na selektnutie elementu z HTML [ ref() ]

        <form @submit.prevent> Zamedzni defaultnej akcii </form>

        <div @dblclick="editing = true"> Po dvojitom kiknuti nieco sprav </div>
        <div @blur="updateComment"> Ked v textovom dokumente blika kurzor = focus, ked sa odkliknem = blur </div>

    <!---- EMIT : Child to Parent ----> 

        <form @submit.prevent = "$emit('nazov-eventu', data )">
            V prvom arugmente zadam vlastny 'nazov-eventu' podla ktoreho ho budem odchytavat v rodicovi.
            V druhom agumente budu tie samotne data co budem posielat
        </form>

        <komponent-v-html Nazov-eventu="character.push( $event )" >
            Poslane data ulozi do premennej $event
        </komponent-v-html>

        <router-link>
            Je vue koponent ktory na stranku vygeneruje klasicky <a> element
            to co je v :to= vlozi do href atributu
        </router-link>

    <!----------------------------> 

        <transition name="nazovAnimacie" 

            v-on:before-enter="beforeEnter" // zavolaj funkciu "beforeend"
            v-on:enter="enter"
            v-on:after-enter="afterEnter"
            v-on:enter-cancelled="enterCancelled">

            Vsetko co vlozim do transition mozem animovat (animacia v CSS)
            <transition-group> To iste len na zoznamy alebo kolekcie elementov </transition-group>

        </transition>

    </div>



</template>

<style lang="sass" scoped> //scoped: CSS budu privatne len pre tento komponent
    
/* <transition> */ .nazovAnimacie-active{ 
                         // Pouzit na definovanie duration, delay, transform, pred zacatim animacie
                        // https://vuejs.org/v2/guide/transitions.html#JavaScript-Hooks
                       // https://vuejs.org/v2/guide/transitions.html#Custom-Transition-Classes
                    }

                    .nazovAnimacie-enter{ 
                        // Kde ma byt,co ma robit na zaciatku animacie
                    }

                    .nazovAnimacie-enter-to{ 
                        // Kde ma byt,co ma robit na konci animacie
/* </transition> */ }


        

   

</style> 

<script>
export default {
    props: [  // Ked chcem do komponentu dostat data z vonku kodu
              // Parent to child
        'title', 'name'
    ],

    created () { // Function fire after page is created, cannot do any DOM manipulation
        this.show();
    },

    mouted () { //  Called after the DOM has been mounted or rendered.
        this.init();
    },

    data(){  // Hodnoty musia byt vratene ako vysledok funkcie ako pri Vue.component()
        return{
            guitar: 10,
        }
    },
    methods: {
        log( data ) {  // Ako pouzit console.log
            console.log( data )
        },
        howManyGuitar(){
            return this.guitar //K hodnote guitar pristupujem this.guitar
        },
        ref(){
            console.log( this.inputRef.value ); // Hodnota 123
        }
    },
    computed: { // Rozdiel medzi method a computed je ze computed su cashed ( cize ich prehliadac nacita len raz)
        classObject(){ // Prida class na zaklade podmienky, v HTML : <div :class = 'classObject'>
            return {
                class1: this.score >= 0,
                class2: this.score < 0
            }
        }
    },
    filters: { /* https://vuejs.org/v2/guide/filters.html */
        songify: (song) => {
          return song.artist + ' - ' + song.name
        },

        lower: (str) => {
          return str.toLowerCase()
        },
    },

    mixins: [ tableMixin ]
 //  Mixin pouzivam ked chcem vytvorit globalnu funkciu
 // mixin vie citat data s komponentu do ktoreho je importovany
}

    import tableMixin from '../mixins/tableMixin' //import mixin do komponentu
</script>



<!-- 

    www.cdnjs.com 

-->
<tamplate>
    <input class="input" v-model="searchQuery" />
</tamplate>
<script>
export default {
    data() {
        return {
            searchQuery: '',
        }
    },
// Dolezite je nazvat si funkciu rovnako ako hodnotu ktoru chcem sledovat
    watch:{ // Watch caka na zmenu, ked sa nieco zmeni, spusti kod
       searchQuery( value ){  
         console.log( value );
       }
    }

};




</script>
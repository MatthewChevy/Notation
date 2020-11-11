<template> 
 <!-- -->   
    <div id='wrap'> Vsekto musi byt obalene vjednom elemente

        <div v-if='javascrpit'></div>

        <div :title = 'javascript'> Ked pouzijem : pred atribut tak obsah atributu moze byt javascript, PROPS </div>
        <div v-bind:class='javascrpit'> v-bind:class == :class </div>
        <div :style="{ width: value + '%' }"> Do style musi byt vlozeny objekt </div>
        
        <div @click.alt.shift="value++"> Po kliknuti alt + shift, Modifikator </div>
        <div @click.once="value++"> Iba jeden klik, Modifikator </div>

        <input v-model='value'> Do premennej value ulozi text z inputu
        <input ref='inputRef'> Hodnota 123 //Sluzi na selektnutie elementu z HTML [ ref() ]
        <form @submit.prevent> Zamedzni defaultnej akcii </form>

        <!-- EMIT : Child to Parent --> 

        <form @submit.prevent = "$emit('nazov-eventu', data )">
            V prvom arugmente zadam vlastny 'nazov-eventu' podla ktoreho ho budem odchytavat v rodicovi.
            V druhom agumente budu tie samotne data co budem posielat
        </form>

        <komponent-v-html  @nazov-eventu="character.push( $event )" >
           Poslane data ulozi do premennej $event
        </komponent-v-html>

        <!-- EMIT : Child to Parent --> 



    </div>



</template>

<style lang="sass" scoped> //scoped: CSS budu privatne len pre tento komponent
</style>

<script>
export default {
    props: [  // Ked chcem do komponentu dostat data z vonku kodu
              // Parent to child
        'title', 'name'
    ],

    data(){  // Hodnoty musia byt vratene ako vysledok funkcie ako pri Vue.component()
        return{
            guitar: 10,
        }
    },
    methods: {
        howManyGuitar(){
            return this.guitar //K hodnote guitar pristupujem this.guitar
        },
        ref(){
            console.log( this.inputRef.value ); // Hodnota 123
        }
    },
    
}
</script>



<!-- 

 www.cdnjs.com 

    Odborne terminy

    Virtual DOM - Virtualny DOM strom si drzi v RAM-ke, ked pride zmena porovna 
                  ju s kodom v RAM a novym a zmeni iba ten element ktory je iny
                  nie cely HTML

-->
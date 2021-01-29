

<template>
   <div>

      <!-- 1 Commitnem mutaciu, akoby zavolam funkciu -->
      <button @click="$store.commit('INCREMENT')">+ plus </button>

        <!-- 2 Prednastavena hodnota na 1 ale zadam inu ta bude platit ( payload ) -->
      <button @click="$store.commit('DECREMENT', 10)">- minus </button>

      <!-- 3 Actions halabala musim dispach zo $store   -->
      <button @click="$store.dispach('halabala')">- minus </button>

      <!-- Hodnota vypisana zo state -->
      <h1> {{ $store.state.score }}</h1>

      <!-- Ked pouzijem getter, hodnotu vypisem takto -->
      <h1> {{ $store.getters.NameOfGetter }}</h1> 

   </div>
<!-- -->
</template>

<script>

  //Facebook vymyslel flux princip a na zaklade toho vznikli realne kniznice redux / vuex

  //Data nemozem menit priamo, musim commitnut mutaciu
  //Data su v sklade a komponenty si ich budu pytat zo skladu

  import { createStore } from "vuex";

  export default createStore({


    state: {  //State je stav aplikacie, v akom je stave
      score: 15 
    },


    mutations: {  //Mutacie su funkcie ktore menia hodnotu premennej, udalosti
                  //Mal by to byt iba jeden riadok, vasciu matematiku do action

          INCREMENT(state){  // 1 Vo flux fw je zvyk pisat mutacie velkym pismenom
              state.score++
          }, 

          DECREMENT(state, value = 1){ // 2 Kazdej mutacii vuex preposle stav apky ( state )
              state.score += value
          }
    }, 

    actions: {

      halabala( context ){
         let random = Math.floor( Math.random() * 100) // nahodne cislo 0-100

          if( random < 15) console.log('malo je') // ak je cislo menej ako 15
          else contex.commit('INCREMENT', random) //Ak je viac ako 15
          
          // 3 commitem zmenu na mutaciu INCREMENT, napisem to co by som napisal
          // do html pri mutacii len namesto $store bude context
      }
    
    },

    getters: { // gettery maju pristup k state a aj k ostatnym getterom ked treba
        NameOfGetter( state ) {
            return state.score > 100 ? 'o_0 ${state.score} 0_o' : state.score
      }
    }
  });
</script>

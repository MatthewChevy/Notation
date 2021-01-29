import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";  // Na immport mozem pouzit dva zapisy
/*const home = () => import("../views/Home.vue"); alebo tento */

Vue.use(VueRouter);

const routes = [

  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import( /*webpackChunkName: "about" */ "../views/About.vue")
  },

  /*  LAZY LOADING
  
        !!! Pouzivat ked stranka zacne byt velka, zacne mat performace problemy !!!
        
        Import je funkcia webpacku ktora vracia promise. 
        Vue vie dynamicky nacitavat komponenty ak vyrobim funkciu ktora spracuje promise ( to co je v importe)
        Vo vysledku to znamena ze sa podstranka nacita len v tedy ked na nu kliknem
        Chunks : Ked rozbijem velky kod na male casti, tie casti sa volaju chunks
        webpackChunkName: Poviem webpacku ako sa ten chunk ma volat

  */

    {
      path: '/admin/posts',
      component: Posts
    },

    { //https://router.vuejs.org/guide/essentials/dynamic-matching.html#reacting-to-params-changes
      
      //Pridanim :id vytvorim dynamicku cestu, 
      //mozem tam poslat hociake cislo a zobrazi sa spravna podstranka

      path: '/admin/posts/:id',
      component: PostSingle
    },



];

const router = new VueRouter({
  routes
});

export default router;
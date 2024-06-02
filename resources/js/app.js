/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default ;

import Vuetify from '../plugins/vuetify' ;
import VueRouter from 'vue-router';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import LogIn from './components/LogIn';
import Registration from './components/Registration';
import ChatRoom from './components/ChatRoom';
import ResetPassword from './components/ResetPassword';
import ShoppingList from './components/ShoppingList';
import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel);

// import 

// import Home from './components/Home'
// import ContactUs from './components/contactUs'

Vue.use(VueRouter)
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('App', require('./components/App.vue').default);
// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
// Vue.component('Home', require('./components/Home.vue').default); 


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/contactUs',
            name: 'contactUs',
            component: ContactUs
        },
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/LogIn',
            name: 'LogIn',
            component: LogIn,
        },
        {
            path: '/Registration',
            name: 'Registration',
            component: Registration
        },
        {
            path: '/ChatRoom',
            name: 'ChatRoom',
            component: ChatRoom
        },
        {
            path: '/ResetPassword',
            name: 'ResetPassword',
            component: ResetPassword
        },
        {
            path:'/ShoppingList',
            name: 'ShoppingList',
            component: ShoppingList
        }
    ],
});


const app = new Vue({
    el: '#app',
    vuetify: Vuetify,
    router
});

import Vue from 'vue';
import router from 'vue-router';
import Home from '../components/Home';
import RSVP from '../components/RSVP';
import Pictures from '../components/Pictures';
import Contact from '../components/Contact';

Vue.use(router);

export default new router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/pictures',
            name: 'Pictures',
            component: Pictures
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact
        },
    ],
    mode: 'history',
});

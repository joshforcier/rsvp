import Vue from 'vue';
import router from 'vue-router';
import HomePage from '@/components/HomePage';
import Pictures from '@/components/Pictures';
import Contact from '@/components/Contact';

Vue.use(router);

export default new router({
    router: [
        {
            path: '/',
            name: 'HomePage',
            component: HomePage
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
});

import Vue from "vue";
import router from "vue-router";
import Home from "../components/Home";
import RSVP from "../components/RSVP";
import Pictures from "../components/Pictures";
import Contact from "../components/Contact";
import Directions from "../components/Directions";
import Registry from "../components/Registry";
import Schedule from "../components/Schedule";
import Hotel from "../components/Hotel";

Vue.use(router);

export default new router({
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/RSVP",
            name: "RSVP",
            component: RSVP
        },
        {
            path: "/schedule",
            name: "Schedule",
            component: Schedule
        },
        {
            path: "/directions",
            name: "Directions",
            component: Directions
        },
        {
            path: "/hotel",
            name: "Hotel",
            component: Hotel
        },
        {
            path: "/registry",
            name: "Registry",
            component: Registry
        },
        {
            path: "/pictures",
            name: "Pictures",
            component: Pictures
        },
        {
            path: "/contact",
            name: "Contact",
            component: Contact
        },
    ],
    mode: "history",
});

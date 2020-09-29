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
import Story from "../components/Story";
import Results from "../components/Results";
import Vows from "../components/Vows";
import Video from "../components/Video";

Vue.use(router);

export default new router({
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/Vows",
            name: "Vows",
            component: Vows
        },
        {
            path: "/Video",
            name: "Video",
            component: Video
        },
        {
            path: "/pictures",
            name: "Pictures",
            component: Pictures
        },
    ],
    mode: "history",
});

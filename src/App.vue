<template>
    <div id="app">
        <Navbar />
        <Footer />
    </div>
</template>

<script>

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import RSVP from "./components/RSVP";
import Contact from "./components/Contact";
import Pictures from "./components/Pictures";
import Directions from "./components/Directions";
import Registry from "./components/Registry";
import Footer from "./components/Footer";

export default {
    name: "app",
    created () {
        document.title = "Josh & Kaylyn";
    },
    components: {
        Home,
        Navbar,
        RSVP,
        Contact,
        Pictures,
        Directions,
        Registry,
        Footer,
    },
}

</script>

<style lang="css">

@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
@import url('https://fonts.googleapis.com/css?family=Poiret+One&display=swap');

h1 {
    font-size: 1.5em;
}

html, body {
    font-family: 'Poiret One';
}

</style>

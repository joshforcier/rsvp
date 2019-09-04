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
import Schedule from "./components/Schedule";
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
        Schedule,
        Footer,
    },
}

</script>

<style lang="css">

@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
@import url('https://fonts.googleapis.com/css?family=Poiret+One&display=swap');

h1 {
    font-size: 1.5rem;
    padding-top: 1rem;
}

h2 {
    font-size: 1.5rem;
}

h3 {
    font-size: 1.2rem;
}

html, body {
    font-family: 'Poiret One';
    font-size: 1.1rem;
}

body {
    background-image: url('./assets/green_background.jpg');
    background-position: 0 200px;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
}

.content {
    min-height: calc(100vh - 150px);
}

.text_align_left {
    display: inline-block;
    text-align: left;
}

.text_align_center {
    text-align: center;
}

.card-header {
    padding: 0.25rem;
}

</style>

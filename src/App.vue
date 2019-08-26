<template>
    <div id="app">
        <Navbar />
  </div>
</template>

<script>

import Home from './components/Home';
import Navbar from './components/Navbar';
import RSVP from './components/RSVP';
import Contact from './components/Contact';
import Pictures from './components/Pictures';

export default {
    name: 'app',
    created () {
        document.title = "Josh & Kaylyn";
    },
    components: {
        Home,
        Navbar,
        RSVP,
        Contact,
        Pictures,
    },
}

</script>

<style lang="css">

@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

</style>

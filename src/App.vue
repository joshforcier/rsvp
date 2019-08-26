<template>
    <div id="app">
        <Navbar />
  </div>
</template>

<script>

import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Contact from './components/Contact';
import Pictures from './components/Pictures';

export default {
    name: 'app',
    created () {
        document.title = "Josh & Kaylyn";
    },
    components: {
        Navbar,
        HomePage,
        Contact,
        Pictures,
    },
}

</script>

<style lang="css">

@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

</style>

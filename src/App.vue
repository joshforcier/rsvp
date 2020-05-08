<template>
    <div id="app">
        <Navbar />
        <Footer />
    </div>
</template>

<script>

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default {
    name: "app",
    components: {
        Navbar,
        Footer,
    },
}

</script>

<style lang="css">

@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

h1 {
    font-size: 1.5rem;
    padding-top: 1rem;
    font-family: "Poiret One";
    font-weight: bold;
}

h2 {
    font-size: 1.1rem;
}

h3 {
    font-size: 1.1rem;
}

html, body {
    font-size: 1.1rem;
}

body {
    background-color: #f8f9fa;
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

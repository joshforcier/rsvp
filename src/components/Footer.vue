<template>
    <footer>
        <p class="text-center footer">
            <!-- <a href="https://github.com/joshforcier/rsvp">
                <small>Made by Josh Forcier with Vue.js</small>
            </a> -->
        </p>
    </footer>
</template>

<script>

export default {
    name: "Footer",
}

</script>

<style>

footer img {
    position: fixed;
    bottom: 0;
    z-index: -1;
    opacity: 0.6;
}

.footer {
    margin-bottom: -10%;
}

small {
    color: black;
}

</style>

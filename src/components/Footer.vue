<template>
    <footer>
        <p class="text-center footer">
            <a href="https://github.com/joshforcier/rsvp">
                <small>Made by Josh Forcier with Vue.js</small>
            </a>
        </p>
    </footer>
</template>

<script>

export default {
    name: "Footer",
}

</script>

<style>

footer {
    padding: 6rem 0 4rem 0;
    background-image: url("../assets/icons/footer.svg");
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
}
.footer {
    margin-bottom: -10%;
}

small {
    color: black;
}

</style>

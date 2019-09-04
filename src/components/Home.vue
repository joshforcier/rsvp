<template>
    <div class="content">
        <div :class="$style.container">
            <img 
                src="../assets/pexels-photo-1563355.jpeg"
                alt="engagement-photo"
                style="width:100%;"
            >
            <h2 
                :class="$style.were_getting_married"
            >
                WE'RE<br/>GETTING<br/>MARRIED!
            </h2>

        </div>
        <div class="ml-3">
            <div class="mt-3">HOW WE MET</div>
            <div class="date">June 2015</div>

            <div class="mt-3">THE PROPOSAL</div>
            <div class="date">May 2019</div>
        </div>
    </div>
</template>

<script>

import RSVP from "./RSVP";
import Navbar from "./Navbar";
export default {
    name: "Home",
    components: {
        RSVP,
    },
}

</script>

<style module>

.container {
    position: relative;
    text-align: center;
    color: white;
}

.were_getting_married {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2rem;
    letter-spacing: 0.3rem;
}

</style>

<style scoped>

.date {
    font-weight: bold;
    font-size: 0.9em;
}

</style>

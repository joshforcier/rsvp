<template>
    <div class="content">
        <div
            :class="$style.container"
        >
            <img 
                src="/static/images/ImageID_36493067.jpg"
                alt="engagement-photo"
                style="width:100%;"
            >
            <h2 
                :class="$style.were_getting_married"
            >
                WE'RE<br/>GETTING<br/>MARRIED!
            </h2>
        </div>
        <div class="ml-3 text right">
            <div class="mt-3">#JoshAndKaylyn</div>
            <div class="mt-3">September 19, 2020</div>
            <div class="mt-3">Janesville, WI</div>
        </div>
        <hr />
        <div class="ml-3 text">
            <div class="mt-3">HOW WE MET</div>
            <div class="date">June 2015</div>

            <div class="mt-3">THE PROPOSAL</div>
            <div class="date">May 2019</div>
        </div>
        <hr />
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

@import url("https://fonts.googleapis.com/css?family=Poiret+One&display=swap");

.container {
    position: relative;
    text-align: center;
    color: white;
}

.were_getting_married {
    font-family: "Poiret One";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2rem;
    letter-spacing: 0.3rem;
}

@media screen and (min-width: 1024px) {
    .were_getting_married {
        font-size: 4rem;
    }
}

</style>

<style scoped>

.content {
    font-family: "Poiret One";
}

.date {
    font-weight: bold;
    font-size: 0.9em;
}

hr {
    border: none;
    width: 90%;
    background-color: #333;
    opacity: 0.5;
    height: 1px;
}

.right {
    text-align: right;
    margin-right: 1rem;
}

.text {
    font-size: 1.5rem;
}

img {
    margin-top: 0px;
}

</style>

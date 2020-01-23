<template>
    <div class="content home">
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
        <!-- <div class="ml-3 text right">
            <div class="mt-3">#JoshAndKaylyn</div>
            <div class="mt-3">September 19, 2020</div>
            <div class="mt-3">Janesville, WI</div>
        </div> -->
        <div class="homeCards">
            <div class="homeCard">
                <div class="home__card">
                    <span class="home__icons">
                        <img src="../assets/icons/met.svg" alt="">
                    </span>
                    <div class="home__info">
                        <div class="cardTitle">HOW WE MET</div>
                        <div class="">June 2015</div>
                    </div>
                </div>
            </div>
            <div class="homeCard">
                <div class="home__card">
                    <span class="home__icons">
                        <img src="../assets/icons/proposal.svg" alt="">
                    </span>
                    <div class="home__info">
                        <div class="cardTitle">THE PROPOSAL</div>
                        <div class="">May 2019</div>
                    </div>
                </div>
            </div>
            <div class="homeCard">
                <div class="home__card">
                    <span class="home__icons">
                        <img src="../assets/icons/ring.svg" alt="">
                    </span>
                    <div class="home__info">
                        <div class="cardTitle">THE MARRIAGE</div>
                        <div class="">September 2019</div>
                    </div>
                </div>
            </div>
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

@import url("https://fonts.googleapis.com/css?family=Poiret+One&display=swap");

.container {
    position: relative;
    text-align: center;
    color: white;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.09);
}

.were_getting_married {
    font-family: "Poiret One";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2rem;
    letter-spacing: 0.3rem;
    text-shadow: 0 0 25px hsla(0, 0%, 0%, 1);
}

@media screen and (min-width: 1024px) {
    .were_getting_married {
        font-size: 4rem;
    }
}

</style>

<style scoped>

@media screen and (min-width: 1024px) {
    .home {
        /* width: 75%; */
        margin: auto;
    }
}

@media screen and (max-width: 1024px) {
    .content {
        margin-bottom: -20%;
    }
}
.content {
    font-family: "Poiret One";
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

.homeCards {
    display: grid;
    margin-top: 5%;
}

@media screen and (min-width: 1024px) {
    .homeCards {
        grid-template-columns: 1fr 1fr 1fr;
    }
}

.homeCard {
    display: grid;
    /* grid-template-columns: 1fr 1fr; */
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.09);
    border-radius: 10px;
    padding: 10px;
    width: 300px;
    margin: 10px auto;
    background-color: white;
}

.home__card {
    display: flex;
}

.home__icons {
    display: flex;
}

.home__icons img {
    width: 50%;
    margin: auto;
}

.home__info {
    width: 100%;
    white-space: nowrap;
    margin: auto;
}

.cardTitle {
    color: #03449E;
}

</style>

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
        <div class="homeCards">
            <div class="homeCard">
                <div class="home__card">
                    <!-- <span class="home__icons">
                        <img src="../assets/icons/met.svg" alt="">
                    </span> -->
                    <div class="home__info">
                        <div class="cardTitle">HOW WE MET</div>
                        <div class="cardTitle">June 2015</div>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>
                </div>
            </div>
            <div class="homeCard">
                <div class="home__card">
                    <!-- <span class="home__icons">
                        <img src="../assets/icons/proposal.svg" alt="">
                    </span> -->
                    <div class="home__info">
                        <div class="cardTitle">THE PROPOSAL</div>
                        <div class="cardTitle">May 2019</div>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="homeCard">
                <router-link :to="{ name: 'Story', params: { title: marriageTitle, story: marriage } }">
                    <div class="home__card">
                        <span class="home__icons">
                            <img src="../assets/icons/ring.svg" alt="">
                        </span>
                        <div class="home__info">
                            <div class="cardTitle">THE MARRIAGE</div>
                            <div class="">September 2019</div>
                        </div>
                    </div>
                </router-link>
            </div> -->
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
    margin-top: 5%;
}

.homeCard {
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.09);
    border-radius: 10px;
    padding: 10px;
    width: 90%;
    margin: 10px auto;
    background-color: white;
}

.home__card {
    display: flex;
}

.home__info {
    width: 100%;
    /* white-space: nowrap; */
    margin: auto;
}

.cardTitle {
    color: #7EA2A1;
}

a {
    color: black;
}

</style>

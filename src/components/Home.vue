<template>
    <div class="content home">
        <div
                :class="$style.container"
        >
            <carousel
                :autoplay="true"
                :autoplayTimeout="4000"
                :autoplayHoverPause="false"
                :perPage="1"
                :loop="true"
                :speed="1000"
                :paginationPadding="5"
            >
                <slide>
                    <img
                        src="/static/TO1_2911-min.jpg"
                        alt="1"
                    >
                </slide>
                <slide>
                    <img
                        src="/static/TO1_2911-min.jpg"
                        alt="2"
                    >
                </slide>
                <slide>
                    <img
                        src="/static/TO1_2911-min.jpg"
                        alt="3"
                    >
                </slide>
            </carousel>
            <h2
                :class="$style.were_getting_married"
            >
                MR AND MRS<br />FORCIER
            </h2>
        </div>
        <div class="homeCards">
            <div class="homeCard">
                <div class="home__card">
                    <div class="home__info">
                        <div class="cardTitle">HOW WE MET</div>
                        <div class="cardTitle">June 2015</div>
                        <p class="story">
                            In the summer of 2015, Josh and I met briefly at a training course for work. We barely interacted, 
                            just quick introductions between two different groups working for the same company. Crazy enough, 
                            later that same week, we were introduced officially through a mutual friend during a night out in Uptown. 
                            Over the next few years, the two of us hung out in the same circles and developed a friendship. One night, 
                            in December 2016, we found ourselves sitting in the corner, away from all of our friends just talking. 
                            We were up until the sun came up just talking about anything and everything. Not surprising if you know me, 
                            but definitely not like Josh to do. ☺️ After that we had multiple fun, awkward hang outs, trying to navigate 
                            turning our friendship into a relationship. On February 14, 2017 we had our first official date. It was amazing. 
                            We went to The Lowry in Uptown because I wanted French fries. I ordered fish tacos instead and was too nervous 
                            to eat some of Josh’s fries when he offered. I slipped and fell, hit the ground  and everyone in the restaurant 
                            saw, including Josh. It was pretty cool. Josh was amazing and didn’t laugh. Just asked if I was okay and didn’t 
                            bring it up again. Now it’s something he brings up whenever he has the chance. After that night we were basically 
                            inseparable. We had a weekly Friday night routine of walking from Josh’s place in Uptown to Libertine to have 
                            our favorite drink, the Uno Mas, and watch these ridiculously stupid, silent foreign street fighting movies 
                            the bar played. We never understood why they played them but we loved it.
                        </p>
                        <p class="story">
                            Over the weeks we made so many plans together. We both were so happy and excited to be together, and to go out 
                            and experience things together. We made plans for Cinco de Mayo (our favorite holiday), 4th of July, plans to 
                            go to the Tomper, bought concert tickets, discussed trips to Arizona. Our calendars were filling up and we couldn’t 
                            wait to do everything together.
                        </p>
                        <p class="story">
                            Then in June of 2017, we found out we were unexpectedly pregnant. All of our plans changed so quickly. Rather than concerts, 
                            festivals and camping trips, it was morning sickness, binge watching the ENTIRE first 6 seasons of Game of Thrones and 
                            preparing to become parents. To say that I was scared would be an understatement. To say that all of my fear was put to 
                            ease by Josh, would not. We learned quickly that all of the plans we made that we thought would be the best experience of 
                            our lives, could never have brought us the love, friendship, closeness and growth that we received from our pregnancy. 
                            A year after our first date, we welcomed the greatest gift we could give each other, Jackson Joshua. He was (is) perfect. 
                            Things changed quickly for Josh and me again. Adjusting to a newborn is exactly what you’d think and not what you’d think 
                            at all at the same time. One thing that stayed constant was Josh and I growing together. One night, after a long stretch 
                            of newborn chaos, and one of those first post-pregnancy glasses of wine, Josh and I decided we were going to take some 
                            time for the two of us. On a whim we put down a non-refundable deposit for an all inclusive trip to Barbados for the 
                            following year. We joked in the days after that we couldn’t believe we were actually going through with it. We had a 
                            little over a year to plan the trip and prepare for leaving Jack for an entire week. That was a roller coaster of emotions, 
                            let me tell you.
                        </p>
                    </div>
                </div>
            </div>
            <div class="homeCard">
                <div class="home__card">
                    <div class="home__info">
                        <div class="cardTitle">THE PROPOSAL</div>
                        <div class="cardTitle">May 2019</div>
                        <p class="story">
                            In May 2019, our trip to Barbados had finally arrived and WE WERE READY. In the previous year we had a baby, 
                            Josh changed jobs twice and we bought a house. We were tired and happy and excited for our first trip. 
                            The first few days were normal....exploring the resort, planning out our week and drinking just the right 
                            amount of frozen rum drinks. Josh lost his voice the first day. No idea why but it was completely gone. 
                            Like, we had to whisper talk or Josh had to type into his phone what he wanted to say, gone. It was funnier 
                            to me than it was to Josh. The third day there we went on an awesome expedition on a pirate ship. We swam 
                            with sea turtles, walked the plank and saw Rihanna’s Barbados home. We went to a nice beachside dinner 
                            and afterward we went to the rooftop bar that overlooked the ocean and the small towns of Barbados. We 
                            were laughing and taking pictures in a little corner away from everyone. I was standing in front of Josh 
                            watching the ocean waves roll in. He said something silly to me and when I turned around he was down on 
                            one knee! I was so shocked. It was perfect. I said yes and we both laughed and cried. I literally could 
                            not believe it. When we got back, literally everyone said they thought we might get engaged on our trip 
                            but it hadn’t  crossed my mind. We had so much going on in our lives and everything was so perfect, 
                            I always thought that marriage would be a different kind of priority for us. I found out that Josh’s 
                            original plan was to propose our first night there, but after losing his voice he had to postpone it. 
                            I also found out that he was carrying the ring around in his pocket that whole time. A LOOSEY DIAMOND RING
                            in his pocket for days! Hahaha it still gives me anxiety to this day. But the proposal was perfect and 
                            the rest of our trip was so special, celebrating our new engagement just the two of us in paradise.
                        </p>
                        <p class="story">
                            We can not wait to start the next chapter of our lives together and we are so excited to be able to celebrate
                            our special day with you! September 19 can not come soon enough!
                        </p>
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
}

.were_getting_married {
    font-family: "Poiret One";
    color: white;
    position: absolute;
    transform: translate(10%, -400%);
    font-size: 1rem;
    letter-spacing: 0.3rem;
    text-shadow: 0 0 25px hsla(0, 0%, 0%, 1);
}

@media screen and (min-width: 767px) {
    .were_getting_married {
        font-size: 2rem;
        transform: translate(25%, -350%);
    }
}

@media screen and (min-width: 1025px) {
    .were_getting_married {
        font-size: 4rem;
        transform: translate(50%, -350%);
    }
}

</style>

<style scoped>

.content {
    font-family: "Poiret One";
}

.home img {
    width: 100%;
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

.homeCard {
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.09);
    border-radius: 3px;
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
    margin: auto;
}

.cardTitle {
    color: #7EA2A1;
    font-weight: bold;
}

a {
    color: black;
}

@media screen and (min-width: 1024px) {
    .home {
        margin: auto;
    }
    .homeCard {
        width: 60%;
    }
}

@media screen and (max-width: 1024px) {
    .content {
        margin-bottom: -20%;
    }
}

.story {
    text-indent: 20px;
}

</style>

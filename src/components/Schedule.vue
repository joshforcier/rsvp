<template>
    <div class="content container">
        <h1 class="text_align_center">Schedule</h1>
        <div class="schedule">
            <!-- <div class="text_align_left mt-3 event">
                <span class="icons">
                    <img src="../assets/icons/drinks.svg" alt="">
                </span>
                <div class="info">
                    <H3 class="title">WELCOME DRINKS</H3>
                    <div class="date">Friday, September 18, 2020</div>
                    <div class="time">8:00pm</div>
                </div>
            </div> -->

            <div class="text_align_left mt-3 event">
                <!-- <span class="icons">
                    <img src="../assets/icons/wedding-couple.svg" alt="">
                </span> -->
                <div class="info">
                    <H3 class="title">CEREMONY</H3>
                    <div class="date">Saturday, September 19, 2020</div>
                    <div class="time">3:00pm</div>
                </div>
            </div>

            <div class="text_align_left mt-3 event">
                <!-- <span class="icons">
                    <img src="../assets/icons/registry-office.svg" alt="">
                </span> -->
                <div class="info">
                    <H3 class="title">RECEPTION</H3>
                    <div class="date">Saturday, September 19, 2020</div>
                    <div class="time">5:00pm - 1:00am</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "Schedule",
}

</script>

<style>

.event {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 260px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.09);
    border-radius: 3px;
    padding: 20px;
    font-size: 0.9rem;
    background-color: white;
    margin: auto;
    font-family: "Poiret One";
}

@media screen and (min-width: 1024px) {
    .event {
        width: 420px;
    }
}

.info {
    width: 260px;
}

.title {
    color: #7EA2A1;
}

.time {
    color: grey;
}

.icons img {
    width: 100%;
        fill: #7EA2A1;
}

.icons {
    display: flex;
    justify-content: center;
    width: 75%;

}

</style>
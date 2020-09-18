<template>
    <div class="content text_align_center">
        <div class="mx-3">
            <h1 class="text_align_center">Directions</h1>
            <div class="shuttle">Ignore the road closed signs and trust your GPS.</div>
            <div class="dir-container">
                <!-- <div class="text_align_left mt-3 directions">
                    <div class="dir-text">
                        <span class="icons">
                            <img src="../assets/icons/drinks.svg" alt="">
                        </span>
                        <div class="dir-info">
                            <h3 class="dir-title">WELCOME DRINKS</h3>
                            <div class="street">5010 N Buckskin Drive</div>
                            <div class="city">Janesville, WI 53546</div>
                        </div> 
                    </div>
                    <div class="maps-link">
                        <img
                            class="map_img mt-1"
                            @click="mapsSelector('5010+n+buckskin+drive,+janesville+wi')"
                            src="../assets/mask-group-2.png"
                        />
                    </div>
                </div> -->

                <div class="text_align_left mt-3 directions">
                    <div class="dir-text">
                        <!-- <span class="icons">
                            <img src="../assets/icons/registry-office.svg" alt="">
                        </span> -->
                        <div class="dir-info">
                            <h3 class="dir-title">CEREMONY/RECEPTION</h3>
                            <div class="street">2757 W Deer Path Trail</div>
                            <div class="city">Janesville, WI 53545</div>
                        </div>
                    </div>
                    <div class="maps-link">
                        <img
                            class="map_img mt-1"
                            @click="mapsSelector('2757+w+deer+path+trail,+janesville+wi')"
                            src="../assets/mask-group-3.png"
                        />
                    </div>
                </div>

                <div class="text_align_left mt-3 directions">
                    <div class="dir-text">
                        <!-- <span class="icons">
                            <img src="../assets/icons/hotel.svg" alt="">
                        </span> -->
                        <div class="dir-info">
                            <h3 class="dir-title">HOTEL</h3>
                            <div class="street">2706 Pontiac Place</div>
                            <div class="city">Janesville, WI 53545</div>
                        </div>
                    </div>
                    <div class="maps-link">
                        <img
                            class="map_img mt-1"
                            @click="mapsSelector('2706+pontiac+place,+janesville+wi')"
                            src="../assets/mask-group-4.png"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "Directions",
    methods: {
        mapsSelector(location) {
            // if we're on iOS, open in Apple Maps
            if ((navigator.platform.indexOf("iPhone") != -1) ||
                (navigator.platform.indexOf("iPod") != -1) ||
                (navigator.platform.indexOf("iPad") != -1)) {
                window.open("maps://maps.google.com/maps?daddr=" + location + "&amp;ll=");
            // else use Google
            } else {
                window.open("https://maps.google.com/maps?daddr=" + location + "&amp;ll=");
            }
        },
    },
}

</script>

<style>

@media screen and (min-width: 1024px) {
    .dir-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        max-width: 50%;
        margin: auto;
    }

    .directions {
        width: 50%;
        margin: auto;
    }
}

.dir-info {
    font-size: 0.9rem;
    white-space: nowrap;
}

.dir-info h3 {
    font-size: 0.9rem;
}

.map_img {
    width: 100%;
    max-height: 200px;
    cursor: pointer;
    border-radius: 3px;
}

.maps-link {
    margin-top: 10px;
}

.directions {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.09);
    border-radius: 3px;
    padding: 20px;
    background-color: white;
    font-family: "Poiret One";
}

.dir-text {
    display: flex;
    align-items: center;
    justify-content: center;
}

.icons img {
    width: 90%;
}

.dir-title {
    color: #7EA2A1;
    text-align: center;
}

.shuttle {
    font-style: italic;
    color: red;
    font-family: "Poiret One";
}
</style>

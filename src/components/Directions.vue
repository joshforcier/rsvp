<template>
    <div class="content text_align_center">
        <div class="mx-3">
            <h1 class="text_align_center">DIRECTIONS</h1><br/>
            <div class="container">
                <div>
                    <h3>WELCOME DRINKS</h3>
                    <div class="text-center">
                        5010 N Buckskin Drive<br/>
                        Janesville, WI 53546<br/><br/>

                    </div>
                    <div class="text-center maps-link">
                        <img
                            class="map_img mt-1"
                            @click="mapsSelector('2757+w+deer+path+trail,+janesville+wi')"
                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/747/maps-icon.png"
                        />
                    </div>
                </div>

                <div class="item">
                    <h3>CEREMONY/RECEPTION</h3>
                    <div class="text-center">
                        2757 W Deer Path Trail<br/>
                        Janesville, WI 53545<br/><br/>
                    </div>
                    <div class="text-center maps-link">
                        <img
                            class="map_img mt-1"
                            @click="mapsSelector('2757+w+deer+path+trail,+janesville+wi')"
                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/747/maps-icon.png"
                        />
                    </div>
                </div>

                <div>
                    <h3 class="mt-5">HOTEL</h3>
                    <div class="text-center">
                        TownePlace Suites<br/>
                        2706 Pontiac Place<br/>
                        Janesville, WI 53545
                    </div>
                    <div class="text-center maps-link">
                        <img
                            class="map_img mt-1"
                            @click="mapsSelector('2706+pontiac+place,+janesville+wi')"
                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/747/maps-icon.png"
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
    .container {
        column-count: 3;
    }

    .item {
        display: inline-block;
    }
}

.map_img {
    max-width: 150px;
    cursor: pointer;
    margin-bottom: 10%;
}

</style>

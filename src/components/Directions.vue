<template>
    <div>
        <div class="mx-3">
            <h1>Directions</h1>
            <div class="text-left">
                2757 W Deer Path Trail<br/>
                Janesville, WI 53545
            </div>
            <div class="text-center maps-link">
                <img
                    class="map_img mt-5"
                    @click="mapsSelector()"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/747/maps-icon.png"
                />
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "Directions",
    methods: {
        mapsSelector() {
            // if we're on iOS, open in Apple Maps
            if ((navigator.platform.indexOf("iPhone") != -1) ||
                (navigator.platform.indexOf("iPod") != -1) ||
                (navigator.platform.indexOf("iPad") != -1)) {
                window.open("maps://maps.google.com/maps?daddr=2757+w+deer+path+trail,+janesville+wi&amp;ll=");
            // else use Google
            } else {
                window.open("https://maps.google.com/maps?daddr=2757+w+deer+path+trail,+janesville+wi&amp;ll=");
            }
        },
    },
}

</script>

<style>

.map_img {
    max-width: 150px;
    cursor: pointer;
}

</style>

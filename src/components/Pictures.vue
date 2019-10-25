<template>
    <div class="content">
        <div class="mx-3">
            <h1 class="text_align_center">PICTURES</h1>
        </div>
        <gallery :images="images" :index="index" @close="index = null"></gallery>
        <div
            class="image"
            v-for="(image, imageIndex) in images"
            :key="imageIndex"
            @click="index = imageIndex"
            :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
        />
    </div>
</template>

<script>

import VueGallery from "vue-gallery";

export default {
    name: "Pictures",
    data: function () {
        return {
            images: [
                "../assets/00100sPORTRAIT_00100_BURST20190408194425664_COVER.jpg",
                "../assets/00100sPORTRAIT_00100_BURST20190504212244218_COVER.jpg",
                "../assets/ImageID_36493066.jpg",
                "../assets/ImageID_36493068.jpg",
            ],
            index: null,
        };
    },

    components: {
        "gallery": VueGallery,
    },
}

</script>

<style>

.image {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px auto;
}

</style>
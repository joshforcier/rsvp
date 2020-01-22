<template>
    <div class="content">
        <div class="mx-3">
            <h1 class="text_align_center">Our Pictures</h1>
        </div>
        <div class="images">
            <gallery :images="images" :index="index" @close="index = null"></gallery>
            <div
                class="image"
                v-for="(image, imageIndex) in images"
                :key="imageIndex"
                @click="index = imageIndex"
                :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px', }"
            />
        </div>
    </div>
</template>

<script>

import VueGallery from "vue-gallery";

export default {
    name: "Pictures",
    data: function () {
        return {
            images: [
                '/static/images/DSC_9950-min.jpg',
                '/static/images/ImageID_36493066.jpg',
                '/static/images/ImageID_36493068.jpg',
                '/static/images/00100sPORTRAIT_00100_BURST20190408194425664_COVER.jpg',
                '/static/images/00100sPORTRAIT_00100_BURST20190504212244218_COVER.jpg',
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
    background-position: center top;
    border: 1px solid #ebebeb;
    margin: 10px auto;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.09);
}

@media screen and (min-width: 1024px) {
    .images {
        display: flex;
        width: 75%;
        margin: auto;
    }
    .image {
        margin: 10px;
    }
}

.close {
    color: white !important;
}


</style>
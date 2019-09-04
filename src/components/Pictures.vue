<template>
    <div>
        <div class="mx-3">
            <h1>Pictures</h1>
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

import VueGallery from 'vue-gallery';

export default {
    name: "Pictures",
    data: function () {
        return {
            images: [
                'https://dummyimage.com/800/ffffff/000000',
                'https://dummyimage.com/1600/ffffff/000000',
                'https://dummyimage.com/1280/000000/ffffff',
                'https://dummyimage.com/400/000000/ffffff',
            ],
            index: null,
        };
    },

    components: {
        'gallery': VueGallery,
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
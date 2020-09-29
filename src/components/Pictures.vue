<template>
    <div class="">
        <div class="">
            <h1 class="text_align_center">Gallery</h1>
        </div>
        <vue-easy-lightbox
            :visible="visible"
            :imgs="sortedImages"
            :index="index"
            @hide="handleHide()"
        />
    </div>
</template>

<script>

export default {
    name: "Pictures",
    components: {
        VueEasyLightbox
    },
    data: function () {
        return {
            images: [],
            index: 0,
            visible: false,
        };
    },
    methods: {
        importAll(r) {
            r.keys().forEach(key => (
                this.images.push({
                    src: r(key),
                    thumbnail: r(key),
                })
            ));
        },
        handleHide() {
            this.visible = false;
        },
        show() {
            this.visible = true;
        },
    },
    computed: {
        sortedImages() {
            const data = this.images;
            for (let i = data.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                let temp = data[i];
                data[i] = data[j];
                data[j] = temp;
            }

            return data;
        },
    },
    mounted() {
        this.importAll(require.context('../../static/images/', true, /\.jpg$/));
    },
}

</script>

<style>



</style>

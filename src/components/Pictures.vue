<template>
    <div class="content">
        <div class="mx-3">
            <h1 class="text_align_center">Our Pictures</h1>
        </div>
        <div class="images">
            <img
                v-for="(image, index) in sortedImages"
                :key="index"
                :src="image.pathLong"
                class="image"
            />
        </div>
    </div>
</template>

<script>

export default {
    name: "Pictures",
    data: function () {
        return {
            images: [],
        };
    },
    methods: {
        importAll(r) {
            r.keys().forEach(key => (
                this.images.push({
                    pathLong: r(key),
                    pathShort: key,
                })
            ));
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
        }
    },
    mounted() {
        this.importAll(require.context('../../static/images/', true, /\.jpg$/));
    },
}

</script>

<style>

.image {
    border: 1px solid #ebebeb;
    margin: 10px auto;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.09);
    width: 90%;
}

.images {
    display: grid;
}

@media screen and (min-width: 1024px) {
    .image {
        width: 50%;
    }
    .images {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
}

</style>

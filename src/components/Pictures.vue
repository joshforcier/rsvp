<template>
    <div class="container">
        <div class="">
            <h1 class="text_align_center">Gallery</h1>
        </div>
        <div class="gallery">
            <div
                v-for="(src, index) in sortedImages"
                :key="index"
                class="pic"
                @click="() => showImg(index)"
            >
                <a :download="src.path" :href="src.path">
                    <span>
                        <img  class="download_icon" src="../assets/icons/cloud-computing.svg" alt="">
                    </span>
                </a>
                <img :src="src.path">
            </div>
        </div>
        <vue-easy-lightbox
            :visible="visible"
            :imgs="sortedImages"
            :index="index"
            @hide="handleHide"
        />
    </div>
</template>

<script>

export default {
    name: "Pictures",
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
                    path: r(key),

                })
            ));
        },
        showImg (index) {
            // this.index = index
            // this.visible = true
        },
        handleHide() {
            // this.visible = false;
        },
        show() {
            // this.visible = true;
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

.container {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.gallery {
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
@media screen and (min-width: 1024px) {
    .pic {
        width: calc(50% - 30px);
    }
}
.pic {
    margin: 15px;
    position: relative;
}
.pic:hover img {
    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0); */
    /* transform: scale(1.01); */
}
img {
    width: 100%;
    transition: 0.3s ease;
}
.download_icon {
    cursor: pointer;
    max-width: 40px;
    position: absolute;
    top: 0;
    right: 0;
    padding: 5px;
    filter: drop-shadow( 1px 1px 1px rgba(0, 0, 0, .9));
}

</style>

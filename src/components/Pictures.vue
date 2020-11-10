<template>
    <div class="container">
        <div class="">
            <h1 class="text_align_center">Gallery</h1>
        </div>
        <div class="gallery">
            <div
                v-for="(src, index) in images"
                :key="index"
                class="pic"
            >
                <a
                    :download="src.pathOriginal"
                    :href="src.pathOriginal"
                > 
                    <span>
                        <img
                            class="download_icon"
                            src="../assets/icons/cloud-computing.svg"
                            alt=""
                        >
                    </span>
                </a>
                <img
                    class="img"
                    :src="src.path"
                >
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "Pictures",
    data() {
        return {
            images: [],
        };
    },
    methods: {
        importAll(r) {
            let thumnailArray = r.keys();
            thumnailArray = thumnailArray.filter(s => !s.includes('_og'));
            thumnailArray.forEach(key => (
                this.images.push({
                    path: r(key),
                })
            ));

            let originalArray = r.keys();
            originalArray = originalArray.filter(s => s.includes('_og'));
            originalArray.forEach((key, index) => (
                this.images[index].pathOriginal = r(key)
            ));
        },
    },
    mounted() {
        this.importAll(require.context('../../static/images/wedding', true, /\.jpg$/));
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
}

@media screen and (min-width: 768px) {
    .gallery {
        column-count: 2;
        column-gap: 3px;
    }
}

@media screen and (min-width: 1025px) {
    .gallery {
        column-count: 4;
        column-gap: 3px;
        width: 150%;
    }
}
.pic {
    position: relative;
}
img {
    width: 100%;
    transition: 0.3s ease;
}
.pic .img {
    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0); */
    margin-bottom: 3px;
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

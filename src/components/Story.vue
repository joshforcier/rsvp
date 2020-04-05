<template>
    <div class="content text_align_center">
        <div class="mx-3">
            <h1 class="text_align_center">{{ this.$route.params.title }}</h1>
            <div class="text_align_left">
                {{ this.$route.params.story }}
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "Story",
}

</script>

<style>
</style>
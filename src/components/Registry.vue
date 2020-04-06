<template>
    <div class="content text_align_center">
        <div class="mx-3">
            <h1 class="text_align_center">Registry</h1>
            <div class="registry__links">
                <a href="https://www.target.com/gift-registry/giftgiver?registryId=744b0084607b4d6487bf4bd17dab1dcf&lnk=registry_custom_url" target="_blank" rel="noopener">
                    <span class="registry_icons">
                        <img src="../assets/icons/target.png" alt="target">
                    </span>
                </a>
                <a href="https://www.amazon.com/wedding/share/joshandkaylyn" target="_blank" rel="noopener">
                    <span class="registry_icons">
                        <img src="../assets/icons/amazon.svg" alt="amazon">
                    </span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "Registry",
}

</script>

<style>

.registry__links {
    display: flex;
    align-items: center;
    flex-direction: column;
}
.registry_icons img {
    width: 60%;
    margin: auto;
    padding: 24px;
}
</style>
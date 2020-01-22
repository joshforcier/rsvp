<template>
    <div class="content">
        <div class="mx-3">
            <h1 class="text_align_center contactUs">Contact Us</h1>
            <div class=" contacts">
                <div class="contact left">
                    Josh Forcier<br/>
                    <a href="mailto:joshforcier@gmail.com">joshforcier@gmail.com</a><br/>
                    <a href="tel:+1-320-420-9012">320-420-9012</a><br/>
                </div>
                <div class="contact right">
                    Kaylyn Meyers<br/>
                    <a href="mailto:kaylynmeyers@gmail.com">kaylynmeyers@gmail.com</a><br/>
                    <a href="tel:+1-608-931-6460">608-931-6460</a><br/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "Contact",
}

</script>

<style>

.contact {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.09);
    border-radius: 10px;
    padding: 10px;
    width: 300px;
    margin: 10px auto;
}

.contacts {
    display: grid;
    margin: auto;
}

@media screen and (min-width: 1024px) {
    .contacts {
        width: 50%;
        grid-template-columns: 1fr 1fr;
    }
}

.contactUs {
    margin-bottom: 5%;
}

</style>
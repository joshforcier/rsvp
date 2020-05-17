<template>
    <div class="content">
        <div class="mx-3">
            <h1 class="text_align_center contactUs">Contact Us</h1>
            <div class="contacts">
                <div class="contact left">
                    <strong>Josh Forcier</strong>
                    <div class="contactInfo">
                        <img class="contactIcon" src="../assets/icons/mail.svg" alt="">
                        <a href="mailto:joshforcier@gmail.com">joshforcier@gmail.com</a>
                    </div>
                    <div class="contactInfo">
                        <img class="contactIcon" src="../assets/icons/phone.svg" alt="">
                        <a href="tel:+1-320-420-9012">320-420-9012</a>
                    </div>
                </div>
                <div class="contact right">
                    <strong>Kaylyn Meyers</strong>
                    <div class="contactInfo">
                        <img class="contactIcon" src="../assets/icons/mail.svg" alt="">
                        <a href="mailto:kaylynmeyers@gmail.com">kaylynmeyers@gmail.com</a>
                    </div>
                    <div class="contactInfo">
                        <img class="contactIcon" src="../assets/icons/phone.svg" alt="">
                        <a href="tel:+1-608-931-6460">608-931-6460</a>
                    </div>
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
    border-radius: 3px;
    padding: 20px;
    width: 300px;
    margin: 10px auto;
    background-color: white;
    display: flex;
    flex-direction: column;
}

.contacts {
    display: grid;
    margin: auto;
}

.contactInfo {
    display: flex;
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

.contactIcon {
    width: 15px;
    margin-right: 10px;
}

a {
    color: grey;
}

</style>
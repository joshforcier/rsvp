<template>
    <div class="content text_align_center">
        <div class="mx-3 text-center">
            <h1 class="text_align_center">HOTEL</h1>

            <h3 class="text_align_center">TownePlace Suites</h3>
            <img
                src="../assets/exterior.jpg"
                alt="hotel"
                class="hotelImg"
            >
            <div>
                2706 Pontiac Place<br />
                Janesville, WI 53545<br />
                (608) 898-4200
            </div>
            <a href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1579538297375&key=GRP&app=resvlink">Hotel Reservation</a><br /><br />

            <p class="info">
                    For your convenience, a block of rooms has been reserved at TownePlace Suites in Janesville. 
                When calling to make your reservation, please mention the Forcier/Meyers wedding in order to receive a discounted rate. 
                Please follow the link above or call 608-898-4200 to make your reservation.
            </p>
            <p class="info info_date"><strong>Be sure to book your hotel room by August 21, 2020 in order to receive the discount.</strong></p>
        </div>
    </div>
</template>

<script>

export default {
    name: "Hotel",
}

</script>

<style>
.hotelImg {
    width: 100%;
}

.info {
    text-indent: 50px;
    text-align: left
}

.info_date {
    font-style: italic;
}
</style>
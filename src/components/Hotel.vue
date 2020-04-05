<template>
    <div class="content text_align_center hotel">
        <div class="mx-3 text-center">
            <h1 class="text_align_center">Hotel</h1>
            <div class="hotel__container">
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
                <a class="btn btn-submit" href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1579538297375&key=GRP&app=resvlink">Hotel Reservation</a><br /><br />

                <p class="hotelInfo">
                    For your convenience, a block of rooms has been reserved at TownePlace Suites in Janesville. 
                    When calling to make your reservation, please mention the Forcier/Meyers wedding in order to receive a discounted rate. 
                    Please follow the link above or call 608-898-4200 to make your reservation.
                </p>
                <p class="hotelInfo info_date">
                    Be sure to book your hotel room by August 21, 2020 in order to receive the discount.
                </p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "Hotel",
}

</script>

<style>

.btn-submit {
    width: 60%;
    margin : 0 auto;
    display: block;
    background-color: #7EA2A1;
    border-radius: 10px;
    color: white;
}

.btn-submit:hover {
    background-color: #b5c9c9;
}

@media screen and (min-width: 1024px) {
    .hotel {
        width: 50%;
        margin: auto;
    }

    .btn-submit {
        width: 30%;
    }
}

.hotel__container {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.09);
    border-radius: 10px;
    margin-top: 20px;
    background-color: white;
    padding: 20px;
}

.hotelImg {
    border-radius: 10px;
    width: 100%;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.09);
}

.hotelInfo {
    text-indent: 50px;
    text-align: left
}

.info_date {
    font-style: italic;
    color: red;
}
</style>
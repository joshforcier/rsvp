<template>
    <div>
        <h1 class="text_align_center">Our Vows</h1>
        <div class="homeCard">
            <div class="home__card">
                <div class="home__info">
                    <div class="cardTitle">Josh's</div>
                    <p class="story">
                        Kaylyn, the last few years have been simply amazing. Whether it was our late night dances in the kitchen, relaxing in the big bed,
                        or our trip to Barbados, where I proposed to you.
                    </p>
                    <p class="story">
                        There are so many things that I love about you and that you've added to my life. Kaylyn, I admire your thoughtfulness,
                        your love for your family,  your inner strength, your care for others, and your sense of humor.
                    </p>
                    <p class="story">
                        I could thank you for loving me, but instead I want to thank you for showing me what true love is, and that I deserve to be loved.
                    </p>
                    <p class="story">
                        I promise to love you unconditionally and without hesitation. I promise to keep holding up my role as the funny one in the relationship.
                        I promise to work hard to support and take care of you and our family. I promise to always do my best to help you when you are anxious
                        or in pain. I promise to always be honest with you, respect you, and to listen to you. I promise to be patient with you and to encourage you.
                    </p>
                    <p class="story">
                        Kaylyn, you are the love of my life and I feel so lucky to have found you. You make everyday brighter and I can’t wait to spend my life with you.
                    </p>
                </div>
            </div>
        </div>
        <div class="homeCard">
            <div class="home__card">
                <div class="home__info">
                    <div class="cardTitle">Kaylyn's</div>
                    <p class="story">
                        Josh, you are my best friend and the love of my life. I am so excited to be marrying you today. Since the first time I saw you I felt a connection to you.
                        You were hands down the best looking person I had ever seen in real life. Our story took some time to unfold, but looking back, there were so many moments
                        that I now realize were leading me to you. I am so thankful that our friendship grew into this life together.
                    </p>
                    <p class="story">
                        There are countless reasons why I love you. You are smart and you are patient. You think logically and you always ground me. Your love for me and for Jack
                        does not waiver. You are both of our #1 fans and the support you give us is constant and unconditional. Whether it's a major life decision, or my realizing
                        Vanderpump Rules will probably never be the same again, you're always there for me providing comfort. Because of you I feel safe. Because of you I know that
                        things will always be okay. For the rest of my life, I promise to do all that I can to make you feel the same way.
                    </p>
                    <p class="story">
                        I promise to say thank you. Everyday. I promise to be grateful for you and to not take one day with you for granted. I promise to take risks with you and to always
                        support you. I promise to be your partner in whatever life throws at us. I promise to work with you in raising Jack, even when that means baby mullets and cheering
                        for the Vikings. I promise to be present with you and live in the moment with you. From recognizing the peace in the quite times with you, to late nights dancing
                        in the kitchen to the theme song from Dave. I'll laugh with you and I'll cry with you. And I promise not to spend all of our money on targeted Instagram ads, even
                        if Chrissy Teigen has it. Unless we really, really need it.
                    </p>
                    <p class="story">
                        I promise to learn with you and to grow with you. Most of all I promise to always love you with everything I have. To be proud to call you my husband, today and
                        the rest of my days. To the Voyager and back.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "Vows",
}

</script>

<style>

.homeCards {
    margin-top: 5%;
}

.homeCard {
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.09);
    border-radius: 3px;
    padding: 10px;
    width: 90%;
    margin: 10px auto;
    background-color: white;
    font-family: "Poiret One";
}

.home__card {
    display: flex;
}

.home__info {
    width: 100%;
    margin: auto;
}

.cardTitle {
    color: #7EA2A1;
    font-weight: bold;
}

@media screen and (min-width: 1024px) {
    .home {
        margin: auto;
    }
    .homeCard {
        width: 60%;
    }
}

</style>

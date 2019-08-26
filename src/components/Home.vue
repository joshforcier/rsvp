<template>
    <div>
        <div class="container">
            <img src="../assets/pexels-photo-1563355.jpeg" alt="engagement-photo" style="width:100%;">
            <div class="centered">WE'RE GETTING MARRIED</div>
        </div>
        <RSVP />
    </div>
</template>

<script>

import RSVP from './RSVP';
import Navbar from './Navbar';
export default {
    name: 'Home',
    components: {
        RSVP,
    },
}

</script>

<style>
    .container {
        position: relative;
        text-align: center;
        color: white;
    }
    .centered {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>
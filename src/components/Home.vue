<template>
    <div>
        <div :class="$style.container">
            <img src="../assets/pexels-photo-1563355.jpeg" alt="engagement-photo" style="width:100%;">
            <div :class="$style.centered">WE'RE GETTING<br/>MARRIED!</div>
        </div>
        <div>JOSH FORCIER<br/>&<br/>KAYLYN MEYERS</div>
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

<style module>
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
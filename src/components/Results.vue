<template>
    <div>
        <ol>
            <li
                v-for="(data, index) in rsvp"
                :key="index"
            >
                <div
                    v-for="(name, index) in data.name"
                    :key="index"
                >
                    <div v-if="name">{{ name }}</div>
                </div>
                <div v-if="data.dietRestrictions">
                    Diet Restrictions: {{ data.dietRestrictions }}
                </div>
            </li>
        </ol>
    </div>
</template>

<script>

import { db } from "../../config/db";

export default {
    name: "Results",
    firebase: {
        rsvp: db.ref("rsvp"),
    },
    data() {
        return {
            // test: this.rsvp,
        }
    },
}

</script>

<style scoped>
</style>

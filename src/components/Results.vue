<template>
    <div>
        Total Count: {{ count }}
        <ol>
            <li
                v-for="(data, index) in rsvp"
                :key="index"
            >
                <div
                    v-for="(name, index) in data.name"
                    :key="index"
                >
                    <div v-if="name">
                        {{ name }}
                    </div>
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
            rsvp: {},
        }
    },
    computed: {
        count() {
            const data = this.rsvp;
            let count = 0;
            Object.entries(data).forEach(([key, value]) => {
                if (value.name && value.name.length > 0 && value.name != undefined) {
                    count += value.name.filter(Boolean).length;
                }
            });

            return count;
        }
    },
}

</script>

<style scoped>
</style>

<template>
    <div>
        Total Attending: {{ attending }}
        <br />
        Total Not Attending: {{ notAttending }}
        <ol>
            <li
                v-for="(data, index) in rsvp"
                :key="index"
            >
                <div v-if="data.attending">
                    <div style="color: green;">ATTENDING</div>
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
                </div>
                <div v-if="!data.attending">
                    <div style="color: red;">NOT ATTENDING</div>
                    <div v-if="data.name">
                        {{ data.name }}
                    </div>
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
        attending() {
            const data = this.rsvp;
            let count = 0;
            Object.entries(data).forEach(([key, value]) => {
                if (value.attending && value.name && value.name.length > 0) {
                    count += value.name.filter(Boolean).length;
                }
            });

            return count;
        },
        notAttending() {
            const data = this.rsvp;
            let count = 0;
            Object.entries(data).forEach(([key, value]) => {
                if (!value.attending && value.name && value.name.length > 0) {
                    count ++;
                }
            });

            return count;
        }
    },
}

</script>

<style scoped>
</style>

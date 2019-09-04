<template>
    <div class="content">
        <div class="card">
            <div class="card-header">
                <h1 class="text_align_center">RSVP</h1>
                <div class="deadline text_align_center">
                    Deadline: June 1st, 2020
                </div>
            </div>
            <div class="card-body">
                <form @submit.prevent="addRsvp">
                    <div class="form-group">
                        <label>How many people are attending?</label>
                        <select
                            required
                            class="form-control"
                            v-model="selected"
                        >
                            <option
                                v-for="n in 6"
                                :key="n"
                                :value="{ number: n }"
                            >
                                {{ n }}
                            </option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label>Names:</label>
                        <input
                            required
                            type="text"
                            class="form-control"
                            v-for="n in Number(selected.number)"
                            v-model="newRsvp.name[n]"
                            :index="n"
                            :key="n"
                        />
                    </div>

                    <div class="form-group">
                        <label>Any Dietary Restrictions?</label>
                        <select
                            required
                            class="form-control"
                            v-model="diet"
                        >
                            <option :value="false">No</option>
                            <option :value="true">Yes</option>
                        </select>
                    </div>

                    <div
                        class="form-group"
                        v-if="diet === true"
                    >
                        <label>Dietary Restrictions:</label>
                        <input
                            required
                            type="text"
                            class="form-control"
                            v-model="newRsvp.dietRestrictions"
                        />
                    </div>

                    <div class="form-group">
                        <input
                            type="submit" 
                            class="btn btn-primary btn-block"
                            value="SUBMIT"
                        />
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

import { db } from "../../config/db";

export default {
    name: "RSVP",
    firebase: {
        rsvp: db.ref("rsvp"),
    },
    data () {
        return {
            selected: {
                number: 2,
            },
            newRsvp: {
                name: [],
                dietRestrictions: "",
                type: String,
            },
            diet: {
                resctricted: "",
                type: Boolean,
            },
        }
    },
    methods: {
        addRsvp() {
            this.$firebaseRefs.rsvp.push({
                name: this.newRsvp.name,
                dietRestrictions: this.newRsvp.dietRestrictions,
            });
            this.showAlert();
            this.$router.push({ name: 'Directions'});
        },
        showAlert() {
            this.$swal({
                title: "Thank you!",
                text: "",
                type: "success",
                timer: 1500,
                showConfirmButton: false,
            });
        },
    },
}

</script>

<style scoped>

.deadline {
    font-size: .8rem;
}

</style>

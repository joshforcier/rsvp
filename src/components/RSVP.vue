<template>
    <div class="content">
        <div>
            <h1 class="text_align_center rsvp">RSVP</h1>
            <div class="deadline text_align_center">
                Deadline: August 21st, 2020
            </div>
        </div>
        <div class="card-body">
            <form @submit.prevent="addRsvp">
                <div class="form-group">
                    <div class="form-item">
                        <label>Are you attending?</label>
                        <select
                            required
                            class="form-control"
                            v-model="attending.value"
                            @change="onChange(attending.value)"
                        >
                            <option
                                v-for="(option, index) in attending"
                                :key="index"
                                :value="option.value"
                            >
                                {{ option.text }}
                            </option>
                        </select>
                    </div>
                </div>

                <div v-if="attending.value">
                    <div class="form-group">
                        <div class="form-item">
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
                    </div>

                    <div class="form-group">
                        <div class="form-item">
                            <label>Names:</label>
                            <input
                                required
                                type="text"
                                class="form-control names"
                                v-for="n in Number(selected.number)"
                                v-model="newRsvp.name[n]"
                                :index="n"
                                :key="n"
                            />
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="form-item">
                            <label>Any Dietary Restrictions(GF, V, Allergies)?</label>
                            <select
                                required
                                class="form-control"
                                v-model="diet"
                            >
                                <option :value="false">No</option>
                                <option :value="true">Yes</option>
                            </select>
                        </div>
                    </div>
                    <div
                        class="form-group"
                        v-if="diet === true"
                    >
                        <div class="form-item">
                            <label>Dietary Restrictions:</label>
                            <input
                                required
                                type="text"
                                class="form-control"
                                v-model="newRsvp.dietRestrictions"
                            />
                        </div>
                    </div>
                </div>
                <div v-if="attending.value === false">
                    <div class="form-group">
                        <div class="form-item">
                            <label>Name:</label>
                            <input
                                required
                                v-model="newRsvp.name"
                                type="text"
                                class="form-control names"
                            />
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <input
                        type="submit"
                        class="btn btn-submit"
                        value="Submit"
                    />
                </div>
            </form>
        </div>
    </div>
</template>

<script>

import { db } from "../../config/db";
import Swal from 'sweetalert2';

export default {
    name: "RSVP",
    firebase: {
        rsvp: db.ref("rsvp"),
    },
    data () {
        return {
            attending: [
                { text: 'Will attend' , value: true },
                { text: 'Will not attend' , value: false },
            ],
            selected: {
                number: 2,
            },
            newRsvp: {
                isAttending: "",
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
                attending: this.attending.value,
                name: this.newRsvp.name,
                dietRestrictions: this.newRsvp.dietRestrictions,
            });
            this.showAlert();
        },
        showAlert() {
            Swal.fire({
                title: "Thank you!",
                text: "",
                icon: "success",
                timer: 1500,
                showConfirmButton: false,
            });
        },
        onChange(value) {
            this.newRsvp.isAttending = value;
        },
    },
}

</script>

<style scoped>

.deadline {
    font-size: .8rem;
    color: red;
}

.rsvp {
    padding-top: 1rem;
}

.card-body {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.09);
    border-radius: 3px;
    margin: 20px auto 20px auto;
    background-color: white;
    width: 90%;
}

@media screen and (min-width: 1024px) {
    .card-body {
        width: 50%;
        margin: auto;
    }
}

.form-item {
    width: 75%;
    margin: auto;
}

input, select {
    border-radius: 3px;
    margin: auto;
}

.btn-submit {
    width: 30%;
    margin : 0 auto;
    display: block;
    background-color: #7EA2A1;
    color: white;
}

.btn-submit:hover {
    background-color: #b5c9c9;
}

.names {
    margin-bottom: 5px;
}

</style>

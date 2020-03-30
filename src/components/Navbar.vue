<template>
    <div>
        <b-navbar 
            toggleable="lg"
            type="light"
            variant="light"
            class="navbar_border"
        >
            <b-navbar-brand href="#">
                <div class="white-space">September 19, 2020</div>
                <h2 class="header--1 text">JOSH & KAYLYN</h2>
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-link class="ml-auto">
                        <b-nav-item
                            class="nav-link"
                            v-for="routes in links"
                            :key="routes.id"
                            :to="routes.path"
                        >
                            {{ routes.name }}
                        </b-nav-item>
                    </b-link>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>

        <router-view></router-view>
    </div>
</template>

<script>

export default {
    name: "Navbar",
    data() {
        return {
            links: [
                {
                    id: 0,
                    name: "Home",
                    path: "/",
                },
                {
                    id: 1,
                    name: "RSVP",
                    path: "/RSVP",
                },
                {
                    id: 2,
                    name: "Schedule",
                    path: "/schedule",
                },
                {
                    id: 3,
                    name: "Directions",
                    path: "/directions",
                },
                {
                    id: 4,
                    name: "Hotel",
                    path: "/hotel",
                },
                {
                    id: 5,
                    name: "Registry",
                    path: "/registry",
                },
                {
                    id: 6,
                    name: "Pictures",
                    path: "/pictures",
                },
                {
                    id: 7,
                    name: "Contact",
                    path: "/contact",
                },
            ],
        }
    },
}

</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Poiret+One&display=swap");

.navbar {
    padding: 0rem 1rem;
}

.navbar-brand {
    font-family: "Poiret One";
    font-size: 1rem;
}

.navbar_border {
    /* border-bottom: 1px solid black; */
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.09);
}

.nav-link {
    font-size: 1.5rem;
    padding: 0.25rem;
}

@media screen and (min-width: 1024px) {
    .nav-link {
        display: inline;
        padding: 0 0 0 .5rem !important;
        font-size: 1rem;
    }
}

.navbar_border a:hover {
    text-decoration: none;
}

.router-link-exact-active {
    border-bottom: 2px solid #7EA2A1;
    line-height: 0.7em;
}

</style>

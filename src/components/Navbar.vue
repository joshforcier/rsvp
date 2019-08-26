<template>
    <div>
        <div class="white-space">September 19, 2020        Janesville, WI</div>
        <h1 class="header--1">JOSH & KAYLYN</h1>
        <nav>
            <router-link
                class="navbar spacing"
                v-for="routes in links"
                :key="routes.id"
                :to="routes.path"
            >
                {{ routes.name }}
            </router-link>
            <router-view></router-view>
        </nav>
    </div>
</template>

<script>

export default {
    name: 'Navbar',
    data() {
        return {
            links: [
                {
                    id: 0,
                    name: 'RSVP',
                    path: '/',
                },
                {
                    id: 1,
                    name: 'Pictures',
                    path: '/pictures',
                },
                {
                    id: 2,
                    name: 'Contact',
                    path: '/contact',
                },
            ],
        }
    },
}

</script>

<style>
    .spacing {
        Margin-right: 10px;
    }

    .white-space{
        white-space:pre;
    }
</style>
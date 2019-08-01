<template>
    <div>
        <nav>
            <router-link
                class="spacing"
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
                    name: 'HomePage',
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
</style>
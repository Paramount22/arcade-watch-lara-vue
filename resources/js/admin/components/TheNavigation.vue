<template>
<div>
    <div class="navbar-brand">
        <a class="navbar-item" href="/">
            <img src="https://bulma.io/images/bulma-logo.png" />
        </a>

    </div>
    <nav>
        <h5 class="heading">Admin</h5>
        <router-link to="/admin/">Dashboard</router-link>

        <h5 class="heading">Resources</h5>
        <router-link to="/admin/posts">Posts</router-link>
        <router-link to="/admin/comments">Comments</router-link>
        <router-link to="/admin/users">Users</router-link>

        <h5 class="heading">General</h5>
        <a href="/">Homepage</a>
        <a href="#" @click.prevent="logout()">Logout</a>
    </nav>
</div>

</template>

<script>
    export default {
        name: "TheNavigation",

        methods: {
            logout() {
                axios.post('/logout').then(response => {
                    window.location.href = '/login';
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .heading {
        margin-top: 4rem;
        font-weight: bold;
    }
</style>

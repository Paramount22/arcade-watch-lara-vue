<template>
<div class="columns">
    <nav class="level is-mobile column is-three-fifths">
        <div class="level-item has-text-centered box">
            <div>
                <p class="heading">Posts</p>
                <p class="title"> {{posts.length}} </p>
            </div>
        </div>
        <div class="level-item has-text-centered box">
            <div>
                <p class="heading">Comments</p>
                <p class="title"> {{comments.length}} </p>
            </div>
        </div>
        <div class="level-item has-text-centered box">
            <div>
                <p class="heading">Users</p>
                <p class="title"> {{users.length}} </p>
            </div>
        </div>

    </nav>
</div>

</template>

<script>
    export default {
        name: "TheStats",
        props: ['posts', 'comments', 'users'],

        data() {
            return {
                data: []
            }
        },

       /* mounted() {
            this.$root.$on('posts-data', (data) => this.data = data)
        }*/
    }
</script>

<style lang="scss" scoped>
    .level {
        margin-bottom: 2.5em;
    }

   /* .level-item {
        flex-basis: 20%;
        white-space: nowrap;
    }*/
</style>

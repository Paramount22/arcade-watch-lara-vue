<template>
  <div class="columns layout">
      <nav class="column is-2 main-navbar">
          <the-navigation />
      </nav>

      <main class="column is-10">
          <the-stats :posts="posts" :comments="comments" :users="users" />
          <router-view />
      </main>
  </div>

</template>

<script>
    import TheNavigation from './components/TheNavigation.vue';
    import TheStats from './components/TheStats.vue';
    export default {
        components: {
            TheNavigation,
            TheStats
        },
        data() {
            return {
                posts: {},
                comments: {},
                users: {}
            }
        },

        created() {
            axios.get('/api/posts').then(response => {
                this.posts = response.data
            });

            axios.get('/api/comments').then(response => {
                this.comments = response.data
            });

            axios.get('/api/posts').then(response => {
                this.users = response.data
            });




        }
    }

</script>

<style lang="scss" scoped>

</style>

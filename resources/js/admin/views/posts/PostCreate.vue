<template>
    <div class="columns">
        <div class="column is-two-thirds card">
            <h1 class="title">create new post</h1>

            <post-create-form @post-form-submitted="submitForm" :errors="errors" />
        </div>

    </div>
</template>

<script>
    import PostCreateForm from './PostCreateForm';

    export default {
        name: "PostCreate",
        components: {PostCreateForm},
        data() {
            return {
                errors: {}
            }
        },

        methods: {
            submitForm(data) {
               // console.log(data)
              axios.post('/api/posts', data).then(response => {
                    this.$router.push(`/admin/posts/${response.data.post.id}`)
                }).catch( errors => {
                    //console.log(errors.response)
                    this.errors = errors.response.data.errors
                })

            }
        },
    }
</script>

<style scoped>

</style>

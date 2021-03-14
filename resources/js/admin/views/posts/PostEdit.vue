<template>
    <div class="columns">

        <div class="column is-two-thirds card">
            <h1 class="title">edit post</h1>

            <post-create-form
                @post-form-submitted="submitForm"
                :errors="errors"
                :post="post"
            />
        </div>

    </div>
</template>

<script>
    import PostCreateForm from './PostCreateForm';

    export default {
        name: "PostEdit",
        components: {PostCreateForm},
        data() {
            return {
                errors: {},
                post: {}
            }
        },

        created() {
            axios.get('/api/posts/' + this.$route.params.id).then(response => {
                this.post = response.data
            });
        },

        methods: {
            submitForm(data) {
                let id = this.$route.params.id;
                // console.log(data)
               axios.patch(`/api/posts/${id}`, data).then(response => {
                   //console.log(response)
                    this.$router.push(`/admin/posts/${id}`)
                }).catch( errors => {
                    //console.log(errors.response)
                    this.errors = errors.response.data.errors
                });

            }
        },
    }
</script>

<style scoped>

</style>

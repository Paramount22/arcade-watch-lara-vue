<template>
    <div class="columns">
        <div class="create-commnet column is-two-thirds">
            <div class="card">
                <div class="card-content">
                    <h1 class="title">create new comment</h1>
                    <comment-create-form @comment-form-submitted="submitForm" :errors="errors" />
                </div>
            </div>
    </div>
    </div>

</template>

<script>
    import CommentCreateForm from './CommentCreateForm';
    export default {
        name: "CommentCreate",
        components: {CommentCreateForm},
        data() {
            return {
                errors: {}
            }
        },

        methods: {
            submitForm(data) {
                axios.post('/api/comments', data).then(response => {
                    this.$router.push(`/admin/comments/${response.data.comment.id}`)
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

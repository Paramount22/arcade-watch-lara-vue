<template>
    <div class="columns">
        <div class="edit-comment column is-half card">
            <h1 class="title">edit comment</h1>
            <comment-create-form
                @comment-form-submitted="submitForm"
                :errors="errors"
                :comment="comment"
            />
        </div>
    </div>
</template>

<script>
    import CommentCreateForm from './CommentCreateForm';
    export default {
        name: "CommentEdit",
        components: {CommentCreateForm},

        data() {
            return {
                comment: '',
                errors: {}
            }
        },

        created() {
            axios.get('/api/comments/' + this.$route.params.id).then(response => {
                this.comment = response.data
            });
        },

        methods: {
            submitForm(data) {
                let id = this.$route.params.id;
                // console.log(data)
                axios.patch(`/api/comments/${id}`, data).then(response => {
                    //console.log(response)
                    this.$router.push(`/admin/comments/${id}`)
                }).catch( errors => {
                    //console.log(errors.response)
                    this.errors = errors.response.data.errors
                });

            },


        },

    }
</script>

<style scoped>

</style>

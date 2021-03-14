<template>
    <div class="columns">
        <div class="column is-three-fifths card">
        <h1 class="title">
            <small class="has-text-grey-light">post |</small>
            {{post.title}}
        </h1>

        <div class="content" v-html="post.text">

        </div>

        <table class="table meta">
            <tr>
                <td><strong>id:</strong></td>
                <td>{{post.id}}</td>
            </tr>

            <tr>
                <td><strong>slug:</strong></td>
                <td>
                    <input
                        type="text"
                        class="input"
                        :value="post.slug"
                        readonly
                    >
                </td>
            </tr>

            <tr>
                <td><strong>created at:</strong></td>
                <td>{{post.created_at}}</td>
            </tr>
            <tr>
                <td><strong>updated at:</strong></td>
                <td>{{post.updated_at}}</td>
            </tr>
        </table>

      <!-- {{$route.params}}
        {{post}} -->

        <single-edit-links resource="post" :id="post.id" />
        </div>
    </div>


</template>

<script>
    import SingleEditLinks from '../../components/SingleEditLinks';
    export default {
        components: {
            SingleEditLinks
        },
        name: "PostSingle",
        data() {
            return {
                post: {}
            }
        },
        created() {
            axios.get('/api/posts/' + this.$route.params.id ).then(response =>  {
                this.post = response.data
            }).catch(error => {
                return this.$router.push('/admin/404')
            });
        }
    }
</script>

<style lang="scss" scoped>

</style>

<template>
    <div class="columns">
        <div class="column is-two-fifths card">

        <h1 class="title">
            <small class="has-text-grey-light">user</small>
        </h1>

        <div class="content">
            {{ user.name }}
        </div>

        <table class="table meta">
            <tr>
                <td><strong>id:</strong></td>
                <td>{{user.id}}</td>
            </tr>

            <tr>
                <td><strong>email:</strong></td>
                <td>{{user.email}}</td>
            </tr>

            <tr>
                <td><strong>created at:</strong></td>
                <td>{{user.created_at}}</td>
            </tr>
            <tr>
                <td><strong>updated at:</strong></td>
                <td>{{user.updated_at}}</td>
            </tr>
        </table>

        <!-- {{$route.params}}
          {{post}} -->

        <single-edit-links resource="user" :id="user.id" />
        </div>
    </div>


</template>

<script>
    import SingleEditLinks from '../../components/SingleEditLinks';
    export default {
        components: {
            SingleEditLinks
        },
        name: "UserSingle",
        data() {
            return {
                user: {
                }
            }
        },
        created() {
            axios.get('/api/users/' + this.$route.params.id ).then(response =>  {
                this.user = response.data
            }).catch(error => {
                return this.$router.push('/admin/404')
            });
        }
    }
</script>

<style lang="scss" scoped>

</style>

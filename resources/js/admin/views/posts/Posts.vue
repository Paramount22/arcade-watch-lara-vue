<template>
    <div class="columns">


    <section class="posts-page column is-four-fifths">

        <TableSearch :count="filteredItems.length" :data="data.length" resource="post"
                     @searchQueryChanged="search = $event" />
       <table class="table is-bordered is-striped is-fullwidth">
           <thead>
                <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>user</th>
                    <th>published at</th>
                    <th>action</th>
                </tr>
           </thead>
           <tbody>
                <tr v-for="post in filteredItems" :key="post.id">
                    <td>{{ post.id }} </td>
                    <td>{{ post.title }} <small>{{ shorten(post.text) }}</small> </td>
                    <td>
                        <a :href="'/admin/users/' + post.user.id">{{ post.user.name }}</a>

                    </td>
                    <td>{{ niceDate(post.created_at)  }}</td>
                    <td>
                        <TableEditLinks resource="post" :id="post.id" />
                    </td>
                </tr>
           </tbody>
       </table>

    </section>
    </div>
</template>

<script>
    import tableMixin from '../../mixins/tableMixin'
    import TableSearch from '../../components/TableSearch.vue'
    import TableEditLinks from '../../components/TableEditLinks'

    export default {
        data() {
            return {
                searchColumn: 'title',
                //loaded: false
            }
        },

        mixins: [tableMixin],
        components: {
            TableSearch, TableEditLinks
        },



        created() {
            axios.get('/api/posts').then(response => {
                this.data = response.data;
            });

            /*if ( this.data ) {
                setTimeout( () =>  this.loaded = true, 500)
            }*/
        },






    }
</script>

<style lang="scss" scoped>
    small {
        padding-left: 1rem;
        color: grey;
    }
</style>

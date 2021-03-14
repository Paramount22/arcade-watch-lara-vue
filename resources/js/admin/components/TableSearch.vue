<template>
    <!-- Main container -->
    <nav class="level">
        <!-- Left side -->
        <div class="level-left">
            <div class="level-item">
                <p class="subtitle is-5">
                    <strong> {{ count }} </strong> {{resource}}s from <strong>{{data}}</strong>
                </p>
            </div>
            <div class="level-item">
                <div class="field has-addons">
                    <p class="control">
                        <input v-model="searchQuery" class="input" type="text" :placeholder="'Find a ' + resource">
                    </p>
                    <p v-show="count < data" class="control">
                        <button @click="clearInput()" class="button">
                            Clear
                        </button>
                    </p>
                </div>
            </div>
        </div>

        <!-- Right side -->
        <div class="level-right">

            <p
                class="level-item"><router-link :to="`/admin/${resource}s/new`" class="button is-success">New
                {{resource}}
            </router-link></p>
        </div>
    </nav>
</template>

<script>
    export default {
        props: ['count', 'resource', 'data'],
        name: 'TableSearch',

        data() {
            return {
                searchQuery: ''
            }
        },

       methods: {
            clearInput() {
               this.searchQuery = '';
            }
       },

        watch: {
            searchQuery(value) {
                this.$emit('searchQueryChanged', value)
            }
        }
    }
</script>

<style scoped>

</style>

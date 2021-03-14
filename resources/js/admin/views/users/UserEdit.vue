<template>
    <div class="columns">
        <div class="column is-three-fifths card">
        <h1 class="title">edit user</h1>

        <div class="field">
            <label class="label">Name</label>
            <div class="control">
                <input class="input is-primary"
                       :class="{ 'is-danger' : errors.name }"
                       name="name"
                       type="text"
                       placeholder="name"
                       v-model="name">
            </div>
            <div v-if="errors.name">

                <p class="help is-danger" v-for="(error, index) in errors.name" :key="index">
                    {{ error }}
                </p>
            </div>
        </div>

        <div class="field">
            <label class="label">Email</label>
            <div class="control">
                <input class="input is-primary"
                       :class="{ 'is-danger' : errors.name }"
                       name="email"
                       type="text"
                       placeholder="email"
                       v-model="email">
            </div>
            <div v-if="errors.email">

                <p class="help is-danger" v-for="(error, index) in errors.email" :key="index">
                    {{ error }}
                </p>
            </div>
        </div>

        <div class="field">
            <label class="label">Password</label>
            <div class="control">
                <input class="input is-primary" name="password" type="text" placeholder="password" v-model="password">
            </div>
            <div v-if="errors.password">

                <p class="help is-danger" v-for="(error, index) in errors.password" :key="index">
                    {{ error }}
                </p>
            </div>
        </div>

        <div class="field is-grouped">
            <div class="control">
                <button @click="submitForm" class="button is-primary">Submit</button>
            </div>
            <div class="control">
                <button @click="$router.go(-1)" class="button is-text">Cancel</button>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserEdit",
        data() {
            return {
                name: '',
                email: '',
                password: '',
                user: {},
                errors: {}
            }
        },

        created() {
            axios.get('/api/users/' + this.$route.params.id ).then(response =>  {
                this.user = response.data
            }).catch(error => {
                return this.$router.push('/admin/404')
            });
        },

        methods: {
            submitForm() {
                let data = {
                    name: this.name,
                    email: this.email,
                    password: this.password,

                };
                let id = this.$route.params.id;
                axios.patch(`/api/users/${id}`, data).then(response => {
                    this.$router.push(`/admin/users/${id}`)
                }).catch( errors => {
                    //console.log(errors.response)
                    this.errors = errors.response.data.errors
                });





               /* let id = this.$route.params.id;
                // console.log(data)
                axios.patch(`/api/users/${id}`, data).then(response => {
                    //console.log(response)
                    this.$router.push(`/admin/users/${id}`)
                }).catch( errors => {
                    //console.log(errors.response)
                    this.errors = errors.response.data.errors
                });*/

            },
        },

        watch: {
            user(user) {
                this.name = user.name;
                this.email = user.email;
                this.password = user.password;
            }
        }
    }
</script>

<style scoped>

</style>

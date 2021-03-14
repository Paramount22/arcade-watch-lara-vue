<template>
    <div>
        <div class="field">
            <label class="label">Post</label>
            <div class="control">
                <input class="input is-primary"
                       :class="{ 'is-danger' : errors.post_id }"
                       name="post_id"
                       type="number"
                       placeholder="post id"
                       v-model="post_id"
                >
            </div>
            <div v-if="errors.post_id">

                <p class="help is-danger" v-for="(error, index) in errors.post_id" :key="index">
                    {{ error }}
                </p>
            </div>
        </div>

        <div class="field">
            <label class="label">Comment</label>
            <div class="control">
                <textarea class="textarea is-primary"
                          :class="{ 'is-danger' : errors.text }"
                          name="text"
                          placeholder="Enter your coment"
                          v-model="text"
                >
                </textarea>
                <div v-if="errors.text">

                    <p class="help is-danger" v-for="(error, index) in errors.text" :key="index">
                        {{ error }}
                    </p>
                </div>
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
</template>

<script>
    export default {
        name: "CommentCreateForm",
        props: ['errors', 'comment'],

        data() {
            return {
                post_id: null,
                text: '',

            }
        },

        methods: {
            submitForm() {
                let data = {
                    post_id: this.post_id,
                    text: this.text,
                    user_id: 6,
                };
                this.$emit('comment-form-submitted', data); // komunikacie cez $emit
            }
        },

        watch: {
            comment(comment) {
                this.post_id = comment.post_id;
                this.text = comment.text;
            }
        }
    }
</script>

<style scoped>

</style>

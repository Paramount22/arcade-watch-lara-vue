<template>
    <div class="edit">
        <div class="field">
            <label class="label">Title</label>
            <div class="control">
                <input v-model="title"
                       class="input is-primary"
                       :class="{ 'is-danger' : errors.title }"
                       name="title"
                       type="text"
                       placeholder="Title"
                >

            </div>
            <div v-if="errors.title">

                <p class="help is-danger" v-for="(error, index) in errors.title" :key="index">
                    {{ error }}
                </p>
            </div>
        </div>

        <div class="field">
            <label class="label">Slug</label>
            <div class="control">
                <input v-model="slug"
                       class="input is-primary"
                       :class="{ 'is-danger' : errors.slug }"
                       name="slug"
                       type="text"
                       placeholder="Title">
            </div>
            <div v-if="errors.slug">

                <p class="help is-danger" v-for="(error, index) in errors.slug" :key="index">
                    {{ error }}
                </p>
            </div>

        </div>

        <div class="field">
            <label class="label">Text</label>
            <div class="control content">
                <input id="x" :value="text" type="hidden" name="text">
                <trix-editor input="x"
                             class="input is-primary"
                             :class="{ 'is-danger' : errors.text }">

                </trix-editor>
            </div>
            <div v-if="errors.text">

                <p class="help is-danger" v-for="(error, index) in errors.text" :key="index">
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
</template>

<script>
    import trix from 'trix';
    export default {
        name: "PostCreateForm",

        props: {
            errors: {
                type: Object,
            },
            post: {
                type: Object,
            },
        },
        data() {
            return {
                title: '',
                //wachSlug: '',
                slug: '',
                text: '',

            }
        },
        mounted() {
            document.addEventListener('trix-change', () => {
                this.text = document.getElementById('x').value
            })
        },

        methods: {
            submitForm() {
                let data = {
                    title: this.title,
                    slug: this.slug,
                    text: this.text,
                    user_id: 6
                };
                this.$emit('post-form-submitted', data); // komunikacie cez $emit
            }
        },

        /*computed: {
            watchSlug: {
                get: function() {
                    return _.trim(
                        _.deburr(this.title.toLowerCase()) // diacritics
                            .replace(/[^\w\s]/gi, '') // special characters
                            .replace(/ {2,}/g, ' ') // repeating spaces
                            .replace(/ /g, '-'), // space to -
                        '-' // trailing -
                    )
                },

                set: function(newValue) {
                    let slugTitle = newValue.split(' ');
                    //this.title = slugTitle[0];
                    this.slug = slugTitle[newValue.length - 1]
                }
            }
        },*/

         watch: {
            title(value) {
                this.slug = _.trim(
                    _.deburr(value.toLowerCase()) // diacritics
                        .replace(/[^\w\s]/gi, '') // special characters
                        .replace(/ {2,}/g, ' ') // repeating spaces
                        .replace(/ /g, '-'), // space to -
                    '-' // trailing -
                )
            },

        post(post) {
            this.title = post.title;
            this.slug = post.slug;
            this.text = post.tex;

            let trix = document.querySelector('trix-editor');
            trix.editor.insertHTML(post.text);
        }
    }

    }
</script>

<style lang="scss" scoped>
    @import '~trix/dist/trix.css';

    trix-editor {
        min-height: 20rem
    }
</style>

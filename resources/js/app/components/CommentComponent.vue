
<script>
    export default {
        name: "CommentComponent",

        props: ['comment-data', 'count-comments'],

        data() {
            return {
                editing: false,
                newText: '',
                oldText: ''
            }
        },

        mounted() {
           // console.log(this.commentData.id);
            console.log(this.countComments);
           this.oldText = this.newText = this.commentData.text
        },

        methods: {

            startEditing() {
                this.editing = true;
                this.selectText();
            },

            resetText() {
                this.editing = false;
                this.$refs.input.innerText = this.oldText;
            },

            textChanged() {
                this.newText = this.$refs.input.innerText; // vdaka ref atributu vieme dostat hodnotu v inpute
            },

            updateComment() {
               axios.patch('/comments/' + this.commentData.id, {
                    text: this.newText
                });
                this.editing = false;
                this.$root.$emit('flash', 'comment updated');
                this.oldText = this.newText
            },

           /* resetEdit() {
              return location.reload();
            },*/

            deleteComment() {

                if( window.confirm('Are you sure ?') ) {
                    axios.delete('/comments/' + this.commentData.id);
                    this.$root.$emit('flash', 'comment deleted');
                    this.$el.remove();
                }

            },
            // funkcia na vyznacenie tetu pri editovani
            selectText() {
                setTimeout(() => {
                    let p = this.$refs.input,
                        s = window.getSelection(),
                        r = document.createRange();
                    r.setStart(p, 0);
                    r.setEnd(p, 1);
                    s.removeAllRanges();
                    s.addRange(r);
                    p.focus();
                }, 0)
            }
        },
    }

</script>

<style lang="scss" scoped>
    [contenteditable='true'] {

        outline: none;
        background: #e68c30;
        border: 3px solid white;
        padding: 1rem;
        border-radius: .3rem;
    }

    .controls {
        float: right;
        a {
            margin-right: .7rem;
        }
    }
</style>

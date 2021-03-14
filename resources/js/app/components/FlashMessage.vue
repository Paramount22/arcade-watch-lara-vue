<template>
    <transition name="fade">
        <div class="notification is-success" v-show="visible">
            <button class="delete" @click="hide()"></button>
          {{message}}
        </div>
    </transition>
</template>

<script>
export default {
    props: ['text'],
    data() {
        return {
            visible: false,
            message: ''
        }
    },

    created() {
        if( this.text ) {
            this.message = this.text;
            this.show()
        }

        this.$root.$on('flash', message => {
            this.message = message;
            this.show()
        });

    },

    methods: {
        show() {
            this.visible = true;
            setTimeout( () =>  this.hide(), 3000)
        },
        hide() {
            this.visible = false;
        }
    }
};
</script>

<style lang="scss" scoped>
.notification {
    font-size: 1.2rem;
    position: fixed;
    right: 2rem;
    bottom: 2rem;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>

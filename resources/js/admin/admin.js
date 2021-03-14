import "../bootstrap";
import router from '../admin/router.js';

import AdminComponent from '../admin/AdminComponent.vue'


const admin = new Vue({
    router,
    render:h => h(AdminComponent)
}).$mount('#admin');


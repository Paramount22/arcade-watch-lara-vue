import Router from 'vue-router';

import Dashboard from "./views/Dashboard";
import NotFound from "./views/NotFound";
// posts
import Posts from "./views/posts/Posts";
import PostSingle from "./views/posts/PostSingle";
import PostCreate from "./views/posts/PostCreate";
import PostEdit from "./views/posts/PostEdit";

// comments
import Comments from "./views/comments/Comments";
import CommentSingle from "./views/comments/CommentSingle";
import CommentCreate from "./views/comments/CommentCreate";
import CommentEdit from "./views/comments/CommentEdit";

// users
import Users from "./views/users/Users";
import UserSingle from "./views/users/UserSingle";
import UserEdit from "./views/users/UserEdit";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/admin/',
            component: Dashboard
        },
        // posts
        {
            path: '/admin/posts',
            component: Posts
        },
        {
            path: '/admin/posts/new',
            component: PostCreate
        },
        {
            path: '/admin/posts/:id',
            component: PostSingle
        },
        {
            path: '/admin/posts/:id/edit',
            component: PostEdit
        },

        // comments
        {
            path: '/admin/comments',
            component: Comments
        },

        {
            path: '/admin/comments/new',
            component: CommentCreate
        },

        {
            path: '/admin/comments/:id',
            component: CommentSingle
        },
        {
            path: '/admin/comments/:id/edit',
            component: CommentEdit
        },


        //users
        {
            path: '/admin/users',
            component: Users
        },
        {
            path: '/admin/users/:id',
            component: UserSingle
        },
        {
            path: '/admin/users/:id/edit',
            component: UserEdit
        },

        // 404
        {
            path: '/admin/404',
            component: NotFound
        },

        {
            path: '*',
            redirect: '/admin/404'
        },


    ]
});



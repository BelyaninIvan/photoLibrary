import Main from '@/pages/Main.vue';
import UsersPage from '@/pages/UsersPage.vue';
import UserIdPage from '@/pages/UserIdPage.vue';
import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    {
        path: '/', 
        component: Main,
    },
    {
        path: '/users/:id', 
        component: UserIdPage,
        props: true
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
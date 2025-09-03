import { createRouter, createWebHistory } from 'vue-router'
import LoginView from "../views/LoginView.vue";
import LoginComponent from "../components/LoginComponent.vue";
import SignUpComponent from "../components/SignUpComponent.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'login',
            component: LoginView,
            children: [
                {
                    path: '/',
                    name: 'loginComp',
                    component: LoginComponent
                },
                {
                    path: '/signUp',
                    name: 'signUp',
                    component: SignUpComponent
                },
            ],
        },
    ],
})

export default router
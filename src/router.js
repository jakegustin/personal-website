import { createWebHistory, createRouter } from "vue-router";

import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Projects from "./views/Projects.vue";
import Contact from "./views/Contact.vue";
import LapSim from "./views/LapSim.vue";
import Portfolio from "./views/Portfolio.vue";
import Jade from "./views/Jade.vue";
import Unknown from "./views/Unknown.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/projects',
        name: 'projects',
        component: Projects
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    },
    {
        path: '/projects/lapsim',
        name: 'lapsim',
        component: LapSim
    },
    {
        path: '/projects/portfolio',
        name: 'portfolio',
        component: Portfolio
    },
    {
        path: '/projects/jade',
        name: 'jade',
        component: Jade
    },
    { 
        path: '/:pathMatch(.*)*', 
        name: 'NotFound', 
        component: Unknown }
];


const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(() => {
    window.scrollTo(0, 0);
})

export default router
<script>
import { RouterLink } from 'vue-router';

export default {
    data() {
        return {
            isDark: localStorage.theme === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches,
            menuOn: false
        }
    },
    computed: {
        darkModeIcon() {
            return this.isDark ? 'fa-moon' : 'fa-sun'
        }
    },
    methods: {
        switchTheme() {
            const isDark = document.documentElement.classList.toggle('dark');
            if (!('theme' in localStorage)) {
                if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    localStorage.theme = 'light'
                } else {
                    localStorage.theme = 'dark'
                }
            } else {
                localStorage.theme =  isDark ? 'dark' : 'light'
            }
            this.isDark = !this.isDark
        },
        showMenu() {
            this.menuOn = !this.menuOn
        }
    }
}
</script>

<template>
<nav class="fixed sm:sticky w-full top-0 z-50 overflow-visible">
    <div>
        <div class="flex flex-col">
            <div class="flex flex-row">
                <button class="absolute top-6 right-10 z-50">
                    <i :class="{'text-white -rotate-90': menuOn, 'text-black rotate-0': !menuOn}" class="fa-solid fa-bars text-black dark:text-white text-2xl transition-all duration-300 ease-in-out" @click="showMenu" ></i>
                </button>
            </div>
            <div :class="{'translate-y-full': !menuOn, 'translate-y-0': menuOn}" class="text-white flex flex-col justify-center items-center py-5 h-screen gap-y-10 font-sans text-2xl bg-purple text-red z-5 bg-blue-800 dark:bg-blue-900 origin-top transition-all duration-300 ease-in-out">
                <RouterLink to="/" class="hover:text-teal-500 transition-colors duration-200 ease-in-out" @click="showMenu">Home</RouterLink>
                <RouterLink to="/about" class="hover:text-teal-500 transition-colors duration-200 ease-in-out" @click="showMenu">About</RouterLink>
                <RouterLink to="/projects" class="hover:text-teal-500 transition-colors duration-200 ease-in-out" @click="showMenu">Projects</RouterLink>
                
                <a href="/Jake Gustin - Resume - CS.pdf" target="_blank" class="hover:text-teal-500 transition-colors duration-200 ease-in-out" @click="showMenu">Resume</a>
                <RouterLink to="/contact" class="hover:text-teal-500 transition-colors duration-200 ease-in-out" @click="showMenu">Contact</RouterLink>
                <button>
                    <i @click="switchTheme" :class="darkModeIcon" class="fa-solid text-white"></i>
                </button>
            </div>
        </div>

    </div>
</nav>
</template>
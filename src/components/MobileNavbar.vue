<!-- Navbar used for mobile devices or other small screens -->

<script>
import { RouterLink } from 'vue-router';

export default {
    data() {
        return {
            isDark: localStorage.theme === 'dark' || (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches),
            menuOn: false
        }
    },
    computed: {
        darkModeIcon() {
            return this.isDark ? 'fa-moon' : 'fa-sun'
        }
    },
    methods: {

        // Handles light/dark mode switching
        switchTheme() {
            const isDarkAfterToggle = document.documentElement.classList.toggle('dark');
            localStorage.theme =  isDarkAfterToggle ? 'dark' : 'light'
            this.isDark = !this.isDark
        },
        showMenu() {
            this.menuOn = !this.menuOn
        }
    }
}
</script>

<template>
<nav class="fixed sm:sticky w-full top-0 z-30 overflow-visible">
    <div>
        <div class="flex flex-col">

            <!-- Menu Button -->
            <div class="flex flex-row">
                <button class="absolute top-6 right-10 z-40">
                    <i :class="{'text-white -rotate-90': menuOn, 'text-black rotate-0': !menuOn}" class="fa-solid fa-bars text-black dark:text-white text-2xl transition-all duration-300 ease-in-out" @click="showMenu" ></i>
                </button>
            </div>

            <div :class="{'translate-y-full pointer-events-none top-full': !menuOn, 'translate-y-0 pointer-events-auto top-0': menuOn}" class="fixed left-0 w-full text-white flex flex-col justify-center items-center min-h-screen gap-y-10 text-2xl bg-blue-800 dark:bg-blue-900 transition-all duration-300 ease-in-out">
                
                <!-- Menu Options -->
                <RouterLink to="/" class="hover:text-teal-500 transition-colors duration-200 ease-in-out" @click="showMenu">Home</RouterLink>
                <RouterLink to="/about" class="hover:text-teal-500 transition-colors duration-200 ease-in-out" @click="showMenu">About</RouterLink>
                <RouterLink to="/projects" class="hover:text-teal-500 transition-colors duration-200 ease-in-out" @click="showMenu">Projects</RouterLink>
                <a href="/Jake Gustin - Resume - CS.pdf" target="_blank" class="hover:text-teal-500 transition-colors duration-200 ease-in-out" @click="showMenu">Resume</a>
                <RouterLink to="/contact" class="hover:text-teal-500 transition-colors duration-200 ease-in-out" @click="showMenu">Contact</RouterLink>
                
                <!-- Light/Dark Mode Button -->
                <button>
                    <i @click="switchTheme" :class="darkModeIcon" class="fa-solid text-white"></i>
                </button>
            </div>
        </div>

    </div>
</nav>
</template>
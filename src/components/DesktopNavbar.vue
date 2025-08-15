<script>
import { RouterLink } from 'vue-router';

export default {
    data() {
        return {
            projectDropdownState: false,
            isDark: localStorage.theme === 'dark' || (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches),
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
        }
    }
}
</script>

<template>
<nav class="fixed sm:sticky w-full top-0 z-30 overflow-visible">
    <div>
        <div class="flex flex-row justify-center py-5 gap-x-5 md:gap-x-10 lg:gap-x-20 text-2xl bg-blue-800 dark:bg-blue-900 transition-colors duration-300 ease-in-out text-slate-100">
            
            <!-- Menu Options -->
            <RouterLink to="/" class="hover:text-teal-500 transition-colors duration-200 ease-in-out">Home</RouterLink>
            <RouterLink to="/about" class="hover:text-teal-500 transition-colors duration-200 ease-in-out">About</RouterLink>
            <div id="navbarProjects"
                class="relative hover:text-teal-500 transition-colors duration-200 ease-in-out" 
                @mouseenter="projectDropdownState = true" 
                @mouseleave="projectDropdownState = false"
            >
                <RouterLink to="/projects">Projects</RouterLink>
                
                <!-- Dropdown Options for Projects -->
                <div 
                :class="{'opacity-100 scale-100 visible': projectDropdownState,  'opacity-0 scale-95 invisible': !projectDropdownState}"
                class='absolute left-0 mt-2 w-36 text-lg bg-white border border-gray-300 rounded shadow-lg transition-all duration-100 ease-in-out transform origin-top'
                >
                    <RouterLink to="/projects/lapsim" class="block px-4 py-2 text-gray-700 hover:bg-gray-100" @click="projectDropdownState = false">LapSim</RouterLink>
                    <RouterLink to="/projects/portfolio" class="block px-4 py-2 text-gray-700 hover:bg-gray-100" @click="projectDropdownState = false">Portfolio</RouterLink>
                    <RouterLink to="/projects/jade" class="block px-4 py-2 text-gray-700 hover:bg-gray-100" @click="projectDropdownState = false">Jade</RouterLink>
                </div>
            </div>
            
            <a href="/Jake Gustin - Resume - CS (General).pdf" target="_blank" class="hover:text-teal-500 transition-colors duration-200 ease-in-out">Resume</a>
            <RouterLink to="/contact" class="hover:text-teal-500 transition-colors duration-200 ease-in-out">Contact</RouterLink>

            <!-- Light/Dark Mode Button -->
            <button class="absolute top=6 right-10">
                <i @click="switchTheme" :class="darkModeIcon" class="fa-solid text-white"></i>
            </button>
        </div>
        
        <hr class="border-slate-900 border-2 flex w-full"/>
    </div>
</nav>
</template>

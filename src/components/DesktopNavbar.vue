<script>
import { RouterLink } from 'vue-router';

export default {
    data() {
        return {
            projectDropdownState: false
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
        }
    }
}
</script>

<template>
<nav class="fixed sm:sticky w-full top-0 z-50 overflow-visible">
    <div>
        <div class="flex flex-row justify-center py-5 gap-x-5 md:gap-x-10 lg:gap-x-20 font-sans text-2xl bg-blue-800 text-slate-100">
            <RouterLink to="/" class="hover:text-teal-500 transition-colors duration-200 ease-in-out">Home</RouterLink>
            <RouterLink to="/about" class="hover:text-teal-500 transition-colors duration-200 ease-in-out">About</RouterLink>
            <div id="navbarProjects"
                class="relative hover:text-teal-500 transition-colors duration-200 ease-in-out" 
                @mouseenter="projectDropdownState = true" 
                @mouseleave="projectDropdownState = false"
            >
                <RouterLink to="/projects">Projects</RouterLink>
                <div 
                :class="{'opacity-100 scale-100 visible': projectDropdownState,  'opacity-0 scale-95 invisible': !projectDropdownState}"
                class='absolute left-0 mt-2 w-36 text-lg bg-white border border-gray-300 rounded shadow-lg transition-all duration-100 ease-in-out transform origin-top'
                >
                    <RouterLink to="/projects/lapsim" class="block px-4 py-2 text-gray-700 hover:bg-gray-100" @click="projectDropdownState = false">LapSim</RouterLink>
                    <RouterLink to="/projects/portfolio" class="block px-4 py-2 text-gray-700 hover:bg-gray-100" @click="projectDropdownState = false">Portfolio</RouterLink>
                    <RouterLink to="/projects/jade" class="block px-4 py-2 text-gray-700 hover:bg-gray-100" @click="projectDropdownState = false">Jade</RouterLink>
                </div>
            </div>
            
            <a href="/Jake Gustin - Resume - CS.pdf" target="_blank" class="hover:text-teal-500 transition-colors duration-200 ease-in-out">Resume</a>
            <RouterLink to="/contact" class="hover:text-teal-500 transition-colors duration-200 ease-in-out">Contact</RouterLink>
            <!--TODO: Make dark mode
            <button class="absolute right-6 top-6 bg-white rounded-full w-12 h-12 overflow-hidden">
                <i class="fa-solid fa-moon text-black hover:text-yellow-500 transition-colors duration-200 ease-in-out"></i>
            </button>
            -->
            <button class="absolute top=6 right-10">
                <i @click="switchTheme" class="fa-solid fa-circle-half-stroke"></i>
            </button>
        </div>
        
        <hr class="border-slate-900 border-2 flex w-full"/>
    </div>
</nav>
</template>
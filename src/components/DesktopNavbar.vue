<script>
export default {
    data() {
        return {
            projectDropdownState: true
        }
    }
}
</script>

<template>
    <div class="sticky top-0">
        <div class="flex flex-row justify-center p-8 gap-x-5 md:gap-x-10 lg:gap-x-20 font-sans text-2xl bg-blue-800 text-slate-100">
            <a href="#/" class="hover:text-teal-500 transition-colors duration-200 ease-in-out">Home</a>
            <a href="#/about" class="hover:text-teal-500 transition-colors duration-200 ease-in-out">About</a>
            <div id="navbarProjects"
                class="relative hover:text-teal-500 transition-colors duration-200 ease-in-out" 
                @mouseenter="projectDropdownState = true" 
                @mouseleave="projectDropdownState = false"
            >
                <a href="#/projects">Projects</a>
                <div 
                :class="{'opacity-100 scale-100 visible': projectDropdownState,  'opacity-0 scale-95 invisible': !projectDropdownState}"
                class='absolute left-0 mt-2 w-36 text-lg bg-white border border-gray-300 rounded shadow-lg transition-all duration-100 ease-in-out transform origin-top'
                >
                    <a href="#/projects/lapsim" class="block px-4 py-2 text-gray-700 hover:bg-gray-100" @click="projectDropdownState = false">LapSim</a>
                    <a href="#/projects/portfolio" class="block px-4 py-2 text-gray-700 hover:bg-gray-100" @click="projectDropdownState = false">Portfolio</a>
                    <a href="#/projects/jade" class="block px-4 py-2 text-gray-700 hover:bg-gray-100" @click="projectDropdownState = false">Jade</a>
                </div>
            </div>
            
            <a href="/Jake Gustin - Resume - CS.pdf" target="_blank" class="hover:text-teal-500 transition-colors duration-200 ease-in-out">Resume</a>
            <a href="#/contact" class="hover:text-teal-500 transition-colors duration-200 ease-in-out">Contact</a>
            <!--TODO: Make dark mode
            <button class="absolute right-6 top-6 bg-white rounded-full w-12 h-12 overflow-hidden">
                <i class="fa-solid fa-moon text-black hover:text-yellow-500 transition-colors duration-200 ease-in-out"></i>
            </button>
            -->
        </div>
        <hr class="border-slate-900 border-2 flex w-full"/>
    </div>
</template>
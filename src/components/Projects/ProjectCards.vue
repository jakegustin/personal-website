<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="flex flex-col items-center gap-y-10 pb-24">
        <div class="flex flex-row bg-white shadow-xl border-2 border-slate-400 w-3/4 h-80 rounded-2xl overflow-hidden place-items-center">
            <img src="../../assets/lapsimcardimg.png" class="w-1/4 h-full object-cover" />
            <div class="flex flex-col justify-between w-3/4 h-full pt-5 pb-5 px-3 text-center">
                <h2 class="font-sans text-3xl font-bold">LapSim</h2>
                <h3 class="font-sans text-xl pb-5">Creating Race Day Simulations with C and Bash</h3>
                <p class="pb-10">hey</p>
                <RouterLink to="/projects/lapsim">
                    <button class="w-60 h-20 bg-gray-800 text-white text-xl rounded-2xl font-sans hover:scale-110 transition-transform duration-100 shadow-xl">Learn More</button>
                </RouterLink>
            </div>
        </div>
        <div class="flex flex-row bg-white shadow-xl border-2 border-slate-400 w-3/4 h-80 rounded-2xl overflow-hidden place-items-center">
            <img src="../../assets/websitecodeimg.jpg" class="w-1/4 h-full object-cover" />
            <div class="flex flex-col justify-between w-3/4 h-full pt-5 pb-5 px-3 text-center">
                <h2 class="font-sans text-3xl font-bold">Portfolio</h2>
                <h3 class="font-sans text-xl pb-5">Showing Off with Vite, Vue, and Tailwind CSS</h3>
                <p class="pb-10">hey</p>
                <RouterLink to="/projects/portfolio">
                    <button class="w-60 h-20 bg-gray-800 text-white text-xl rounded-2xl font-sans hover:scale-110 transition-transform duration-100 shadow-xl">Learn More</button>
                </RouterLink>
            </div>
        </div>
        <div class="flex flex-row bg-white shadow-xl border-2 border-slate-400 w-3/4 h-80 rounded-2xl overflow-hidden place-items-center">
            <img src="../../assets/jadeimg.jpg" class="w-1/4 h-full object-cover" />
            <div class="flex flex-col justify-between w-3/4 h-full pt-5 pb-5 px-3 text-center">
                <h2 class="font-sans text-3xl font-bold">Jade</h2>
                <h3 class="font-sans text-xl pb-5">Building Up from MIT's Open Source Schematic Software</h3>
                <p class="pb-10">hey</p>
                <RouterLink to="/projects/portfolio">
                    <button class="w-60 h-20 bg-gray-800 text-white text-xl rounded-2xl font-sans hover:scale-110 transition-transform duration-100 shadow-xl">Learn More</button>
                </RouterLink>
            </div>
        </div>
    </div>
</template>
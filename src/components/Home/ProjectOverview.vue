<!-- Project Overview Section of Home Page -->

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <h2 class="flex text-4xl font-bold place-content-center text-center pt-16 pb-5">Check Out My Featured Projects!</h2>
    <div id="projectOverviewContainer" class="flex flex-wrap place-content-center gap-x-10 gap-y-10 pb-24 px-3">
        <RouterLink to="/projects/lapsim">
            <div id="projectLapSimContainer" class="flex flex-col bg-white dark:bg-slate-700 shadow-xl border-2 border-slate-400 w-60 h-80 rounded-2xl overflow-hidden place-items-center hover:scale-110 transition-all duration-300">
                <img src="../../assets/lapsimcardimg.png" class="w-full h-2/3 object-cover" />
                <h4 class="text-xl pt-5 pb-2 font-bold">LapSim</h4>
                <p class="text-m text-center px-3">Creating Race Day Simulations with C and Bash</p>
            </div>
        </RouterLink>
        <RouterLink to="/projects/portfolio">
            <div id="projectWebsiteContainer" class="flex flex-col bg-white dark:bg-slate-700 shadow-xl border-2 border-slate-400 w-60 h-80 rounded-2xl overflow-hidden place-items-center hover:scale-110 transition-all duration-300">
                <img src="../../assets/portfoliocardimg.jpg" class="w-full h-2/3 object-cover" />
                <h4 class="text-xl pt-5 pb-2 font-bold">Portfolio</h4>
                <p class="text-m text-center px-3">Introducing Myself with Vite, Vue, and Tailwind CSS</p>
            </div>
        </RouterLink>
        <RouterLink to="/projects/jade">
            <div id="projectJadeContainer" class="flex flex-col bg-white dark:bg-slate-700 shadow-xl border-2 border-slate-400 w-60 h-80 rounded-2xl overflow-hidden place-items-center hover:scale-110 transition-all duration-300">
                <img src="../../assets/jadecardimg.jpg" class="w-full h-2/3 object-cover" />
                <h4 class="text-xl pt-5 pb-2 font-bold">Jade</h4>
                <p class="text-m text-center px-3">Building Up from MIT's Open Source Schematic Software</p>
            </div>
        </RouterLink>
    </div>
</template>
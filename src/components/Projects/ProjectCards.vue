<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="flex flex-col items-center gap-y-10 pb-24">
        <div class="flex flex-col sm:flex-row bg-white dark:bg-slate-700 shadow-xl border-2 border-slate-400 w-3/4 sm:h-80 h-fit rounded-2xl overflow-hidden place-items-center">
            <img src="../../assets/lapsimcardimg.png" class="flex sm:w-1/2 md:w1-1/3 lg:w-1/4 w-full sm:h-full h-64 object-cover" />
            <div class="flex flex-col justify-between sm:w-3/4 w-full sm:h-full h-3/4 pt-5 pb-5 px-3 text-center">
                <h2 class="font-sans text-xl md:text-2xl lg:text-3xl font-bold">LapSim</h2>
                <h3 class="font-sans text-md md:text-2xl lg:text-lg pb-2">Creating Race Day Simulations with C and Bash</h3>
                <p class="text-sm md:text-md lg:text-lg pb-5">A simulation and analysis tool used to introduce the client-server model to students while  
                    reinforcing the fundamentals of a low-level, undergraduate systems course.
                </p>
                <RouterLink to="/projects/lapsim">
                    <button class="w-60 h-16 lg:h-20 bg-gray-800 text-white text-xl rounded-2xl font-sans hover:scale-110 transition-transform duration-100 shadow-xl">Explore LapSim</button>
                </RouterLink>
            </div>
        </div>
        <div class="flex flex-col sm:flex-row bg-white dark:bg-slate-700 shadow-xl border-2 border-slate-400 w-3/4 sm:h-80 h-fit rounded-2xl overflow-hidden place-items-center">
            <img src="../../assets/portfoliocardimg.jpg" class="flex sm:w-1/2 md:w1-1/3 lg:w-1/4 w-full sm:h-full h-64 object-cover" />
            <div class="flex flex-col justify-between sm:w-3/4 w-full sm:h-full h-3/4 pt-5 pb-5 px-3 text-center">
                <h2 class="font-sans text-xl md:text-2xl lg:text-3xl font-bold">Portfolio</h2>
                <h3 class="font-sans text-md md:text-2xl lg:text-lg pb-2">Introducing Myself with Vite, Vue, and Tailwind CSS</h3>
                <p class="text-sm md:text-md lg:text-lg pb-5">My resume in an interactive format! Learn more about the behind-the-scenes action of what went
                    into making the website you're currently browsing through.
                </p>
                <RouterLink to="/projects/portfolio">
                    <button class="w-60 h-16 lg:h-20 bg-gray-800 text-white text-xl rounded-2xl font-sans hover:scale-110 transition-transform duration-100 shadow-xl">Explore Portfolio</button>
                </RouterLink>
            </div>
        </div>
        <div class="flex flex-col sm:flex-row bg-white dark:bg-slate-700 shadow-xl border-2 border-slate-400 w-3/4 sm:h-80 h-fit rounded-2xl overflow-hidden place-items-center">
            <img src="../../assets/jadecardimg.jpg" class="flex sm:w-1/2 md:w1-1/3 lg:w-1/4 w-full sm:h-full h-64 object-cover" />
            <div class="flex flex-col justify-between sm:w-3/4 w-full sm:h-full h-3/4 pt-5 pb-5 px-3 text-center">
                <h2 class="font-sans text-xl md:text-2xl lg:text-3xl font-bold">Jade</h2>
                <h3 class="font-sans text-md md:text-2xl lg:text-lg pb-2">Building Up from MIT's Open Source Schematic Software</h3>
                <p class="text-sm md:text-md lg:text-lg pb-5">A schematic simulation tool designed for students just starting out in computer science to introduce
                    them to the inner workings of the processors used by many modern computing devices.
                </p>
                <RouterLink to="/projects/jade">
                    <button class="w-60 h-16 lg:h-20 bg-gray-800 text-white text-xl rounded-2xl font-sans hover:scale-110 transition-transform duration-100 shadow-xl">Explore Jade</button>
                </RouterLink>
            </div>
        </div>
    </div>
</template>
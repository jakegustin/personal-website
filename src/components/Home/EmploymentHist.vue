<!-- Employment History Component of Home Page -->

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="bg-blue-800 dark:bg-blue-900 text-slate-100 py-16 border-black border-y-4 transition-colors duration-300 ease-in-out">
        <h2 class="flex text-4xl font-bold place-content-center text-center py-5 px-5">I've Been Employed at These Organizations</h2>
        <div class="flex justify-center pb-5 rounded-2xl">
            <ul class="list-none flex flex-col px-5 items-center gap-y-3">
                <li class="text-2xl md:text-3xl mb-5 flex flex-row items-center w-full">
                    <i class="fa-solid fa-code text-5xl w-24 text-center flex-shrink-0"></i>
                    <span class="text-left pl-5">DataAnnotation</span>
                </li>
                <li class="text-2xl md:text-3xl mb-5 flex flex-row items-center w-full">
                    <i class="fa-solid fa-graduation-cap text-5xl w-24 text-center flex-shrink-0"></i>
                    <span class="text-left pl-5">Boston University</span>
                </li>
                <li class="text-2xl md:text-3xl mb-5 flex flex-row items-center w-full">
                    <i class="fa-brands fa-microsoft text-5xl w-24 text-center  flex-shrink-0"></i>
                    <span class="text-left pl-5">Microsoft (formerly Nuance Communications)</span>
                </li>
                <li class="text-2xl md:text-3xl mb-5 flex flex-row items-center w-full">
                    <i class="fa-solid fa-question text-5xl w-24 text-center  flex-shrink-0"></i>
                    <span class="text-left pl-5">Hiring? Your organization could be <RouterLink to="/contact" class="hover:underline text-teal-400 font-extrabold">next!</RouterLink></span>
                </li>
            </ul>
        </div>
    </div>
</template>
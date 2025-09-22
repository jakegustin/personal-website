<!-- Contact Page -->

<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
<div class="flex flex-col justify-center py-16 px-5">

    <!-- Title/Header -->
    <h1 class="text-6xl md:text-8xl font-bold text-center pb-10">Contact <span class="text-blue-700 font-extrabold  transition-colors duration-300 ease-in-out">Me</span></h1>
    <p class="text-lg md:text-2xl text-center pb-20">I'm always searching for my next opportunity and look forward to hearing from you! Here's where you can find or reach out to me: </p>
    <div class="flex justify-center bg-blue-800 dark:bg-blue-900 text-white rounded-2xl py-5 max-w-3xl w-full mx-auto transition-colors duration-300 ease-in-out">
      <ul class="flex flex-col list-none items-center gap-y-5 text-lg sm:text-3xl">
        
        <!-- Email -->
        <li class="flex flex-row items-center w-full">
            <i class="fa-solid fa-envelope text-3xl w-16 sm:text-4xl sm:w-24 text-center flex-shrink-0"></i>
            <a href="mailto:jakegustin@proton.me" target="_blank" class="text-teal-500 hover:underline text-left">jakegustin@proton.me</a>
        </li>

        <!-- GitHub -->
        <li class="flex flex-row items-center  w-full">
            <i class="fa-brands fa-github text-3xl w-16 sm:text-4xl sm:w-24 text-center flex-shrink-0"></i>
            <a href="https://www.github.com/jakegustin" target="_blank" class="text-teal-500 hover:underline text-left">jakegustin</a>
        </li>

        <!-- LinkedIn -->
        <li class="flex flex-row items-center w-full">
            <i class="fa-brands fa-linkedin text-3xl w-16 sm:text-4xl sm:w-24 text-center flex-shrink-0"></i>
            <a href="https://www.linkedin.com/in/gustinj" target="_blank" class="text-teal-500 hover:underline text-left">gustinj</a>
        </li>
      </ul>
    </div>
</div>
</template>

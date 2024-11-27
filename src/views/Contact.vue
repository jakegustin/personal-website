<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="flex flex-row justify-center gap-x-24 px-24 pt-10 pb-16">
        <!--
        <div class="place-content-start" id="pfp">
            <img src="../assets/testImage.png" class="min-w-96 pb-10"/>
        </div>
        -->
        <div class="flex flex-col justify-center py-10">
            <h1 class="text-8xl font-sans font-bold text-center pb-10">Contact <span class="text-blue-800 font-extrabold">Me</span></h1>
            <p class="text-2xl text-center pb-2">I'm always looking forward to my next opportunity and look forward to hearing from you! </p>
            <p class="text-2xl text-center pb-20">Here's where you can find or reach out to me:</p>
            <ul class="flex flex-col list-disc text-2xl items-center text-center list-inside gap-y-5 bg-blue-800 py-10 rounded-2xl w-1/2 mx-auto">
              <li class="text-white">Email: <a href="mailto:jakegust2020@gmail.com" class="text-teal-500 hover:underline">jakegust2020@gmail.com</a></li>
              <li class="text-white">GitHub: <a href="https://www.github.com/jakegustin" class="text-teal-500 hover:underline">https://www.github.com/jakegustin</a></li>
              <li class="text-white">LinkedIn: <a href="https://www.linkedin.com/in/gustinj" class="text-teal-500 hover:underline">https://www.linkedin.com/in/gustinj</a></li>
            </ul>
            <p class="text-xl text-center justify-center pt-20 w-1/2 mx-auto">
              <span class="font-bold">For all business/hiring inquiries: </span>Please reach out via email.  
              Providing an anticipated salary range along with a description of the role in your initial message will ensure a quicker response.
            </p>
        </div>
    </div>
</template>
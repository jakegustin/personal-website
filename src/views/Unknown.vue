<!-- 404 / Unknown Location Page -->

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="h-screen">
    <h1 class="text-6xl text-center py-10">Oh No!</h1>
    <p class="text-3xl text-center pb-52">It looks like you got lost somewhere along the way...</p>
    <RouterLink to="/" class="flex justify-center">
      <button class="text-2xl bg-slate-800 rounded-2xl py-5 px-3 w-80 text-white hover:scale-110 transition-transform duration-200 ease-in-out">Return Home</button>
    </RouterLink>
  </div>

</template>

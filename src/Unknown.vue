<script>
import DesktopNavbar from "./components/DesktopNavbar.vue"

export default {
    components: {
        DesktopNavbar
    }
}
</script>

<template>
  <div class="flex flex-col min-h-screen bg-slate-200">
    <DesktopNavbar/>
    <h1 class="text-6xl text-center py-10">Oh No!</h1>
    <p class="text-3xl text-center pb-52">It looks like you got lost somewhere along the way...</p>
    <a href="#/" class="place-self-center"> <!--TODO: Actually set up Vue-Router-->
      <button class="text-2xl bg-slate-800 rounded-2xl py-5 px-3 text-white">Anyways, let's go home.</button>
    </a>
  </div>
</template>

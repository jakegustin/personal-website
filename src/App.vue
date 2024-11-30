<script>
import DesktopNavbar from "./components/DesktopNavbar.vue";
import MobileNavbar from "./components/MobileNavbar.vue";
import { RouterView } from "vue-router";

export default {
    components: {
      DesktopNavbar,
      MobileNavbar
    }
}
</script>

<template>
  <div class="bg-slate-200 dark:bg-slate-800 text-black dark:text-white min-h-screen relative sm:pt-0 transition-colors duration-300 ease-in-out">
    <DesktopNavbar class="hidden md:block"/>
    <MobileNavbar class="md:hidden"/>
    <RouterView />
  </div>
</template>

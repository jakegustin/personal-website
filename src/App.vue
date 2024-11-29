<script>
import DesktopNavbar from "./components/DesktopNavbar.vue";
import { RouterView } from "vue-router";

export default {
    components: {
      DesktopNavbar
    }
}
</script>

<template>
  <div class="bg-slate-200 dark:bg-slate-900 text-black dark:text-white min-h-screen relative pt-16 sm:pt-0">
    <DesktopNavbar/>
    <RouterView />
  </div>
</template>

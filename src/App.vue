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
  <div class="bg-slate-200 min-h-screen relative pt-16 sm:pt-0">
    <DesktopNavbar/>
    <RouterView />
  </div>
</template>

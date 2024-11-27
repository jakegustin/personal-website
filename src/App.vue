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
  <div class="bg-slate-200 min-h-screen">
    <DesktopNavbar/>
    <main class="pt-16">
      <RouterView />
    </main>
  </div>
</template>

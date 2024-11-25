<script>
import DesktopNavbar from "./components/DesktopNavbar.vue";
import Unknown from "./views/Unknown.vue";
import { RouterView } from "vue-router";

export default {
    data() {
      return {
        currentPath: window.location.hash
      }
    },
    computed: {
      currentView() {
        return routes[this.currentPath.slice(1) || '/'] || Unknown
      }
    },
    mounted() {
      window.addEventListener('hashchange', () => {
        this.currentPath = window.location.hash
      })
    },
    components: {
      DesktopNavbar
    }
}
</script>

<template>
  <div class="bg-slate-200">
    <DesktopNavbar/>
    <RouterView />
  </div>
</template>

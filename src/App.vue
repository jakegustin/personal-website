<script>
import Home from "./Home.vue";
import About from "./About.vue";
import Projects from "./Projects.vue";
import Contact from "./Contact.vue";
import Unknown from "./Unknown.vue";

import DesktopNavbar from "./components/DesktopNavbar.vue";

const routes = {
  '/': Home,
  '/about': About,
  '/projects': Projects,
  '/contact': Contact,
}

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
    <component :is="currentView"/>
  </div>
</template>

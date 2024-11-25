<script>
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Projects from "./views/Projects.vue";
import Contact from "./views/Contact.vue";
import Unknown from "./views/Unknown.vue";
import LapSim from "./views/LapSim.vue";
import Portfolio from "./views/Portfolio.vue";
import Jade from "./views/Jade.vue";

import DesktopNavbar from "./components/DesktopNavbar.vue";

const routes = {
  '/': Home,
  '/about': About,
  '/projects': Projects,
  '/contact': Contact,
  '/projects/lapsim': LapSim,
  '/projects/portfolio': Portfolio,
  '/projects/jade': Jade
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

<script>
import DesktopNavbar from "./components/DesktopNavbar.vue";
import MobileNavbar from "./components/MobileNavbar.vue";
// import Loader from "./Loader.vue";
import { RouterView } from "vue-router";

const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
  let input = [];

  document.addEventListener('keydown', function(event) {
      input.push(event.code);
      input = input.slice(-konamiCode.length); // Keep the last N inputs

      if (input.join('') === konamiCode.join('')) {
          alert('You unlocked a secret! 🎉');
      }
  });

export default {
    components: {
      DesktopNavbar,
      MobileNavbar,
    }
}
</script>

<template>
  <!--<Loader/>-->
  <div class="bg-slate-200 dark:bg-slate-800 text-black dark:text-white min-h-screen relative sm:pt-0 transition-colors duration-300 ease-in-out">
    <DesktopNavbar class="hidden md:block"/>
    <MobileNavbar class="md:hidden"/>
    <RouterView />
  </div>
</template>

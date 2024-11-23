<script>
import DesktopNavbar from "./components/DesktopNavbar.vue"
import BigInfo from "./components/BigInfo.vue"
import Hero from "./components/Hero.vue"
import ProjectOverview from "./components/ProjectOverview.vue";

export default {
    components: {
        DesktopNavbar,
        BigInfo,
        Hero,
        ProjectOverview
    }
}
</script>

<template>
  <div class="bg-gradient-to-br from-white to-gray-400">
    <DesktopNavbar/>
    <BigInfo/>
    <Hero/>
    <ProjectOverview/>
  </div>
</template>

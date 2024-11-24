<script>
import DesktopNavbar from "./components/DesktopNavbar.vue"
import BigInfo from "./components/BigInfo.vue"
import Hero from "./components/Hero.vue"
import ProjectOverview from "./components/ProjectOverview.vue";
import EmploymentHist from "./components/EmploymentHist.vue";

export default {
    components: {
        DesktopNavbar,
        BigInfo,
        Hero,
        ProjectOverview,
        EmploymentHist
    }
}
</script>

<template>
  <div class="bg-slate-200">
    <DesktopNavbar/>
    <!--<BigInfo/>-->
    <Hero/>
    <EmploymentHist/>
    <ProjectOverview/>
  </div>
</template>

<script>
import Hero from "../components/Home/Hero.vue"
import ProjectOverview from "../components/Home/ProjectOverview.vue";
import EmploymentHist from "../components/Home/EmploymentHist.vue";

export default {
    components: {
        Hero,
        ProjectOverview,
        EmploymentHist
    }
}
</script>

<template>
  <Hero/>
  <EmploymentHist/>
  <ProjectOverview/>
</template>

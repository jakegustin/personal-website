<script>
import { RouterLink } from 'vue-router';
import ContactFooter from '../components/ContactFooter.vue';
import ExternalLinkButton from '../components/ExternalLinkButton.vue';

export default {
    data() {
      return {
        visibleHeader: false
      }
    },
    methods: {
      goToRepo() {
        window.open("https://github.com/jakegustin/jade", "_blank")
      }
    },
    mounted() {
      setTimeout(() => {
        this.visibleHeader = true // Update visibility for each element
      }, 500); // Delay increases for each element (e.g., 0ms, 500ms, 1000ms, etc.)
    },
    components: {
      ContactFooter,
      ExternalLinkButton
    }
  }
</script>

<template>
    <div class="flex flex-row justify-center gap-x-24 pb-16">
        <!--
        <div class="place-content-start" id="pfp">
            <img src="../assets/testImage.png" class="min-w-96 pb-10"/>
        </div>
        -->
        <div class="flex flex-col justify-center gap-y-10">
            <h1 class=" bg-[url('../src/assets/jadebannerimg.png')] bg-cover bg-center h-80 text-6xl sm:text-8xl font-bold text-center content-center text-white">Jade</h1>
            <div class="flex flex-col lg:flex-row gap-x-5 lg:px-24">
              <div class="flex flex-col gap-y-20 w-full lg:w-4/5 px-14 lg:px-10">
                <div class="flex flex-col gap-y-3 text-lg">
                  <h2 class="text-4xl font-bold">Processor Architecture Made <span :class="visibleHeader ? 'opacity-100' : 'opacity-0'" class="transition-opacity duration-1000 ease-in-out text-blue-800 dark:text-blue-700 font-extrabold">Simple.</span></h2>
                  <div class="flex flex-row gap-x-10 pt-5 items-center justify-center">
                    <h3 class="text-2xl font-bold ">Languages Used: </h3>
                    <ul class="flex flex-wrap gap-x-10 list-disc text-xl">
                      <li>Javascript</li>
                      <li>Python</li>
                      <li>Bash</li>
                    </ul>
                  </div>
                  <p class="pt-5">
                      With processor architecture being a new addition to the core undergraduate systems course at my alma mater, there were many aspects of
                      the course that needed to be updated and refined, including the lecture content and the assigned problem sets. The Jade schematic simulation
                      tool was a core component of this addition, but revisions were necessary to incorporate it into the existing course structure.
                  </p>
                  <br/>
                  <h3 class="text-2xl font-semibold">Key Contributions</h3>
                  <ul class="list-disc">
                    <li class="pb-5 text-xl font-medium">Netlist Extraction to Allow Autograding
                      <p class="text-lg font-normal">
                      I utilized Javascript and Python to allow users to extract a "netlist" - a file indicating how components in the schematic were 
                      connected. This allowed students to submit a file that can be graded automatically rather than requiring staff members to manually
                      run the tests within the application. 
                      </p>
                    </li>
                    <li class="pb-5 text-xl font-medium">Refined Autograding Mechanisms
                      <p class="text-lg font-normal">
                        I refined the testing suite to ensure that submitted designs were not only correct,
                        but also efficient by measuring time delays throughout the design with metrics such as propagation delay. 
                        The results of this evaluation were passed to the course's grading software,
                        providing students with detailed results and feedback within minutes without staff intervention.
                      </p>
                    </li>
                  </ul>
                  <h3 class="text-2xl font-semibold">Usability Enhancements</h3>
                  <p>In addition to the aforementioned changes, other adjustments were made to improve the user experience as a whole. This includes:</p>
                  <ul class="list-disc pl-4">
                    <li>Autosave Functionality</li>
                    <li>Component Isolation/Merging</li>
                    <li>Improved Error Checking</li>
                  </ul>
                  <br/>
                  <p>
                    These changes have allowed Jade to become a key educational resource for students and staff alike, though there is still
                    much room for improvement in the future.
                  </p>
                  <br/>
                  <div class="flex flex-wrap items-center gap-x-10 gap-y-5">
                    <p class="font-bold text-2xl">Source Code: </p>
                    <ExternalLinkButton link="https://www.github.com/jakegustin/jade"/>
                  </div>
                  <br/>
                </div>
              </div>
              <div class="flex flex-col gap-y-20 items-center w-11/12 mx-auto">
                <img src="/src/assets/jadeuiimg.png">
                <img src="/src/assets/jadetestimg.png">
              </div>
            </div>    
        </div>
    </div>
    <ContactFooter/>
</template>
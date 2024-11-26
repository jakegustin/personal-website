<script>
import { RouterLink } from 'vue-router';

export default {
    data() {
      return {
        visibleHeader: [false, false, false, false]
      }
    },
    mounted() {
      this.visibleHeader.forEach((_, index) => {
      setTimeout(() => {
        this.visibleHeader[index] = true // Update visibility for each element
      }, index * 1000); // Delay increases for each element (e.g., 0ms, 500ms, 1000ms, etc.)
    });
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
            <h1 class=" bg-[url('../src/assets/lapsimheader.png')] bg-cover bg-center h-80 text-8xl font-sans font-bold text-center content-center text-white">LapSim</h1>
            <div class="flex flex-row gap-x-5 px-24">
              <div class="flex flex-col gap-y-20 w-4/5 px-10">
                <div class="flex flex-col gap-y-3 text-lg">
                  <h2 :class="visibleHeader[0] ? 'opacity-100' : 'opacity-0'" class="text-4xl font-bold transition-opacity duration-1000 ease-in-out">300+ Students,</h2>
                  <h2 :class="visibleHeader[1] ? 'opacity-100' : 'opacity-0'" class="text-4xl font-bold transition-opacity duration-1000 ease-in-out">7 Days,</h2>
                  <h2 :class="visibleHeader[2] ? 'opacity-100' : 'opacity-0'" class="text-4xl font-bold transition-opacity duration-1000 ease-in-out">1 Project,</h2>
                  <h2 :class="visibleHeader[3] ? 'opacity-100' : 'opacity-0'" class="text-4xl font-extrabold transition-opacity duration-1000 ease-in-out text-blue-800">Endless Possibilities.</h2>
                  <div class="flex flex-row gap-x-10 pt-5 items-center justify-center">
                    <h3 class="text-2xl font-bold ">Languages Used: </h3>
                    <ul class="flex flex-wrap gap-x-10 list-disc text-xl">
                      <li>C</li>
                      <li>Bash</li>
                      <li>Python (Autograder)</li>
                    </ul>
                  </div>
                  <p class="pt-5">
                      Imagine the following scenario: your employment in a temporary position comes to an end within a week, and you're tasked with creating a bonus assignment 
                      to test students on their newfound knowledge of the C programming language along with all of the other principles taught throughout the semester.
                      What do you do?
                  </p>
                  <br/>
                  <p>
                      The answer is simple enough: <span class="font-bold">just go for it!</span>
                  </p>
                  <br/>
                  <p>
                      The LapSim project features a virtual 24-car grid of similarly rated drivers and vehicles racing along a predefined circuit
                      consisting of low, medium, and high speed corners along with some straights. Various metrics often found in real-world motorsports are
                      simulated in this program, including lap times, sector times, fuel usage, tire wear, and engine mode. In addition, pit stops add another 
                      factor of complexity into the simulation along with dynamic precipitation levels and vehicle reliability.
                  </p>
                  <br/>
                  <p class="pb-5">
                    While I was able to build a strong foundation for this project, I'm looking forward to developing a proper GUI and adding more variables
                    into the simulation should time allow.
                  </p>
                  <hr class="border-black"/>
                  <p class="pt-5"><span class="font-bold">Fun Fact! </span>The car featured in the card for the LapSim project on the Home page and the Projects page is 
                    the 2015 Koenigsegg Agera RS. As it turns out, "Agera" is the Swedish verb that means <span class="font-bold">"to act."</span> It also
                    happens to be one of the fastest production vehicles of its time, with a recorded speed of 277.87 miles per hour (approximately 447 kilometers
                    per hour).
                  </p>
                </div>
              </div>
              <div class="flex flex-col gap-y-20 items-center">
                <img src="/src/assets/lapsimoutput2.png" class="max-w-96">
                <img src="/src/assets/lapsimoutput.png">
              </div>
            </div>    
        </div>
    </div>
    <div class="flex flex-col justify-center items-center bg-blue-800 font-sans gap-y-10 py-10">
        <h3 class="text-3xl font-bold text-white">Want to learn more?</h3>
        <RouterLink to="/contact">
            <button class="w-60 h-20 bg-gray-800 text-white text-xl rounded-2xl font-sans hover:scale-110 transition-transform duration-100 shadow-xl">Reach Out!</button>
        </RouterLink>
    </div>
</template>
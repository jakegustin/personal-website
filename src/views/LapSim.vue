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
    <div class="flex flex-row justify-center lg:gap-x-24 pb-16">
        <!--
        <div class="place-content-start" id="pfp">
            <img src="../assets/testImage.png" class="min-w-96 pb-10"/>
        </div>
        -->
        <div class="flex flex-col justify-center gap-y-10">
            <h1 class=" bg-[url('../src/assets/lapsimheader.png')] bg-cover bg-center h-80 text-6xl sm:text-8xl font-sans font-bold text-center content-center text-white">LapSim</h1>
            <div class="flex flex-col lg:flex-row gap-x-5 lg:px-24">
              <div class="flex flex-col gap-y-20 w-full lg:w-4/5 px-14 lg:px-10">
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
                      <li>Python</li>
                    </ul>
                  </div>
                  <p class="pt-5">
                      Imagine this: you're wrapping up in a temporary position, and you've been tasked with creating a bonus assignment in one week that 
                      tests over 300 students on their newfound knowledge of the C programming language, along with all of the other principles taught throughout the semester.
                      What do you do?
                  </p>
                  <br/>
                  <p>
                      The answer is simple enough: <span class="font-bold">embrace the challenge!</span>
                  </p>
                  <br/>
                  <h3 class="text-2xl font-semibold">Core Components</h3>
                  <ul class="list-disc">
                    <li class="pb-5 text-xl font-medium">Generating Simulations
                      <p class="text-lg font-normal">
                        Written in the C language, this "client" program simulates data for 24 cars along a circuit of varying 
                        corners and straights. Various metrics often found in real-world motorsports are simulated in this program, including lap times,
                        sector times, fuel usage, tire wear, and engine mode. Pit stops, dynamic weather, and vehicle reliability add additional complexity into the simulation,
                        Randomness ensures a unique result every time, with the option to use randomization seeds for consistency.
                      </p>
                    </li>
                    <li class="pb-5 text-xl font-medium">Simulation Analysis Tool
                      <p class="text-lg font-normal">
                        Also written in the C language, this "server" program ingests data from the client to be analyzed. 
                        Examples of the types of insights that can be gathered include best times, average times, and a detailed lap-by-lap analysis.
                        Users can interact with this program through a simplified terminal interface.
                      </p>
                    </li>
                    <li class="pb-5 text-xl font-medium">Testing Procedures
                      <p class="text-lg font-normal">
                        The Bash scripting language was used to automate the 
                        testing processes to ensure student correctness, while Python was used to ensure compatibility with the course's existing 
                        grading software.
                      </p>
                    </li>
                  </ul>
                  <p class="pb-5">
                    While I was able to build a strong foundation for this project, I'm looking forward to developing a proper GUI and adding more variables
                    into the simulation should time allow.
                  </p>
                  <br/>
                  <div class="flex flex-wrap items-center gap-x-10 gap-y-5">
                    <p class="font-bold text-2xl">Source Code: </p>
                    <button disabled='true' class="bg-slate-300 border-slate-500 border-2 rounded-2xl w-64 h-16 text-black">Available Upon Request</button>
                  </div>
                  <br/>
                  <hr class="border-black"/>
                  <p class="pt-5 pb-5"><span class="font-bold">Fun Fact! </span>The blue car featured in the LapSim project card is 
                    the 2015 Koenigsegg Agera RS. "Agera" is the Swedish verb meaning <span class="font-bold">"to act."</span>
                  </p>
                </div>
              </div>
              <div class="flex flex-col gap-y-20 items-center w-11/12 mx-auto">
                <img src="/src/assets/lapsimoutput2.png" class="max-w-84 sm:max-w-96">
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
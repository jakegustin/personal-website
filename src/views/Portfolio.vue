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
    <div class="flex flex-row justify-center lg:gap-x-24 pb-16">
        <!--
        <div class="place-content-start" id="pfp">
            <img src="../assets/testImage.png" class="min-w-96 pb-10"/>
        </div>
        -->
        <div class="flex flex-col justify-center gap-y-10">
            <h1 class=" bg-[url('../src/assets/portfoliobanner.png')] bg-cover bg-center h-80 text-6xl sm:text-8xl font-bold text-center content-center text-white">Portfolio</h1>
            <div class="flex flex-col lg:flex-row gap-x-5 lg:px-24">
              <div class="flex flex-col gap-y-20 w-full lg:w-4/5 px-14 lg:px-10">
                <div class="flex flex-col gap-y-3 text-lg">
                  <h2 class="text-4xl font-bold">Diving Into The <span :class="visibleHeader ? 'opacity-100' : 'opacity-0'" class="transition-opacity duration-1000 ease-in-out text-blue-700 font-extrabold">Unknown.</span></h2>
                  <div class="flex flex-row gap-x-10 pt-5 items-center justify-center">
                    <h3 class="text-2xl font-bold ">Languages Used: </h3>
                    <ul class="flex flex-wrap gap-x-10 list-disc text-xl">
                      <li>Javascript</li>
                      <li>HTML</li>
                      <li>CSS (via Tailwind CSS)</li>
                    </ul>
                  </div>
                  <p class="pt-5">
                      Having spent of my time working with systems and back-end development, front-end development always seemed to be a mystery to me. Knowing that 
                      experience is the best teacher, I decided to develop this website to learn more about modern 
                      web development technologies and procedures while starting to establish my presence in a digital world.
                  </p>
                  <br/>
                  <p>
                      This website serves as an enhanced version of my resume, highlighting my creative and technical abilities that I have developed from my 
                      unique background in one interactive experience. For any organizations who are hiring, consider this to be a sample of the  
                      quality work I can provide.
                  </p>
                  <br/>
                  <h3 class="text-2xl font-semibold">Tools and Frameworks</h3>
                  <ul class="list-disc">
                    <li class="pb-5 text-xl font-medium">Vite.js
                      <p class="text-lg font-normal">
                      I've used the Vite.js build tool as part of a prior internship and have continued to use it here because of its component 
                      hot-switching capabilities and simple setup procedure, significantly speeding up the development process. 
                      </p>
                    </li>
                    <li class="pb-5 text-xl font-medium">Vue.js
                      <p class="text-lg font-normal">
                        While I did use React.js previously for developing the user interfaces, I used Vue.js for this project due to its clear, simplified
                        structure - script, template, and style - allowing for intuitive and efficient development. 
                      </p>
                    </li>
                    <li class="pb-5 text-xl font-medium">Tailwind CSS
                      <p class="text-lg font-normal">
                        Styling was always most daunting part of web development. Using Tailwind CSS here eased this part of the development process significantly, 
                        leveraging the class attribute of standard HTML elements to adjust those elements individually rather than using a separate CSS stylesheet.
                      </p>
                    </li>
                  </ul>
                  <p>
                    This website is an ongoing work-in-progress, and I look forward to continually sharing
                     new skills and experiences while also testing out some 
                    new frameworks and technologies here. Be sure to check back on occasion for any updates!
                  </p>
                  <br/>
                  <div class="flex flex-wrap items-center gap-x-10 gap-y-5">
                    <p class="font-bold text-2xl">Source Code: </p>
                    <ExternalLinkButton link="https://www.github.com/jakegustin/personal-website"/>
                  </div>
                  <br/>
                </div>
              </div>
              <div class="flex flex-col gap-y-20 items-center w-11/12 mx-auto">
                <img src="/src/assets/gitlogimg.png" class="w-11/12 max-w-84 sm:max-w-3xl">
                <img src="/src/assets/npmbuildimg.png" class="w-11/12 max-w-84 sm:max-w-3xl">
              </div>
            </div>    
        </div>
    </div>
    <ContactFooter/>
</template>
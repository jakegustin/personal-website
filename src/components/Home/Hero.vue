<script>
import ExternalLinkButton from '../ExternalLinkButton.vue';

export default {
    data() {
        return {
            visibleTitle: [false, false, false, false],
            firstVisit: false
        }
    },
    methods: {
        openResume() {
            const pdfUrl = '/Jake Gustin - Resume - CS.pdf';
            window.open(pdfUrl, '_blank')
        }
    },
    mounted() {
        if (!localStorage.getItem('firstVisit')) {
            this.firstVisit = true
            localStorage.setItem('firstVisit', 'false')
        }

        const interval = setInterval(() => {
            if (localStorage.getItem('loadingComplete') === 'true') {
                console.log("LIGHT IT UP!");
                clearInterval(interval);
                this.visibleTitle.forEach((_, index) => {
                    setTimeout(() => {this.visibleTitle[index] = true}, index * 1000)
                });
            }
            console.log("crap");
        }, 100);

    },
    components: {
        ExternalLinkButton
    }
}
</script>

<template>
    <div class="flex lg:flex-row flex-col justify-center items-center gap-x-10 sm:gap-y-0 gap-y-24 px-24 pt-16 sm:pb-0 pb-16">
        <!--
        <div class="place-content-start" id="pfp">
            <img src="../assets/testImage.png" class="min-w-96 pb-10"/>
        </div>
        -->
        <div class="w-1/2 flex flex-col justify-center items-center gap-y-10 pb-2" id="longInfo">
            <div class="flex flex-col gap-y-3">
                <div class="flex flex-row gap-x-3">
                    <h1 :class="firstVisit && !visibleTitle[0] ? 'opacity-0' : 'opacity-100'" class="text-7xl sm:text-8xl font-bold transition-opacity duration-1000 ease-in-out">
                        Hi, 
                        <span :class="firstVisit && !visibleTitle[1] ? 'opacity-0' : 'opacity-100'" 
                                class="text-7xl sm:text-8xl font-bold transition-opacity duration-1000 ease-in-out">
                            I'm
                        </span>
                        <span id="highlightedName" :class="firstVisit && !visibleTitle[1] ? 'opacity-0' : 'opacity-100'" 
                                class="text-7xl sm:text-8xl font-extrabold text-blue-700 transition-opacity duration-1000 ease-in-out">
                            Jake
                        </span>
                        </h1>

                </div>
                <h2 :class="firstVisit && !visibleTitle[3] ? 'opacity-0' : 'opacity-100'" class="text-2xl sm:text-3xl font-medium transition-opacity duration-1000 ease-in-out">Software Developer / Systems Engineer</h2>
            </div>
            <div :class="firstVisit && !visibleTitle[3] ? 'opacity-0' : 'opacity-100'" class="flex flex-col items-center gap-y-10 transition-opacity duration-1000 ease-in-out">
                <p class="text-xl max-w-prose">I am a recent graduate of Boston University's Dual Degree program, majoring in Computer Science along with Film & Television. I've leveraged my unique skillset to develop a variety of high quality software products, ranging from interactive user experiences to efficient, low-level systems code. I am currently seeking admission into a Master's of Computer Science program for the upcoming 2025-2026 academic year.</p>
                <div class="w-100">
                    <ExternalLinkButton :disabled="firstVisit && !visibleTitle[3]" link='/Jake Gustin - Resume - CS.pdf' h="20">See My Resume</ExternalLinkButton>         
                </div>
            </div>
        </div>
        <div class="flex sm:scale-75">
            <img id="portrait" src="/src/assets/websiteportrait.png" :class="firstVisit && !visibleTitle[3] ? 'opacity-0' : 'opacity-100'" class="rounded-2xl overflow-hidden"/>
        </div>
    </div>
</template>

<style>
#portrait {
  transition: opacity 1000ms ease-in-out, background-color 300ms ease-in-out, border-color 300ms ease-in-out;
  background-color: #1e40af;
  border-width: 4px;
  border-color: black
}

.dark #portrait {
  background-color: #1e3a8a;
  border-color: #e2e8f0
}
</style>
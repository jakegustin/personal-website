<script>
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
        this.visibleTitle.forEach((_, index) => {
            setTimeout(() => {this.visibleTitle[index] = true}, index * 1000)
        });
        if (!localStorage.getItem('firstVisit')) {
            this.firstVisit = true
            localStorage.setItem('firstVisit', 'false')
        }
    }
}
</script>

<template>
    <div class="flex flex-row justify-center gap-x-24 px-24 pt-16 pb-16">
        <!--
        <div class="place-content-start" id="pfp">
            <img src="../assets/testImage.png" class="min-w-96 pb-10"/>
        </div>
        -->
        <div class="w-4/5 flex flex-col justify-center items-center gap-y-10 pb-2" id="longInfo">
            <div class="flex flex-col gap-y-3">
                <div class="flex flex-row gap-x-3">
                    <h1 :class="firstVisit && !visibleTitle[0] ? 'opacity-0' : 'opacity-100'" class="text-7xl sm:text-8xl font-sans font-bold transition-opacity duration-1000 ease-in-out">
                        Hi, 
                        <span :class="firstVisit && !visibleTitle[1] ? 'opacity-0' : 'opacity-100'" 
                                class="text-7xl sm:text-8xl font-sans font-bold transition-opacity duration-1000 ease-in-out">
                            I'm
                        </span>
                        <span :class="firstVisit && !visibleTitle[1] ? 'opacity-0' : 'opacity-100'" 
                                class="text-7xl sm:text-8xl font-sans font-extrabold transition-opacity duration-1000 ease-in-out text-blue-800 dark:text-blue-700">
                            Jake
                        </span>
                        </h1>

                </div>
                <h2 :class="firstVisit && !visibleTitle[3] ? 'opacity-0' : 'opacity-100'" class="text-2xl sm:text-3xl font-sans font-medium transition-opacity duration-1000 ease-in-out">Software Developer / Systems Engineer</h2>
            </div>
            <div :class="firstVisit && !visibleTitle[3] ? 'opacity-0' : 'opacity-100'" class="flex flex-col items-center gap-y-10 transition-opacity duration-1000 ease-in-out">
                <p class="text-xl max-w-prose">I am a recent graduate of Boston University's Dual Degree program, majoring in Computer Science along with Film & Television. I've leveraged my unique skillset to develop a variety of high quality software products, ranging from interactive user experiences to efficient, low-level systems code. I am currently seeking admission into a Master's of Computer Science program for the upcoming 2025-2026 academic year.</p>
                <div class="w-100">
                    <button :disabled="firstVisit && !visibleTitle[3]" @click=openResume() class="w-60 h-20 bg-gray-800 text-white text-xl dark:bg-slate-700 dark:border-slate-400 dark:border-2 rounded-2xl font-sans hover:scale-110 transition-transform duration-100 shadow-xl">See My Resume</button> 
                </div>
            </div>
        </div>
    </div>
</template>
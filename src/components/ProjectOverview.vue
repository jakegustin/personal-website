<template>
    <h2 class="flex text-4xl font-bold place-content-center pt-16 pb-5">Check Out My Projects!</h2>
    <div id="projectOverviewContainer" class="flex flex-wrap place-content-center gap-x-10 gap-y-10 pb-24">
        <div id="projectLapSimContainer" class="flex flex-col bg-white shadow-xl border-2 border-slate-400 w-60 h-80 rounded-2xl overflow-hidden place-items-center hover:scale-110 transition-transform duration-100">
            <img src="../assets/lapsimimg.jpg" class="w-full h-2/3 object-cover"/>
            <h4 class="font-sans text-xl pt-5 pb-2 font-bold">LapSim</h4>
            <p class="font-sans text-m text-center px-3">Creating Race Day Simulations with C and Bash</p>
        </div>
        <div id="projectWebsiteContainer" class="flex flex-col bg-white shadow-xl border-2 border-slate-400 w-60 h-80 rounded-2xl overflow-hidden place-items-center hover:scale-110 transition-transform duration-100">
            <img src="../assets/websitecodeimg.jpg" class="w-full h-2/3 object-cover"/>
            <h4 class="font-sans text-xl pt-5 pb-2 font-bold">Portfolio</h4>
            <p class="font-sans text-m text-center px-3">Showing Off with Vite, Vue, and Tailwind CSS</p>
        </div>
        <div id="projectJadeContainer" class="flex flex-col bg-white shadow-xl border-2 border-slate-400 w-60 h-80 rounded-2xl overflow-hidden place-items-center hover:scale-110 transition-transform duration-100">
            <img src="../assets/jadeimg.jpg" class="w-full h-2/3 object-cover"/>
            <h4 class="font-sans text-xl pt-5 pb-2 font-bold">Jade</h4>
            <p class="font-sans text-m text-center px-3">Building Up from MIT's Open Source Schematic Software</p>
        </div>
    </div>
</template>
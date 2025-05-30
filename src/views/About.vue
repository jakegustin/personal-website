<script setup>
import { RouterLink } from 'vue-router';
import ContactFooter from '../components/ContactFooter.vue';
</script>

<template>
    <div class="flex flex-row justify-center px-10 pt-16 pb-16">
        <!--
        <div class="place-content-start" id="pfp">
            <img src="../assets/testImage.png" class="min-w-96 pb-10"/>
        </div>
        -->
        <div class="w-full md:w-4/5 flex flex-col justify-center gap-y-10 pb-10">

            <!-- Title/Header -->
            <div class="flex flex-col gap-y-3">
                <h1 class="text-6xl md:text-8xl font-bold text-center">Where Is <span class="text-blue-700 font-extrabold">My Mind?</span></h1>
                <h2 class="text-2xl md:text-3xl font-semibold text-center">(A little bit about me)</h2>
            </div>
            <div class="flex flex-col gap-y-20 ">

                <!-- Education Background -->
                <div class="flex flex-col gap-y-3 text-lg">
                    <h2 class="text-3xl font-bold text-blue-700">Educational Background</h2>
                    <p >I first enrolled at Boston University (BU) as a Film & Television student 
                        with the aim of being involved in film production after graduation. I took a variety of classes within the department, 
                        with topics ranging from screenwriting, film studies, and even TV studio production. I was even selected to be a 
                        camera operator for the pilot of <i>Art House</i>, BU's cross-college sitcom project.
                    </p>
                    <br/>
                    <p>So, what changed? <span class="font-bold">Curiosity.</span></p>
                    <br/>
                    <p>
                        I tried out some introductory computer science courses and immediately felt at home.
                        It didn't take long for me to want to push my limits and add a computer science major to my program as I continued to perform well in 
                        upper-level classes from both areas of study. I've been able to contribute in a teaching capacity for an undergraduate systems 
                        course for two years, serving in a leading role as a teaching assistant for one year, to support other future leaders 
                        who were just starting their journey. In time, I discovered my passion within computer science - working with distributed
                        and cloud systems. After all, the film production process is effectively the same as a large distributed system at a high level,
                        and I've always seeked to optimize efficiency in both with regards to time and energy usage in my work.
                        I've also had the opportunity to further explore this interest as a research assistant, 
                        conducting experiments to optimize energy consumption in distributed computing workloads, particularly with Apache Flink.
                    </p>
                    <br/>
                    <p>
                        I graduated as a dual Bachelor's degree recipient in 2024: one in Computer Science, and one in Film & Television. Starting in Fall 2025, 
                        I will be pursuing a Master's of Science in Computer Science at Georgia Tech, with a concentration in Computing Systems to dive deeper into my interests in distributed systems and cloud computing.
                    </p>
                </div>

                <!-- Professional Background -->
                <div class="flex flex-col gap-y-3 text-lg">
                    <h2 class="text-3xl font-bold text-blue-700">Professional Background</h2>
                    <p >
                        My first professional experience was as a software engineering intern at Nuance Communications (now Microsoft).
                        The research and development team I was involved with was tasked with developing a prototype of a full-stack React.js web application from start to 
                        finish within the two month internship duration to streamline the deployment of cloud resources for end users in the healthcare industry. While I contributed to 
                        many aspects of the project, my aim was to focus on handling infrastructure deployment, leveraging Infrastructure-as-Code technologies, such 
                        as Terraform, to adjust cloud resources with code along with CI/CD pipelines to automate the test and build processes for the application.
                    </p>
                    <br/>
                    <p>
                        In addition to industry projects, I also had the opportunity to contribute to projects at my alma mater. After graduation, 
                        I took up a courseware development role to create and refine software for the same undergraduate course I've held a teaching role in to 
                        improve the quality of educational materials used in the course for future students. This role led to the creation of the 
                        <RouterLink to="/projects/lapsim"><span class="font-bold text-cyan-400 hover:underline">LapSim</span></RouterLink> project and 
                        new contributions to the <RouterLink to="/projects/jade"><span class="font-bold text-cyan-400 hover:underline">Jade</span></RouterLink>
                         project, allowing students to apply their theoretical knowledge of the C language and CPU architecture respectively to creating functional programs and circuitry.
                    </p>
                    <br/>
                    <p>
                        Right now, I work as an individual contractor for a variety of clients, using my ever-growing skillset to support their projects, including those focused on refining AI models for a variety of use cases.
                    </p>
                    <br/>
                    <p>
                        While my career as a professional has only just begun, I'm always looking forward to my <span class="font-bold">next big opportunity.</span>
                    </p>
                </div>

                <!-- Personal Interests -->
                <div class="flex flex-col gap-y-3 text-lg">
                    <h2 class="text-3xl font-bold text-blue-700">Personal Interests</h2>
                    <p>
                        Of course, I don't believe in the philosophy of "all work and no play" - life is all about finding balance!
                    </p>
                    <br/>
                    <p>
                        Firstly, I've built and tinkered with custom desktop computers. I've used my own custom PC for many tasks, ranging from 
                        gaming, productivity, to everyday browsing. In fact, I wrote this website on my own system! I've also supported others 
                        seeking to build their own machines for the first time for a wide variety of use cases and budgets.
                    </p>
                    <br/>
                    <p>
                        I'm also very much interested in the world of motorsport! I've mostly been following Formula 1 in recent years, but I've also tuned 
                        into select events in the World Endurance Championship and IndyCar on occasion. In my free time, I often enjoy being involved with 
                        sim racing. I'm not necessarily the greatest at it, but nothing quite beats the thrill of pulling off some late braking maneuvers or overtaking at speed
                        in the corners.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <ContactFooter/>
</template>
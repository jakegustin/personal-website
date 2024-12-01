<script>
export default {
    mounted() {
        this.$nextTick(() => {
            window.addEventListener("load", this.handleLoad);
        });
    },
    data() {
        return {
            loaded: false,
            makeHidden: false
        }
    },
    methods: {
        handleLoad() {
            this.loaded = true;
            setTimeout(() => {
                this.makeHidden = true
            }, 500);
        }
    }
}
</script>

<template>
<div :class="{'opacity-0': loaded, 'opacity-100': !loaded, 'hidden': makeHidden}" class="h-screen w-screen bg-slate-200 dark:bg-slate-800 text-black dark:text-white flex justify-center items-center text-8xl transition-opacity duration-500 ease-in-out">
    <div class="animate-spin rounded-full border-t-4 border-blue-500 border-solid w-16 h-16"></div>
</div>
</template>
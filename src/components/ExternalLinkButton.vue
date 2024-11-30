<script>

export default {
  props: {
    link: {
      type: String,
      default: "/Unknown"
    },
    w: {
      type: String,
      default: '60'
    },
    h: {
      type: String,
      default: '16'
    }
  },
  methods: {
    goToLink() {
      window.open(this.link, "_blank")
    }
  }
}

</script>

<template>
<button @click="goToLink" id="externalLinkButton" :class="'w-'+w + ' h-'+h" class="text-xl bg-slate-800 dark:bg-slate-600 text-white rounded-2xl font-sans shadow-xl"><slot>View Repository</slot></button>
</template>

<style>
#externalLinkButton {
  transition: transform 100ms ease-in-out, background-color 300ms ease-in-out, border-width 100ms ease-in-out;
  transform: scale(1.0);
  background-color: #1f2937;
  border-width: 0px;
  border-color: #94a3b8
}

#externalLinkButton:hover {
  transform: scale(1.1);
}

.dark #externalLinkButton {
  background-color: #334155;
  border-width: 2px;
}
</style>
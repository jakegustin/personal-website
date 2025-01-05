<!-- Generic Button Used to Access External Resources -->

<script>

export default {
  props: {
    link: { // Desired link. Go to 404 page if no input provided.
      type: String,
      default: "/Unknown"
    },
    w: { // Button width
      type: String,
      default: '60'
    },
    h: { // Button height
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
<button @click="goToLink" id="externalLinkButton" :class="'w-'+w + ' h-'+h" class="text-xl bg-slate-800 dark:bg-slate-600 text-white rounded-2xl shadow-xl"><slot>View Repository</slot></button>
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
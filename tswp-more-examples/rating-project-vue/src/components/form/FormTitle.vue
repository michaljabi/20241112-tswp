<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "FormTitle",
  data() {
    return {
      noOfExclamations: 1
    }
  },
  computed: {
    exclamations() {
       return '!'.repeat(this.noOfExclamations)
    }
  }
})
</script>

<template>
  <h3 class="title is-3">
    <span class="has-text-light">Rate our company</span>
    <span class="has-text-warning" @click="noOfExclamations++">{{exclamations}}</span>
  </h3>
</template>

<style scoped>

</style>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "FormField",
  props: {
    labelText: {
      type: String,
      required: true,
    },
    forId: {
      type: String,
      required: true,
    }
  }
})
</script>

<template>
  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label" :for="forId">{{labelText}}:</label>
    </div>
    <div class="field-body">
      <div class="field">
        <div class="control">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

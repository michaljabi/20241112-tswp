<script lang="ts">
import {defineComponent} from 'vue'
import FormField from "@/components/form/FormField.vue";

export default defineComponent({
  name: "RatingForm",
  components: {FormField},
  data() {
    return {
      email: '',
      rate: 4,
      opinion: ''
    }
  },
  computed: {
    validEmail() {
      return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(this.email)
    },
    isValid() {
      return this.validEmail && this.rate
    }
  },
  methods: {
    handleFormSubmit() {
      if(!this.isValid) {
        return alert('Please fix form errors');
      }
      const { email, rate, opinion } = this;
      console.log('Form ready to send', { email, rate, opinion })
    }
  }
})
</script>

<template>
  <form class="form" @submit.prevent="handleFormSubmit()">
    <FormField for-id="email" label-text="email*">
      <input class="input" id="email" type="email" placeholder="your @ address" v-model="email">
    </FormField>
    <FormField for-id="rate" label-text="rate*">
      <div class=" is-flex">
        <div class="p-2 px-4 has-text-weight-bold has-background-link-light">{{rate}}</div>
        <input class="input" id="rate" type="range" min="1" max="5" v-model="rate">
      </div>
    </FormField>
    <FormField for-id="opinion" label-text="opinion">
      <div class=" is-flex">
        <textarea class="textarea" id="opinion" placeholder="...something more about your feelings" v-model="opinion"></textarea>
      </div>
    </FormField>
    <div class="is-flex is-justify-content-end">
      <div class="control">
        <button class="button is-link" type="submit" :style="{opacity: isValid ? 1 : 0.5}">Send my testimonial</button>
      </div>
    </div>
  </form>
</template>

<style scoped>

</style>

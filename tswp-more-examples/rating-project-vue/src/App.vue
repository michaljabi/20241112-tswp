<script lang="ts">
import {defineComponent} from 'vue'
import TheHero from "@/components/TheHero.vue";
import FormTitle from "@/components/form/FormTitle.vue";
import RatingForm from "@/components/form/RatingForm.vue";

export default defineComponent({
  components: {
    RatingForm,
    FormTitle,
     TheHero
  }
})
</script>

<template>
  <div class="columns is-multiline">
    <div class="column is-full">
      <TheHero />
    </div>
    <div class="column is-offset-1 is-10 p-6 is-offset-3-widescreen is-6-widescreen">
      <FormTitle />
      <section class="box" style="border: 1px solid rgb(204, 204, 204); border-radius: 1em;">
        <RatingForm />
      </section>
    </div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

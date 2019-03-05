<template>
  <section class="pr_8">
    <v-badge color="red">
      <template v-slot:badge>
        <span>4</span>
      </template>
      <v-btn icon>
        <i class="fas fa-shopping-cart"></i>
      </v-btn>
    </v-badge>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CartInfo',
})
</script>

<style lang="sass">
  .badge__badge
    transform: translate3d(-15px, 10px, 0px)
</style>


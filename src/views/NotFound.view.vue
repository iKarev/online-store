<template>
  <v-layout class="pt_12" column>
    <os-go-back></os-go-back>
    <v-flex xs12 offset-xs0 sm10 offset-sm1>
      <h3 class="ta-c relative display-1 white--text">
        404 плюшевых мишки
      </h3>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue'
import GoBack from '@/components/GoBack.component.vue'

export default Vue.extend({
  name: 'not-found',
  components: {
    'os-go-back': GoBack,
  },
})
</script>

<template>
  <v-layout align-center justify-space-between column fill-height>
    <v-progress-circular
      :width="width"
      :size="size"
      color="red"
      indeterminate
    ></v-progress-circular>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    width: {
      type: Number,
      default: 4,
    },
    size: {
      type: Number,
      default: 50,
    },
  },
  name: 'Loader',
})
</script>

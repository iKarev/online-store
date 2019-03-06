<template>
  <v-flex xs12 offset-xs0 sm10 offset-sm1 class="relative mb_8">
    <v-btn @click="goBack()" class="ml_0">
      <i class="fas fa-undo"></i>
      <span class="ml_8">К каталогу</span>
    </v-btn>
  </v-flex>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'go-back',
  methods: {
    goBack() {
      this.$router.push('/')
    },
  },
})
</script>
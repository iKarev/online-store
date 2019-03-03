<template>
  <div class="home">
    <Product />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Product from '@/components/Product.vue' // @ is an alias to /src

export default Vue.extend({
  name: 'home',
  components: {
    Product,
  },
})
</script>

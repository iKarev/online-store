<template>
  <v-layout row wrap class="pt_12">
    <v-flex class="p_32">
      <v-card>
        <v-layout class="cursor-p" row fill-height>
          <section>
            <img :src="product.url" />
          </section>
          <section></section>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue'
import { IProduct } from '@/interfaces/product'

export default Vue.extend({
  name: 'products',
  methods: {
  },
  computed: {
    product(): IProduct {
      return this.$store.getters.currentProduct
    },
  },
  created() {
    this.$store.dispatch('getCurrentProduct', this.$route.params.id)
  },
})
</script>
<template>
  <div class="h_50 pt_12">
    <os-loader :size="80" v-if="!products.length"></os-loader>
    <v-layout v-if="products.length" row wrap >
      <v-flex
        class="p_32" xs6 sm4 md3 lg2
        v-bind:key="product.id"
        v-for="product in products"
      >
        <os-product :product="product" />
      </v-flex>
      <v-flex class="p_32" xs6 sm4 md3 lg2>
        <v-btn
          @click="showMoreProducts"
          class="w_100 m_0"
          color="success"
        >
          <span class="mr_4">Показать ещё</span>
          <i class="fas fa-plus"></i>
        </v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Product from '@/components/Product.component.vue'
import Loader from '@/components/Loader.component.vue'
import { IProduct } from '@/interfaces/product'

export default Vue.extend({
  name: 'products',
  components: {
    'os-product': Product,
    'os-loader': Loader,
  },
  data() {
    return {
      productsLimit: 12,
    }
  },
  methods: {
    showMoreProducts() {
      this.productsLimit += 12
    },
  },
  computed: {
    products(): IProduct[] {
      return this.$store.getters.products.slice(0, this.productsLimit)
    },
  },
  created() {
    if (!this.products.length)
      this.$store.dispatch('getProducts')
  },
})
</script>

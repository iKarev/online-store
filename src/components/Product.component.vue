<template>
  <v-card class="product h_100">
    <v-layout
      @click="goToProduct()"
      class="cursor-p"
      align-center justify-space-between column fill-height
    >
      <section>
        <div class="ta-c">
          <img :src="product.thumbnailUrl" />
        </div>
        <v-card-title primary-title>
          <p class="body-1 mb-0">{{ product.title }}</p>
        </v-card-title>
      </section>
      <v-card-actions class="w_100">
        <v-layout justify-end row fill-height>
          <v-btn
            @click="addToCart($event, product)"
            icon color="success"
            :loading="addingToCart"
            :disabled="addingToCart"
          >
            <i class="fas fa-cart-arrow-down"></i>
          </v-btn>
        </v-layout>
      </v-card-actions>
    </v-layout>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import { IProduct } from '@/interfaces/product'

export default Vue.extend({
  props: ['product'],
  name: 'Product',
  data() {
    return {
      addingToCart: false,
    }
  },
  methods: {
    goToProduct() {
      this.$router.push({path: `/product/${this.$props.product.id}`})
    },
    addToCart(e: Event, product: IProduct) {
      e.stopPropagation()
      this.$store.commit('addProductToCart', product)
    },
  },
})
</script>

<style lang="sass" scoped>
  .product
    width: 170px
    padding-top: 10px
  .card__title
    padding: 12px
</style>

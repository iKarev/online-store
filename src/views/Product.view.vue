<template>
  <v-layout class="pt_12" column>
    <os-go-back></os-go-back>
    <v-flex xs12 offset-xs0 sm10 offset-sm1>
      <os-loader :size="80" v-if="!product"></os-loader>
      <v-card v-if="product">
        <v-layout row v-bind="directionBinding" fill-height>
          <section class="p_12 ta-c">
            <img class="max-w_100" :src="product.url" />
          </section>
          <section class="p_12">
            <v-layout column justify-space-between v-bind="directionBinding" fill-height>
              <h4 class="display-1">{{ product.title }}</h4>
              <h3 class="display-1 mb-0 mh_12">${{ product.price }}</h3>
              <v-btn
                class="mt_12"
                @click="addToCart($event)"
                color="success"
              >
                <span class="mr_4">В корзину</span>
                <i class="fas fa-cart-arrow-down"></i>
              </v-btn>
            </v-layout>
          </section>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue'
import Loader from '@/components/Loader.component.vue'
import GoBack from '@/components/GoBack.component.vue'
import { IProduct } from '@/interfaces/product'

export default Vue.extend({
  name: 'products',
  components: {
    'os-loader': Loader,
    'os-go-back': GoBack,
  },
  methods: {
    addToCart() {
      this.$store.commit('addProductToCart', this.product)
    },
    goBack() {
      this.$router.push('/')
    },
  },
  computed: {
    product(): IProduct {
      return this.$store.getters.currentProduct
    },
    directionBinding(): {column: boolean} {
      const binding = {column: false}
      if (this.$vuetify.breakpoint.mdAndDown) binding.column = true
      return binding
    },
  },
  created() {
    this.$store.dispatch('getCurrentProduct', this.$route.params.id)
  },
  beforeDestroy() {
    this.$store.commit('clearCurrentProduct')
  },
})
</script>

<style lang="sass" scoped>
  .max-w_100
    max-width: 100%
</style>

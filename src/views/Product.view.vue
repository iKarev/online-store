<template>
  <v-layout class="pt_12" column>
    <v-flex xs12 offset-xs0 sm10 offset-sm1 class="relative mb_8">
      <v-btn @click="goBack()" class="ml_0">
        <i class="fas fa-undo"></i>
        <span class="ml_8">К каталогу</span>
      </v-btn>
    </v-flex>
    <v-flex xs12 offset-xs0 sm10 offset-sm1>
      <os-loader :size="80" v-if="!product"></os-loader>
      <v-card v-if="product">
        <v-layout row v-bind="directionBinding" fill-height>
          <section class="p_12 ta-c">
            <img :src="product.url" />
          </section>
          <section class="p_12">
            <v-layout column justify-space-between v-bind="directionBinding" fill-height>
              <h3 class="display-2">{{ product.title }}</h3>
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
import { IProduct } from '@/interfaces/product'

export default Vue.extend({
  name: 'products',
  components: {
    'os-loader': Loader,
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
<template>
  <v-layout class="pt_12" column>
    <v-flex xs12 offset-xs0 sm10 offset-sm1 class="relative mb_8">
      <v-btn @click="goBack()" class="ml_0">
        <i class="fas fa-undo"></i>
        <span class="ml_8">К каталогу</span>
      </v-btn>
    </v-flex>
    <v-flex xs12 offset-xs0 sm10 offset-sm1>
      <h3 v-if="!products.length" class="ta-c relative display-1 white--text">
        Ваша корзина пуста. Добавьте мишек!
      </h3>
      <v-layout v-if="products.length" column>
        <v-flex
          v-bind:key="product.id"
          v-for="product in products"
        >
          <v-card class="mb_8">
            <os-cart-item :item="product"></os-cart-item>
          </v-card>
        </v-flex>
        <v-flex>
          <v-btn
            @click="clearCart()"
            class="m_0"
            color="error"
          >
            <span class="mr_4">Очистить корзину</span>
            <i class="fas fa-times"></i>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue'
import Loader from '@/components/Loader.component.vue'
import CartItem from '@/components/CartItem.component.vue'
import { IProduct } from '@/interfaces/product'

export default Vue.extend({
  name: 'products',
  components: {
    'os-loader': Loader,
    'os-cart-item': CartItem,
  },
  methods: {
    clearCart() {
      this.$store.commit('clearCart')
    },
    goBack() {
      this.$router.push('/')
    },
  },
  computed: {
    products(): IProduct {
      return this.$store.getters.cart
    },
  },
})
</script>
<template>
  <v-layout class="pt_12" column>
    <os-go-back></os-go-back>
    <v-flex xs12 offset-xs0 sm10 offset-sm1>
      <h3 v-if="!boughtProducts && !products.length" class="ta-c relative display-1 white--text">
        Ваша корзина пуста. Добавьте мишек!
      </h3>
      <v-card class="relative success white--text p_32 ta-c" v-if="boughtProducts">
        <p class="headline">
          Поздравляем! Вы купили плюшевых мишек: {{ boughtProducts }}!
        </p>
      </v-card>
      <v-layout v-if="products.length" column>
        <v-flex
          v-bind:key="product.id"
          v-for="product in products"
        >
          <v-card class="mb_8">
            <os-cart-item :item="product"></os-cart-item>
          </v-card>
        </v-flex>
        <v-layout class="mt_8" row justify-space-between>
          <v-btn
            @click="buyProducts()"
            class="m_0"
            color="success"
            :loading="buyingInProgress"
            :disabled="buyingInProgress"
          >
            <span class="mr_4">Оплатить ${{cartCost}}</span>
          </v-btn>
          <v-btn
            @click="clearCart()"
            class="m_0"
            color="error"
            :disabled="buyingInProgress"
          >
            <span class="mr_4">Очистить корзину</span>
            <i class="fas fa-times"></i>
          </v-btn>
        </v-layout>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue'
import Loader from '@/components/Loader.component.vue'
import CartItem from '@/components/CartItem.component.vue'
import GoBack from '@/components/GoBack.component.vue'
import { IProduct } from '@/interfaces/product'

export default Vue.extend({
  name: 'products',
  components: {
    'os-loader': Loader,
    'os-cart-item': CartItem,
    'os-go-back': GoBack,
  },
  data() {
    return {
      boughtProducts: 0,
      buyingInProgress: false,
    }
  },
  methods: {
    buyProducts() {
      this.buyingInProgress = true
      setTimeout(() => {
        this.buyingInProgress = false
        this.boughtProducts = this.$store.getters.productsInCart
        this.$store.commit('clearCart')
      }, Math.random() * 3000)
    },
    clearCart() {
      this.$store.commit('clearCart')
    },
    goBack() {
      this.$router.push('/')
    },
  },
  computed: {
    products(): IProduct[] {
      return this.$store.getters.cart
    },
    cartCost(): number {
      return this.$store.getters.cartCost
    }
  },
})
</script>
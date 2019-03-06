<template>
  <v-layout v-bind="directionBinding" fill-height class="item">
    <v-flex>
      <v-layout row align-start fill-height>
        <div class="item-image-container">
          <img class="w_100 h_100" :src="item.product.thumbnailUrl" />
        </div>
        <v-layout column align-start justify-space-between fill-height>
          <p class="item-title body-1 mb-0 mh_12">{{ item.product.title }}</p>
          <h3 class="display-1 mb-0 mh_12">${{ item.product.price }}</h3>
        </v-layout>
      </v-layout>
    </v-flex>
    <v-flex class="pr_8">
      <v-layout v-bind="justifyBinding" align-center row fill-height>
        <v-btn @click="goToProduct(item.product.id)" icon color="primary">
          <i class="fas fa-search"></i>
        </v-btn>
        <v-btn :disabled="item.count < 1" @click="decrease(item.product.id)" icon color="warning">
          <i class="fas fa-minus"></i>
        </v-btn>
        <h3 class="display-1 mb-0 mh_12">{{ item.count }}</h3>
        <v-btn @click="add(item.product)" icon color="success">
          <i class="fas fa-plus"></i>
        </v-btn>
        <v-btn @click="remove(item.product.id)" icon color="error">
          <i class="fas fa-trash"></i>
        </v-btn>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue'
import { IProduct } from '@/interfaces/product'

export default Vue.extend({
  props: ['item'],
  name: 'CartItem',
  data() {
    return {
      addingToCart: false,
    }
  },
  computed: {
    directionBinding(): object {
      const binding = {column: false}
      if (this.$vuetify.breakpoint.smAndDown) binding.column = true
      return binding
    },
    justifyBinding(): object {
      const binding: any = {}
      if (this.$vuetify.breakpoint.smAndDown)
        binding['justify-center'] = true
      else
        binding['justify-end'] = true
      return binding
    },
  },
  methods: {
    goToProduct(id: string) {
      this.$router.push({path: `/product/${id}`})
    },
    add(product: IProduct) {
      this.$store.commit('addProductToCart', product)
    },
    decrease(id: string) {
      this.$store.commit('decreaseProductInCart', id)
    },
    remove(id: string) {
      this.$store.commit('removeProductFromCart', id)
    },
  },
})
</script>

<style lang="sass" scoped>
.item
  overflow: hidden
  &-title
    width: calc(100% - 100px)
  &-image
    &-container
      width: 100px
      height: 100%
</style>


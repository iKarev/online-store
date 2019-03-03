<template>
  <v-app light id="app">
    <v-toolbar dark color="primary">
      <v-toolbar-title class="white--text">Плюшевые мишки</v-toolbar-title>
      <os-cart></os-cart>
    </v-toolbar>
    <router-view></router-view>
  </v-app>
</template>

<script>
import Cart from './views/Cart.vue'
export default {
  name: 'app',
  components: {
    'os-cart': Cart,
  },
  data() {
    return {}
  },
  computed: {},
  methods: {},
}
</script>

<style lang="sass">
  @import './styles/main.sass'
</style>

<template>
  <v-app light id="app">
    <v-toolbar dark color="primary">
      <v-toolbar-title class="title">Плюшевые мишки</v-toolbar-title>
      <v-spacer></v-spacer>
      <os-cart-info></os-cart-info>
    </v-toolbar>
    <div class="main-background h100"></div>
    <div>
      <router-view></router-view>
    </div>
  </v-app>
</template>

<script>
import CartInfo from './components/CartInfo.component.vue'
export default {
  name: 'app',
  components: {
    'os-cart-info': CartInfo,
  },
  data() {
    return {}
  },
  computed: {},
  methods: {},
}
</script>

<style>
  @import '../node_modules/vuetify/dist/vuetify.min.css';
</style>
<style lang="sass">
  @import './styles/main.sass'
</style>



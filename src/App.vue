<template>
  <v-app id="app">

    <navigation />
    
      <v-main>
        <router-view></router-view>
      </v-main>
    

    <v-footer app>
      <div class="cpytxt">&copy; Ralzik 2019-{{ new Date().getFullYear() }}</div>
    </v-footer>

  </v-app>
</template>

<script>
import Navigation from './components/Navigation';

  export default {
    components: {
      Navigation
    },
    name: 'App',
    props: {
      source: String,
    },
    data: () => ({

    }),
  }
</script>

<style lang="scss">
  main {
    background-image: url('./assets/rzbg.png');
    opacity: 1;
    background-size: cover;
  }

  #cpytxt{
    text-align: center;
  }
</style>

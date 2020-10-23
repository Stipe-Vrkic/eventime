<template>
  <div id="app">
  <Header/>
  <Section1/>
  <Main/>
  <Footer/>
  </div>
</template>

<script>

import Header from './components/Header.vue'
import Section1 from './components/Section1.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'




export default {
  name: 'App',
  components: {
    Header,
    Section1,
    Main,
    Footer
    
  }
}
</script>

<style>
@import './assets/styles/style.css';
</style>

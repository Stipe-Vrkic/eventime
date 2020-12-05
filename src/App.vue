<template>
  <div id="app">
        <Navigation/>
        <Header/>     
        <Services/>
        <Events/>
        <Contact/>
     
        <Footer/> 
        <Modal/>  
           
       
  </div>
</template>

<script>

import Navigation from './components/Navigation.vue'
import Header from './components/Header.vue'
import Services from './components/Services.vue'
import Events from './components/Events.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import Modal from './components/Modal.vue'









export default {
  name: 'App',
  components: {
    Navigation,
    Header,
    Services,
    Events,
    Contact,
    
    Footer,
    Modal
    
  
    
    
    
  }
}
</script>

<style>
@import './assets/css/styles.css';
</style>

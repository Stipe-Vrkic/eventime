<template>
  <!-- Navigation-->
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top" :class="{scrolling: scrollPosition > 0}" id="mainNav">
            <div class="container">
                <a class="navbar-brand js-scroll-trigger" v-smooth-scroll href="#page-top"><img src="../assets/img/navbar-logo.png" alt="" /></a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars ml-1"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav text-uppercase ml-auto" >
                        <li class="nav-item"><a class="nav-link js-scroll-trigger"  href="#services" data-toggle="collapse" data-target="#navbarResponsive" v-smooth-scroll>Usluge</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger"  href="#portfolio" data-toggle="collapse" data-target="#navbarResponsive" v-smooth-scroll>Događaji</a></li>
                        <!--<li class="nav-item"><a class="nav-link js-scroll-trigger"  href="#about" data-toggle="collapse" data-target="#navbarResponsive" v-smooth-scroll>O nama</a></li>-->
                        <li class="nav-item"><a class="nav-link js-scroll-trigger"  href="#contact" v-smooth-scroll>Kontakt</a></li>
                    </ul>
                </div>
            </div>
        </nav>  
</template>

<script>
export default {
    

data: function() {
  return {
   scrollPosition: 0
  }
 
},
mounted() {
    window.addEventListener("scroll", this.handleTopBar);
},
methods: {
    handleTopBar() {
      this.scrollPosition = window.scrollY
    }
}
}
</script>



<style>

</style>
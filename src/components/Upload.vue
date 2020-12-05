<template>
     <!-- Contact-->
        <section class="page-section" id="contact">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Kontakirajte nas!</h2>
                    <h3 class="section-subheading text-muted">Na vaše pitanje odgovaramo odmah</h3>
                </div>
             <input type="file" @change="onFileSelected"/>
             <button @click="onUpload">Upload</button>
            </div>
        </section>
</template>

<script>
export default {
    data(){
        return{
          selectedFile:null
        }
    },
  methods:{
      onFileSelected(event){
         this.selectedFile=event.target.files[0]
      },
      onUpload(){
          
      }
  }

 
  }
  
</script>

<style>

</style>
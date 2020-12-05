<template>
     <!-- Upload-->
        <section class="page-section" id="contact">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Kreiranje novog događaja</h2>
                </div>
               <input type="file" @change="onFileSelected"/>
               <button @click="onUpload">Upload</button>

            </div>
        </section>
</template>

<script>
import axios from 'axios'
export default {
       data:() =>({
          selectedFile: null,
                   
    }),
    methods:{
        onFileSelected(event){
           this.selectedFile=event.target.files[0];
        },
        onUpload(){
            axios.post()
        }
    }
    


 
  }
  
</script>

<style>

</style>
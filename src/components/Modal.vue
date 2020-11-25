<template>
     <!-- Modal 1-->
        <div class="events-modal modal fade" id="eventsModal1"   :key="dinamic" tabindex="-1" role="dialog" aria-hidden="true" >
            <div class="modal-dialog" >
                <div class="modal-content"  >
                    <div class="close-modal" v-on:click="forceRerender()" data-dismiss="modal"><img src="../assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div class="container">
                        <div class="row justify-content-center"  id="dinamic">
                            <div class="col-lg-3 col-sm-4 mb-3" v-for="(obj,key) in filtrirano" :key="key" v-on:click="loadevent(obj.id);singlesearch(obj.id);"> 
                                <div class="modal-body">
                                    <!-- Project Details Go Here-->
                                    <h4 class="text-uppercase">{{ obj.title }}</h4>                                  
                                   <img :src="letterIcon(obj.img)" class="img-fluid" />
                                    <p>{{ obj.caption }}</p>
                                    </div>       
                                             
                            </div>
                        </div>
                        <button class="btn btn-primary" data-dismiss="modal" v-on:click="forceRerender()" type="button"><i class="fas fa-times mr-1"></i> Zatvori</button>
                    </div>
                </div>
            </div>
        </div>
</template>


<script>
import { EventBus } from '@/assets/js/bus.js'
export default {
  
     
     created() {
    EventBus.$on('i-got-clicked', string => {
        this.search=string
   
    })
     },
    data:() =>({
          dinamic: 0,
          modalconent:'<div class="col-lg-3 col-sm-4 mb-3" v-for="(obj,key) in filtrirano" :key="key" v-on:click="loadevent()"><div class="modal-body"> <h4 class="text-uppercase">{{ obj.title }}</h4> <img :src="letterIcon(obj.img)" class="img-fluid" /><p>{{ obj.caption }}</p> </div>',
          search: '',
        singlevent:[],
        event_id:0,
        event_img:"",
        event_title:"",
        event_caption:"",
        events: [ 
        {   id:1,
            img:'assets/img/events/01-thumbnail.jpg',
            title:'Glazba',
            caption:'1'
        
        },
        {   id:2,
            img:'assets/img/events/01-thumbnail.jpg',
            title:'Glazba',
            caption:'2'
        },
        {   id:3,
            img:'assets/img/events/01-thumbnail.jpg',
            title:'Glazba',
            caption:'3'
        },
        {   id:4,
            img:'assets/img/events/01-thumbnail.jpg',
            title:'Glazba',
            caption:'4'
        },
        {   id:5,
            img:'assets/img/events/01-thumbnail.jpg',
            title:'Glazba',
            caption:'5'
        },
        {   id:6,
            img:'assets/img/events/01-thumbnail.jpg',
            title:'Glazba',
            caption:'6'
        },
        {   id:7,
            img:'assets/img/events/01-thumbnail.jpg',
            title:'Glazba',
            caption:'7'
        },
        {   id:8,
            img:'assets/img/events/01-thumbnail.jpg',
            title:'Glazba',
            caption:'8'
        },
        {   id:9,
            img:'assets/img/events/01-thumbnail.jpg',
            title:'Glazba',
            caption:'9'
        },
        {   id:10,
            img:'assets/img/events/01-thumbnail.jpg',
            title:'Glazba',
            caption:'10'
        },
        {   id:11,
            img:'assets/img/events/01-thumbnail.jpg',
            title:'Glazba',
            caption:'11'
        },
        {   id:12,
            img:'assets/img/events/01-thumbnail.jpg',
            title:'Glazba',
            caption:'12'
        },
        {   id:13,
            img:'assets/img/events/02-thumbnail.jpg',
            title:'Kultura',
            caption:'1'
        },
        {   id:14,
            img:'assets/img/events/02-thumbnail.jpg',
            title:'Kultura',
            caption:'1'
        },
        {   id:15,
            img:'assets/img/events/03-thumbnail.jpg',
            title:'Hrana',
            caption:'1'
        },
        {   id:16,
            img:'assets/img/events/03-thumbnail.jpg',
            title:'Hrana',
            caption:'2'
        }  
         
        ]
    }),
      methods: {
        forceRerender() {
      this.dinamic += 1;
     
      },
    letterIcon: function(path) {
      return require("@/" + path);
    },

     loadevent: function(string) {
   document.getElementById("dinamic").innerHTML=string;
    
    },
    singlesearch: function(event_id){
         this.singlevent = this.events.filter((item) =>
          item.id==event_id);
          this.event_title=this.singlevent[0].title;
           this.event_caption=this.singlevent[0].caption;
            this.event_img=this.letterIcon(this.singlevent[0].img);
         document.getElementById("dinamic").innerHTML="<div class='col-lg-3 col-sm-4 mb-3'>" +
                                                            "<div class='modal-body'>"+
                                                                  "<h4 class='text-uppercase'>"+this.event_title+"</h4>"+                                  
                                                                  "<img src='"+this.event_img+"' class='img-fluid'/>"+
                                                                   "<p>"+this.event_caption+"</p>"+
                                                                   "</div>"+                  
                                                                    "</div>";
    } 

     },
  computed: {
    
    filtrirano() {
      let filtered = [];
      
        filtered = this.events.filter((item) =>
          item.title==this.search);
        
      return filtered;
    },
  },

}
</script>

<style>

</style>
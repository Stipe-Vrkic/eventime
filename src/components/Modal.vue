<template>
     <!-- Modal 1-->
        <div class="events-modal modal fade" id="eventsModal1"   :key="dinamic" tabindex="-1" role="dialog" aria-hidden="true" >
            <div class="modal-dialog" >
                <div class="modal-content"  >
                    <div class="close-modal" v-on:click="forceRerender()" data-dismiss="modal"><img src="../assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div class="container">
                        <div class="row justify-content-center"  id="dinamic">
                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 mb-3  bck" v-for="(obj,key) in filtrirano" :key="key" v-on:click="loadevent(obj.id);singlesearch(obj.id);">
                                 
                                <div class="modal-body ">
                                    <!-- Project Details Go Here-->
                                    <h5 class="text-uppercase">{{ obj.title }}</h5>
                                      <div class="single-event">                                 
                                   <img :src="letterIcon(obj.img)" class="img-fluid" />
                                    </div>  
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
const myArray = [1,3,4,5]
myArray.push(...[6,7,8,9]);
console.log(myArray); // this will contain [1,2,3,4,5,6,7,8,9] now
import { EventBus } from '@/assets/js/bus.js'
import Events from '@/assets/data/Events.json'
export default {
  
     
     created() {
    EventBus.$on('i-got-clicked', string => {
        this.search=string
   
    })
     },
    data:() =>({
          dinamic: 0,
          modalconent:'<div class="col-lg-3 col-sm-4 mb-3" v-for="(obj,key) in filtrirano" :key="key" v-on:click="loadevent()"><div class="modal-body"> <h5 class="text-uppercase">{{ obj.title }}</h5> <img :src="letterIcon(obj.img)" class="img-fluid" /><p>{{ obj.caption }}</p> </div>',
          search: '',
        singlevent:[],
        event_id:0,
        event_img:"",
        event_title:"",
        event_caption:"",   
        event_organisation:"",
        event_date:"",
        event_adress:"",
        event_more:"",
        event_other:"",
        event_link:"",
        events: Events
              
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
            this.event_organisation=this.singlevent[0].organisation;
            this.event_date=this.singlevent[0].date;
            this.event_adress=this.singlevent[0].adresa;
            this.event_more=this.singlevent[0].more;
            this.event_other=this.singlevent[0].other;
            this.event_link=this.singlevent[0].link;
          

         document.getElementById("dinamic").innerHTML="<div class='col-lg-12 col-sm-12 mb-12'>" +
                                                            "<div class='modal-body single-event'>"+
                                                                  "<h4 class='text-uppercase'>"+this.event_title+"</h4>"+                                  
                                                                  "<img src='"+this.event_img+"' class='img-fluid'/>"+
                                                                    "<div class='event_info'><span>Datum:"+this.event_date+"</span><span>Mjesto:"+this.event_adress+"</span><span>Organizator:"+this.event_organisation+"</span><span>Web:<a id='web' href='"+this.event_link+"'>"+" "+this.event_link+"</a></span></div>"+
                                                                   "<p>"+this.event_caption+"</p>"+
                                                                   "<p>"+this.event_more+"</p>"+
                                                                   "<p>"+this.event_other+"</p>"+
                                                                   "</div>"+                  
                                                                    "</div>";
    } 

     },
  computed: {
    
    filtrirano() {
      let filtered = [];
      
        filtered = this.events.filter((item) =>
          item.kategorija==this.search);
        
      return filtered;
    },
  },

}
</script>

<style>

</style>
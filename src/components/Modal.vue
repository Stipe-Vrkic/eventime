<template>
     <!-- Modal 1-->
        <div class="events-modal modal fade" id="eventsModal1"   :key="dinamic" tabindex="-1" role="dialog" aria-hidden="true" >
            <div class="modal-dialog" >
                <div class="modal-content"  >
                    <div class="close-modal" v-on:click="forceRerender()" data-dismiss="modal"><img src="../assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div class="container">
                        <div class="row justify-content-center"  id="dinamic">
                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 mb-3  bck" v-for="(obj,key) in filtrirano" :key="key" v-on:click="loadevent(obj.id);singlesearch(obj.id);addgoing(obj.id)">
                                 
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
import { EventBus } from '@/assets/js/bus.js'
import axios from "axios"

export default {
     mounted () {
      axios
      .get('https://api.jsonbin.io/b/5fce2d0e516f9d1270293ac0', {
 headers: {
   "secret-key": '$2b$10$rk7Pcq99UpxvI7sqMY0FOeGlKDiG8ychEv.BM.AjcIRPv9HK9.3Ay'
 }
})
      .then(response => (this.events = response.data))
  },
    
     created() {
    EventBus.$on('i-got-clicked', string => {
        this.search=string});
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
        events:[{}],
        updatedevents:"",
        going:0,
        days:0,
     
              
    }),
    
      methods: {
        addgoing(id){
         this.going=this.going+1;
         this.events.filter((item) =>
         item.id==id)[0].going=this.events.filter((item) =>
         item.id==id)[0].going+1
         this.updatedevents=JSON.stringify(this.events)
        
      let req = new XMLHttpRequest();

req.onreadystatechange = () => {
  if (req.readyState == XMLHttpRequest.DONE) {
    console.log("1");
  }
};

  req.open("PUT", "https://api.jsonbin.io/b/5fce2d0e516f9d1270293ac0", true);
  req.setRequestHeader("Content-Type", "application/json");
  req.setRequestHeader("secret-key", "$2b$10$rk7Pcq99UpxvI7sqMY0FOeGlKDiG8ychEv.BM.AjcIRPv9HK9.3Ay");
    req.setRequestHeader("versioning", "false");
  req.send(this.updatedevents);
        },
 
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
            this.going=this.singlevent[0].going;
            this.days= new Date();
          
            
         
            
          

         document.getElementById("dinamic").innerHTML="<div class='col-lg-12 col-sm-12 mb-12'>" +
                                                            "<div class='modal-body single-event single-event-sng'>"+
                                                                  "<h4 class='text-uppercase naslov'>"+this.event_title+"</h4>"+                                  
                                                                  "<img src='"+this.event_img+"' class='img-fluid'/>"+
                                                                   "<div class='event_going'>"+
                                                                    "<span>Datum:"+this.event_date+"</span><span>Mjesto:"+this.event_adress+"</span><span>Organizator:"+this.event_organisation+"</span><span>Web:<a id='web' href='"+this.event_link+"'>"+" "+this.event_link+"</a></span>"+
                                                                   
                                                                   "</div>"+
                                                                  "<div class='event_look'>"+
                                                                     "<b>Ovaj događaj otvorilo je "+this.going+" korisnika</b>"+
                                                                  "</div>"+
                                                                    "<div class='event_info'>"+
                                                                   "<b>"+this.event_caption+"</b>"+
                                                                   "<p>"+this.event_more+"</p>"+
                                                                   "<p>"+this.event_other+"</p>"+
                                                               
                                                                   "</div>"+
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
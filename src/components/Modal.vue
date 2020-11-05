<template>
     <!-- Modal 1-->
        <div class="events-modal modal fade" id="eventsModal1" tabindex="-1" role="dialog" aria-hidden="true" >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-dismiss="modal"><img src="../assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-2 col-sm-4 mb-3"  v-for="(obj,key) in  eventsJSON" :key="key" >
                                <div class="modal-body">
                                    <!-- Project Details Go Here-->
                                    <h2 class="text-uppercase">Test!</h2>
                                    <p class="item-intro text-muted">Test!</p>
                                    <img class="img-fluid d-block mx-auto" src="../assets/img/events/01-full.jpg" alt="" />
                                    <p>Test!</p>
   
                                </div>
                            </div>
                        </div>
                        <button class="btn btn-primary" data-dismiss="modal" type="button"><i class="fas fa-times mr-1"></i> Zatvori</button>
                    </div>
                </div>
            </div>
        </div>
</template>


<script>
export default {
    data:() =>({
        eventsJSON: [ 
        {  img:'assets/img/events/01-thumbnail.jpg',
            title:'Glazba',
            caption:'1'
        },
        {  img:'assets/img/events/01-thumbnail.jpg',
            title:'Glazba',
            caption:'2'
        },
        {  img:'assets/img/events/01-thumbnail.jpg',
            title:'Glazba',
            caption:'3'
        },
        {  img:'assets/img/events/01-thumbnail.jpg',
            title:'Glazba',
            caption:'4'
        },
        {  img:'assets/img/events/01-thumbnail.jpg',
            title:'Glazba',
            caption:'5'
        },
        {  img:'assets/img/events/01-thumbnail.jpg',
            title:'Glazba',
            caption:'6'
        },
        {  img:'assets/img/events/01-thumbnail.jpg',
            title:'Glazba',
            caption:'7'
        },
        {  img:'assets/img/events/01-thumbnail.jpg',
            title:'Glazba',
            caption:'8'
        },
        {  img:'assets/img/events/01-thumbnail.jpg',
            title:'Glazba',
            caption:'9'
        },
        {  img:'assets/img/events/01-thumbnail.jpg',
            title:'Glazba',
            caption:'10'
        },
        {  img:'assets/img/events/01-thumbnail.jpg',
            title:'Glazba',
            caption:'11'
        },
        {  img:'assets/img/events/01-thumbnail.jpg',
            title:'Glazba',
            caption:'12'
        },
        {  img:'assets/img/events/02-thumbnail.jpg',
            title:'Kultura',
            caption:'1'
        },
        {  img:'assets/img/events/02-thumbnail.jpg',
            title:'Kultura',
            caption:'1'
        },
        {  img:'assets/img/events/03-thumbnail.jpg',
            title:'Hrana',
            caption:'1'
        },
        {  img:'assets/img/events/03-thumbnail.jpg',
            title:'Hrana',
            caption:'2'
        }  
         
        ]
    }),
    methods: {
    letterIcon: function(path) {
      return require("@/" + path);
    },
  },
    
}
</script>

<style>

</style>
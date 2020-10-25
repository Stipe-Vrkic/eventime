<template>
        <section class="page-section bg-light" id="events" >
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Događaji</h2>
                    <h3 class="section-subheading text-muted">Svi događaji grupirani po kategorijama</h3>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-sm-6 mb-4" v-for="(obj,key) in  eventsJSON" :key="key" >
                        <div class="events-item">
                            <a class="events-link" data-toggle="modal" href="#eventsModal1">
                                <div class="events-hover">
                                    <div class="events-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                             <img :src="letterIcon(obj.img)" class="img-fluid" />
                            </a>
                            <div class="events-caption">
                                <div class="events-caption-heading">{{ obj.title }}</div>
                                <div class="events-caption-subheading text-muted">{{ obj.caption }}</div>
                            </div>
                        </div>
                    </div>
              
                </div>
            </div>
        </section>
</template>

<script>
export default {
    data:() =>({
        eventsJSON: [ 
        {  img:'assets/img/events/01-thumbnail.jpg',
            title:'Glazba',
            caption:'Koncerti i festivali'
        },
        {  img:'assets/img/events/02-thumbnail.jpg',
            title:'Kultura',
            caption:'Predstave, Izložbe'
        },
        {  img:'assets/img/events/03-thumbnail.jpg',
            title:'Hrana',
           caption:'Festivali hrane i pića'
        },
        {  img:'assets/img/events/04-thumbnail.jpg',
            title:'Smijeh',
            caption:'Stand up, večeri komičara'
        },
        {  img:'assets/img/events/05-thumbnail.jpg',
            title:'Business',
            caption:'Konferencije, sajmovi'
        },
        {  img:'assets/img/events/06-thumbnail.jpg',
            title:'Ostalo',
           caption:'Radionice, druženja'
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
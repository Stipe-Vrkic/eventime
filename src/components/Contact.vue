<template>
     <!-- Contact-->
        <section class="page-section" id="contact">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Kontakirajte nas!</h2>
                    <h3 class="section-subheading text-muted">Na vaše pitanje odgovaramo odmah</h3>
                </div>
                <form   name="ask-question" method="post" action='/#' data-netlify="true" data-netlify-honeypot="bot-field" enctype="application/x-www-form-urlencoded">
                    <div class="row align-items-stretch mb-5">
                        <div class="col-md-6">
                            <div class="form-group">
                                 <input type="hidden" name="form-name" value="ask-question" />
                                <input class="form-control" id="name" name="ime" type="text" placeholder="Ime i prezime *"  />
                                <p class="help-block text-danger"></p>
                            </div>
                            <div class="form-group">
                                <input class="form-control" id="email" name="email" type="email" placeholder="Email *" />
                                <p class="help-block text-danger"></p>
                            </div>
                            <div class="form-group mb-md-0">
                                <input class="form-control" id="phone" name="telefon" type="tel" placeholder="Mobitel *"  />
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group form-group-textarea mb-md-0">
                                <textarea class="form-control" id="message" placeholder="Poruka *" name="poruka"></textarea>
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group form-group-textarea mb-md-0">
                                   <input class="form-control" id="file" name="slika" type="file" placeholder="slika *"  />
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                    </div>
                    <div class="text-center">
                        <div id="success"></div>
                        <button class="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit">Pošalji poruku</button>
                    </div>
                    
                </form>
            </div>
        </section>
</template>

<script>
export default {
    


 
  }
  
</script>

<style>

</style>
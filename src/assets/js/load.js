$("document").ready(function () {


if ( window.history.replaceState ) {
 window.history.replaceState( null, null, window.location.href );
}

function loadanjexmla(KATEGORIJA){

xmlhttp = new XMLHttpRequest();
if(!xmlhttp){console.log("request nije napravljen")}
xmlhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
    

xmlDoc = xmlhttp.responseXML;
var x = xmlDoc.getElementsByTagName("Vic")
var tekst='';
for (var i = 0; i < x.length; i++) {

var kat=''
kat=x[i].getElementsByTagName("Kategorija")[0].childNodes[0].nodeValue
if(kat==KATEGORIJA){

tekst +="<div class='col-lg-6 col-md-6 col-sm-12 linija'>";	
   tekst +="<h4>"+ x[i].getElementsByTagName("Naslov")[0].childNodes[0].nodeValue + "</h4>";
   tekst +="<p>" + x[i].getElementsByTagName("Sadrzaj")[0].childNodes[0].nodeValue + "</p>";
tekst +="<p class='autor'>Autor:" + x[i].getElementsByTagName("Ime")[0].childNodes[0].nodeValue +"<br> Ocjena:"+x[i].getElementsByTagName("Rating")[0].childNodes[0].nodeValue+"/4</p>";
tekst +="<br></div>";
document.getElementById("Katuvod").innerHTML ="<p>Upravo se nalazite pred kolekcijom najboljih viceva iz ove kategorije</p>";
document.getElementById("xml_data").innerHTML = tekst;}
if(tekst==''){
    document.getElementById("xml_data").innerHTML =" ";
    document.getElementById("Katuvod").innerHTML ="<p>Nažalost,nemamo viceva iz ove kategorije</p>";

}
}
}
};

xmlhttp.open("POST", "Vicevi.xml");
xmlhttp.send();
tekst=""
}

document.getElementById ("KV").addEventListener ("click",function(){
var KATEGORIJA="KV";
loadanjexmla(KATEGORIJA);}, false);


document.getElementById ("CH").addEventListener ("click",function(){
var KATEGORIJA="CH";
loadanjexmla(KATEGORIJA);}, false);


document.getElementById ("MiH").addEventListener ("click",function(){
var KATEGORIJA="MiH";
loadanjexmla(KATEGORIJA);}, false);

document.getElementById ("CN").addEventListener ("click",function(){
var KATEGORIJA="CN";
loadanjexmla(KATEGORIJA);}, false);

});
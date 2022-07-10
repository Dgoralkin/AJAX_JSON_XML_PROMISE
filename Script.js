// JavaScript For index

const btn = document.getElementById("B1");

function myFunction() {
    var P2 = document.getElementById("P2");
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        var txt = JSON.parse(this.responseText);
        var data = ""
        for (i in txt){
            data += txt[i].name + " is a " + txt[i].species + " that likes ";

            if (txt[i].foods.likes.length > 0){
                for (j=0; j < txt[i].foods.likes.length; j++){
                    if (j < txt[i].foods.likes.length - 1){
                        data += txt[i].foods.likes[j] + " and ";
                    } else {
                        data += txt[i].foods.likes[j] + " and dislikes ";
                    }
                }
            }
            if (txt[i].foods.dislikes.length > 0){
                for (j=0; j < txt[i].foods.dislikes.length; j++){
                    if (j < txt[i].foods.dislikes.length - 1){
                        data += txt[i].foods.dislikes[j] + " and ";
                    } else {
                        data += txt[i].foods.dislikes[j] + ".";
                    }
                    
                }
                data += "<br>";
            }
            P2.innerHTML = data;
        }
    }
    xhttp.open("GET", "txt.json");
    xhttp.send();
  }









/*
function responseXML() {
    var resp = new XMLHttpRequest();
    resp.onload = function() {
        const xmlDoc = this.responseXML;
        const x = xmlDoc.getElementsByTagName("ARTIST");
        let txt = "";
        for (let i = 0; i < x.length; i++) {
          txt = txt + x[i].childNodes[0].nodeValue + "<br>";
        }
        document.getElementById("demo4").innerHTML = txt;
    }
    resp.open("GET", "https://github.com/Dgoralkin/AjaxJason-cats/blob/second/templates/xml_catalog.xml");
    resp.send();
}
*/

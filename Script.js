// JavaScript For index


var div2 = document.getElementById("P2");
const url = 'txt.json';

function myFunction() {
    var res = fetch(url).json();
    console.log(res);
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

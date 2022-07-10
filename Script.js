// JavaScript For index

// Version 1: Read from txt.json / text1.txt LOCALLY.

function myFunction() {
    // Set P2 Where to paste
    var P2 = document.getElementById("P2");
    // Set XMLHttpRequest
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        // Convert To txt VIA JSON.parse()
        var txt = JSON.parse(this.responseText);
        // Insert into string bank
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
    // Open File to read from
    xhttp.open("GET", "txt.json");
    
    // OR CHANGE TO =>
    // => xhttp.open("GET", "text1.txt");

    // Send request to server
    xhttp.send();
    myFunction2()
  }



// Version 2: Read from XML LOCALLY.

function myFunction2() {
    var P3 = document.getElementById("P3");

    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        var cd = this.responseXML;
        console.log(cd);
    
        var x = cd.getElementsByTagName("TITLE");
        let txt = "";
        for (let i = 0; i < x.length; i++) {
          txt = txt + x[i].childNodes[0].nodeValue + "<br>";
        }
        P3.innerHTML = txt;
    }
    xhttp.open("GET", "xml_catalog.xml");
    xhttp.send();
  }


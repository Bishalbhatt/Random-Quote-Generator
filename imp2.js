var colors=['pink','skyblue','green','red','yellow'];
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        var jsonObj = JSON.parse(this.responseText);
        var random=Math.floor(Math.random()*(jsonObj.quotes.length));
        var a=jsonObj.quotes[random];
        var b=a.quote;
        var c=a.author;
        var d=b+'<br>~'+c;
        document.getElementById("here").innerHTML=d;
        var ranCol=Math.floor(Math.random()*colors.length);
        document.body.style.backgroundColor=colors[ranCol];
      }
    };
    xhttp.open("GET", "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json", true);
    xhttp.send();   
  }
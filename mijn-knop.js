amount_clicked =0 
var button = document.createElement("button");
button.innerHTML = 'doe iets';

var body = document.getElementsByTagName("body")[0];
body.appendChild(button); 

button.addEventListener ("click", function(){
    document.getElementById("tekst").innerHTML = "welkom joelle"
    amount_clicked += 2
    if(amount_clicked > 2){
        document.getElementById("tekst").remove("tekst")
    }
});



    


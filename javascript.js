
function loadData(){

    var country = document.getElementById("country").value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(xhttp.readyState === 4 && this.status === 200){
            var responseData = xhttp.responseText;
            var jsonData = JSON.parse(responseData);
            var captial = jsonData[0].capital;
            document.getElementById("captial").innerHTML = captial; 
        }
    }
    xhttp.open("GET","https://restcountries.com/v2/name/"+country+"?fullText=true", true);
    xhttp.send();
}

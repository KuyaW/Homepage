function asyncFunction(){
    const http = new XMLHttpRequest();
    http.onload = function(){
        document.getElementById('target').innerHTML = this.responseText;
    }
    http.open("get", "target.php");
    http.send();
}
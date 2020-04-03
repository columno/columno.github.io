function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return decodeURIComponent(results[1].replace(/\+/g, ' '));
};
var query = getUrlParameter('s');

var xmlhttp = new XMLHttpRequest();
var url = "https://api.columno.com/?q=" + query;
var myArr;
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        myArr = JSON.parse(this.responseText);
        if(myArr.result) {
            document.getElementById("columnofuzzinner").innerHTML="<a href='https://www.proshop.dk/?s=" + myArr.result + "'>" + myArr.result + "</a>";
            document.getElementById("columnofuzzouter").style.display = "block";
        }
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

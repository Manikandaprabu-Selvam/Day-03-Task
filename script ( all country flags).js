// Questions 1
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
    var result = JSON.parse(request.response);
    console.log(result);
    for (i = 0; i < result.length; i++) {
        console.log(result[i].name);
    }
}
// Questions 02
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var result = JSON.parse(request.response);
    console.log(result);
    for (i = 0; i < result.length; i++) {
        console.log(result[i].subregion);
    }
}
// Questions 03
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
    var result = JSON.parse(request.response);
    console.log(result);
    for (i = 0; i < result.length; i++) {
        console.log(result[i].flags.png);
    }
}
// Questions 04
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var result = JSON.parse(request.response);
    console.log(result);
    for (i = 0; i < result.length; i++) {
        console.log(result[i].population);
    }
}
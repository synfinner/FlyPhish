# FlyPhish

FlyPhish is my testing code for using JavaScript event listeners to capture entered key event values.

Please note that this is all just experimental and for research purposes only. 

## Python Server

I added a basic python web server so that testing can be done to ensure data is returned.

Example output: 

```
./test_server.py
127.0.0.1 - - [05/Dec/2022 02:56:34] "OPTIONS / HTTP/1.1" 200 -
b'{"user":[72,69,76,76,79],"pass":[72,69,76,76,79]}'
127.0.0.1 - - [05/Dec/2022 02:56:34] "POST / HTTP/1.1" 200 -
```

## In depth

A current in-depth synopsis 

`main.js` defines a login() function that listens for keydown events on the username and password input fields, and a sender() function that sends the keycodes of the keys pressed in the username and password fields to a server using an XMLHttpRequest.

The login() function uses the querySelector() method to select the username and password input fields, and it adds an addEventListener() method to each input field to listen for keydown events. For each keydown event that is triggered, the keyCode property of the event is extracted and added to the keys1 and keys2 arrays for the username and password input fields, respectively.

The sender() function then logs the keys1 and keys2 arrays to the console, and it uses the XMLHttpRequest object to send a POST request to a server at the specified URL. The request body is set to a JSON object that contains the keys1 and keys2 arrays as the user and pass properties, respectively.

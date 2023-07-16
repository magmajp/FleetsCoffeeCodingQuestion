"use strict";
var outputBox = document.getElementById("output");
var textBox = document.getElementById("input");
var button = document.getElementById("button");
textBox === null || textBox === void 0 ? void 0 : textBox.addEventListener("keyup", function (event) {
    // Checking if key pressed is ENTER or not
    // if the key pressed is ENTER
    // click listener on button is called
    if (event.key == "Enter") {
        button.click();
    }
});
function FirstNonRepeated(s) {
    //initializes an array to hold the first 256 unicode characters which includes a-zA-Z
    var frequency = new Array(256);
    //sets the array to -2
    for (let i = 0; i < 256; i++) {
        frequency[i] = -2;
    }
    //goes through the string char by char
    //checks the array index based on the chars unicode value
    //if the array is -2 set to the current string location
    //otherwise the character has been seen before and should be disregarded by setting to -1
    for (let i = 0; i < s.length; i++) {
        if (frequency[s.charCodeAt(i)] == -2) {
            frequency[s.charCodeAt(i)] = i;
        }
        else if (frequency[s.charCodeAt(i)] >= 0) {
            frequency[s.charCodeAt(i)] = -1;
        }
    }
    var output = "";
    var oIndex = -1;
    //loop through the frequency array and take the smallest index that wasn't marked as repeating
    for (let i = 0; i < 256; i++) {
        if (frequency[i] >= 0) {
            if (oIndex > frequency[i] || oIndex == -1) {
                oIndex = frequency[i];
            }
        }
    }
    if (oIndex >= 0) {
        output = s.charAt(oIndex);
    }
    return output;
}
function Button() {
    var input = textBox.value;
    var output = FirstNonRepeated(input);
    outputBox.innerHTML = output;
}

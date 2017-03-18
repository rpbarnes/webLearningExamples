// Replace the heading in the html file with something I wrote in JS.
var myHeading = document.querySelector("h1");
myHeading.textContent = "Hello World";

// Change the image on the page when the user clicks the image. A conditional checking which image is currently viewed.
var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/FSEset.png') {
        myImage.setAttribute ('src','images/h02Old.png');
    } else {
        myImage.setAttribute ('src','images/FSEset.png');
    }
}

// Now make a personalized message. Save name in browser mem and call it later.
var myButton = document.querySelector('button');
var myPara = document.querySelector('p');

// Query Un, save it, then set it.
function setUserName() {
    var userName = prompt("Please enter your name.");
    localStorage.setItem('name',userName);
    myPara.textContent = 'Suck it ' + userName;
}
// check to see if they already entered a un.
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var userName = localStorage.getItem('name');
    myPara.textContent = 'Suck it ' + userName;
}

// If they click set un.
myButton.onclick = function() {
    setUserName();
}

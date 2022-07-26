'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "toggle_off";
    } else {
        this.textContent = "toggle_on";
    }

    console.log('current class name: ' + className)
});

const title = "Loic Chasseray"
var delay = 150;
var i = 0

const id = setInterval(typeWriter, delay);

function typeWriter(){
    document.getElementById("title").innerHTML += title[i]; 
    i++; 
    if (i >= title.length){
        clearInterval(id);
    }
}

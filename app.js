'use strict';

const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', function() {
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

document.getElementById('about-btn').addEventListener('mouseover', mouseOverAbout)
document.getElementById('about-btn').addEventListener('mouseout', mouseOutAbout)
document.getElementById('goals-btn').addEventListener('mouseover', mouseOverGoals)
document.getElementById('goals-btn').addEventListener('mouseout', mouseOutGoals)
document.getElementById('interests-btn').addEventListener('mouseover', mouseOverInterests)
document.getElementById('interests-btn').addEventListener('mouseout', mouseOutInterests)
document.getElementById('secret-btn').addEventListener('mouseover', mouseOverSecret)
document.getElementById('secret-btn').addEventListener('mouseout', mouseOutSecret)

function mouseOver() {
    document.getElementById('title').style.visibility = 'hidden';
    document.getElementById('subtitle').style.visibility = 'hidden';    
}
function mouseOut() {
    document.getElementById('title').style.visibility = 'visible';
    document.getElementById('subtitle').style.visibility = 'visible';
}

function mouseOverAbout(){
    document.getElementById('title').style.visibility = 'hidden';
    document.getElementById('subtitle').style.visibility = 'hidden';

    document.getElementById('about').style.visibility = 'visible';
}
function mouseOutAbout(){
    document.getElementById('title').style.visibility = 'visible';
    document.getElementById('subtitle').style.visibility = 'visible';

    document.getElementById('about').style.visibility = 'hidden';
}
function mouseOverGoals(){
    document.getElementById('title').style.visibility = 'hidden';
    document.getElementById('subtitle').style.visibility = 'hidden';

    document.getElementById('goals').style.visibility = 'visible';
}
function mouseOutGoals(){
    document.getElementById('title').style.visibility = 'visible';
    document.getElementById('subtitle').style.visibility = 'visible';

    document.getElementById('goals').style.visibility = 'hidden';
}
function mouseOverInterests(){
    document.getElementById('title').style.visibility = 'hidden';
    document.getElementById('subtitle').style.visibility = 'hidden';

    document.getElementById('interests').style.visibility = 'visible';
}
function mouseOutInterests(){
    document.getElementById('title').style.visibility = 'visible';
    document.getElementById('subtitle').style.visibility = 'visible'; 

    document.getElementById('interests').style.visibility = 'hidden';
}
function mouseOverSecret(){
    document.getElementById('title').style.visibility = 'hidden';
    document.getElementById('subtitle').style.visibility = 'hidden';

    document.getElementById('secret').style.visibility = 'visible';
}
function mouseOutSecret(){
    document.getElementById('title').style.visibility = 'visible';
    document.getElementById('subtitle').style.visibility = 'visible';

    document.getElementById('secret').style.visibility = 'hidden';
}

const title = "Loic Chasseray"
var delay = 150;
var i = 0

const id = setInterval(typeWriter, delay);

function typeWriter(){
    document.getElementById('title').innerHTML += title[i]; 
    i++; 
    if (i >= title.length){
        clearInterval(id);
    }
}

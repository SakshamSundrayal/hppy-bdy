// Your JavaScript code here


const btn = document.getElementById('btn');
const redirect = document.getElementById('redirect');
const myBar = document.querySelector('.progress');
const title = document.querySelector('.box h1');
const gif = document.querySelector('#btn img');

const video = 'https://youtu.be/......';

const white = 'white';
const red = 'rgb(235, 59, 59)';
const green = 'rgb(31, 164, 47)';

let w = 0;
let intervalId;
let INCREASE_RATE = 1;
const INTERVAL_TIME = 350;
let first = true;

let b5 = false;
let b30 = false;
let b50 = false;
let b75 = false;
let b95 = false;
let b96 = false;
let b97 = false;
let b98 = false;
let b99 = false;

function startProgress() {
    // Clear any existing interval in case of quick clicks
    clearInterval(intervalId); 
    w = 0; // Reset progress
    if (first) {
        message('Hold the button');
        first = false;
    } else {
        color(red);
        message('keep going end tkk!!');
        b5 = false;
        b30 = false;
        b50 = false;
        b75 = false;
        b95 = false;
        b96 = false;
        b97 = false;
        b98 = false;
        b99 = false;
    }

    intervalId = setInterval(frame, INTERVAL_TIME);
}

function message(x) {
    title.textContent = x;
}
function color(x) {
    title.style.color = x;
}
function hide() {
    btn.style.opacity = '0';
}
function show() {
    redirect.style.display = 'inline';
    setTimeout(()=>{
        redirect.style.opacity = '1';
    }, 1000);
    message('press yeh abb');
    redirect.addEventListener('click', letgo);
}
function letgo() {
    setTimeout(color(red), 2000);
    myBar.style.backgroundColor = red;
    message('i love you ❤️');

    setTimeout(()=> {
        window.location.href = video
    }, 7000);
}


function frame() {
    if (w >= 100) {
        clearInterval(intervalId); // Stop at 100%
        message('complete.. but wait');
        color(green);
        setTimeout(start, 1000);
        btn.disabled = true; // Optionally disable button
    } else {
        if (w == 5) { 
            if (!b5) {
                b5 = true; color(green); message('Happy birthday! first of all 🥹');
                gif.src='gif2.gif';
            }
        }
        if (w == 30) { 
            if (!b30) {
                w = 15; b30 = true; color(white); message('Tysm for coming back to my life 🥺');
                gif.src='gif3.gif';
            } 
        }
        if (w == 50) { 
            if (!b50) {
                b50 = true; color(white); message('i tried to make something but... 😿');
                gif.src='gif4.gif';
            }
        }
        if (w == 75) { 
            if (!b75) {
                w = 50; b75 = true; color(white); message('idk kesa lagega apko 😭🫣'); gif.src='gif5.gif';
            } 
        }
        if (w == 95) { 
            if (!b95) {
                w = 50; b95 = true; color(white); message('prr i hope psnd aaye apko 😝'); gif.src='gif6.gif';
            } 
        }
        if (w == 96) { 
            if (!b96) {
                w = 70; b96 = true; color(white); message('bss abb kuch hi der me 😋'); gif.src='gif7.gif';
            } 
        }
        if (w == 97) { 
            if (!b97) {
                w = 70; b97 = true; color(white); message('Khulne vala hai 🫢'); gif.src='gif8.gif';
                INCREASE_RATE = .5;
            } 
        }
        if (w == 98) { 
            if (!b98) {
                w = 80; b98 = true; color(white); message('Bss ye last tha 😅'); gif.src='gif9.gif';
            } 
        }
        
        if (w == 99) { 
            if (!b99) {
                w = 90; b99 = true; color(white); message('Mzkk krra thaa! 😝😝'); gif.src='gif10.gif';
                INCREASE_RATE = .25;
            }
        }
        
        w += INCREASE_RATE;
        myBar.style.transform = 'scaleX('+w+'%)';
    }
}


function stopProgress() {
    clearInterval(intervalId);
    if (w < 100) {
        w = 0;
        myBar.style.transform = 'scaleX(0%)';
    }
}

btn.addEventListener("pointerdown", startProgress);
btn.addEventListener("pointerup", stopProgress);
btn.addEventListener("pointerleave", stopProgress); 



function start() {
    hide();
    show();
}

document.querySelector("#btn img").addEventListener("contextmenu", function(e) {
    e.preventDefault();
});

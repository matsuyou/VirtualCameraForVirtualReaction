"use strict";
function WindowOpen() {
    window.open('http://werid-air.main.jp/work/', '', 'top=0,left=0,width=800,height=600');
}
var button = document.getElementById('ReactionStart');
if (button !== null)
    button.onclick = WindowOpen;
var button1 = document.getElementById('Reaction1');
if (button1 !== null)
    button1.onclick = WindowOpen;
var button2 = document.getElementById('Reaction2');
if (button2 !== null)
    button2.onclick = WindowOpen;
var button3 = document.getElementById('Reaction3');
if (button3 !== null)
    button3.onclick = WindowOpen;
var button4 = document.getElementById('Reaction4');
if (button4 !== null)
    button4.onclick = WindowOpen;
console.log("gui");

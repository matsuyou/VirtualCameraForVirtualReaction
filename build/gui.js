"use strict";
var win1 = null;
function WindowOpen() {
    if (win1 == null) {
        win1 = window.open('http://werid-air.main.jp/work/', '', 'top=0,left=0,width=800,height=600');
    }
}
function WindowClose() {
    win1.close();
    win1 = null;
}
var button = document.getElementById('ReactionStart');
if (button !== null)
    button.onclick = WindowOpen;
var button1 = document.getElementById('Reaction1');
if (button1 !== null)
    button1.onclick = WindowClose;
var button2 = document.getElementById('Reaction2');
if (button2 !== null)
    button2.onclick = WindowClose;
var button3 = document.getElementById('Reaction3');
if (button3 !== null)
    button3.onclick = WindowClose;
var button4 = document.getElementById('Reaction4');
if (button4 !== null)
    button4.onclick = WindowClose;
console.log("gui");

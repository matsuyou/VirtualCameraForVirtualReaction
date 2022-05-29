"use strict";
var win = window;
var subwin = null;
function WindowOpen() {
    if (subwin == null) {
        subwin = window.open('http://localhost:8000/', '', 'top=0,left=0,width=800,height=600');
    }
}
function WindowClose() {
    subwin.close();
    subwin = null;
}
Object.defineProperty(win, "ReactionValue", {
    set: function (v) {
        if (subwin != null) {
            console.log("ReactionValue set!:" + v);
            subwin.postMessage(v, '*');
        }
    }
});
function ValueInput(num) {
    win.ReactionValue = num;
}
var start_button = document.getElementById('ReactionStart');
if (start_button != null)
    start_button.onclick = WindowOpen;
var stop_button = document.getElementById('ReactionStop');
if (stop_button != null)
    stop_button.onclick = WindowClose;
var button1 = document.getElementById('Reaction1');
if (button1 != null)
    button1.onclick = function () { ValueInput(1); };
var button2 = document.getElementById('Reaction2');
if (button2 != null)
    button2.onclick = function () { ValueInput(2); };
var button3 = document.getElementById('Reaction3');
if (button3 != null)
    button3.onclick = function () { ValueInput(3); };
var button4 = document.getElementById('Reaction4');
if (button4 != null)
    button4.onclick = function () { ValueInput(4); };

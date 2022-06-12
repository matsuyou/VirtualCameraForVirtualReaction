"use strict";
var win = window;
var subWin = null;
function WindowOpen() {
    subWin = window.open('http://localhost:8000/gui/', 'sample', 'top=50,left=50,width=600,height=100');
}
var start_button = document.getElementById('ReactionStart');
if (start_button != null)
    start_button.onclick = WindowOpen;

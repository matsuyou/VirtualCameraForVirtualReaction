"use strict";
var win = window;
var subWin = null;
function WindowOpen() {
    subWin = window.open('http://localhost:8000/gui/', 'sample', 'top=50,left=50,width=1100,height=180');
}
var start_button = document.getElementById('ReactionStart');
if (start_button != null)
    start_button.onclick = WindowOpen;

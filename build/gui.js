"use strict";
var win = window;
var subWin = null;
function WindowOpen() {
    subWin = window.open('https://glacial-meadow-27403.herokuapp.com/gui/', 'sample', 'top=50,left=50,width=900,height=200');
}
var start_button = document.getElementById('ReactionStart');
if (start_button != null)
    start_button.onclick = WindowOpen;

"use strict";
var win = window;
var subWin = null;
function WindowOpen() {
    subWin = window.open('https://werid-air.main.jp/work/VirtualReaction/gui/', 'sample', 'top=50,left=50,width=900,height=200');
}
var start_button = document.getElementById('ReactionStart');
if (start_button != null)
    start_button.onclick = WindowOpen;

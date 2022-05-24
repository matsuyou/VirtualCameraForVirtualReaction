"use strict";
window.open('http://werid-air.main.jp/work/', '', 'top=0,left=0,width=800,height=600');
var script = document.createElement("script");
script.setAttribute("type", "module");
script.setAttribute("src", chrome.runtime.getURL("camera.js"));
var script2 = document.createElement("script");
script2.setAttribute("type", "module");
script2.setAttribute("src", chrome.runtime.getURL("gui.js"));
var head = document.head ||
    document.getElementsByTagName("head")[0] ||
    document.documentElement;
head.insertBefore(script, head.lastChild);
head.insertBefore(script2, head.lastChild);
var body = document.body;
var html = 'test';
body.insertAdjacentHTML('afterbegin', html);

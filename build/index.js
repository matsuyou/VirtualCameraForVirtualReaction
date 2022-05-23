"use strict";
window.open('http://werid-air.main.jp/work/', '', 'top=0,left=0,width=800,height=600');
var script = document.createElement("script");
script.setAttribute("type", "module");
script.setAttribute("src", chrome.runtime.getURL("main.js"));
var head = document.head ||
    document.getElementsByTagName("head")[0] ||
    document.documentElement;
head.insertBefore(script, head.lastChild);

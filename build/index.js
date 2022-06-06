"use strict";
var script = document.createElement("script");
script.setAttribute("type", "module");
script.setAttribute("src", chrome.runtime.getURL("camera.js"));
var script2 = document.createElement("script");
script2.setAttribute("type", "module");
script2.setAttribute("src", chrome.runtime.getURL("gui.js"));
var script3 = document.createElement("link");
script3.setAttribute("rel", "stylesheet");
script3.setAttribute("type", "text/css");
script3.setAttribute("href", chrome.runtime.getURL("gui.css"));
var head = document.head ||
    document.getElementsByTagName("head")[0] ||
    document.documentElement;
head.insertBefore(script, head.lastChild);
head.insertBefore(script2, head.lastChild);
head.insertBefore(script3, head.lastChild);
var body = document.body;
var html = '<div class="controller">\
<input type="button" value="Reaction Start!" id="ReactionStart">\
</div>';
body.insertAdjacentHTML('beforebegin', html);

"use strict";
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
var html = '<input type="button" value="REACTION START" id="ReactionStart">\
<input type="button" value="😄" id="Reaction1">\
<input type="button" value="😲" id="Reaction2">\
<input type="button" value="😫" id="Reaction3">\
<input type="button" value="🙆" id="Reaction4">';
body.insertAdjacentHTML('afterbegin', html);

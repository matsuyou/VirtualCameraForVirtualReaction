//jsファイルを指定したscriptタグを追加
const script = document.createElement("script");
script.setAttribute("type", "module");
script.setAttribute("src", chrome.runtime.getURL("camera.js"));
const script2 = document.createElement("script");
script2.setAttribute("type", "module");
script2.setAttribute("src", chrome.runtime.getURL("gui.js"));

// サイトの `<head />` を取得する
const head =
  document.head ||
  document.getElementsByTagName("head")[0] ||
  document.documentElement;

// `<script />` を挿入する
head.insertBefore(script, head.lastChild);
head.insertBefore(script2, head.lastChild);

// サイトの `<body />` を取得する
const body = document.body
const html = '<input type="button" value="REACTION START" id="ReactionStart">\
<input type="button" value="😄" id="Reaction1">\
<input type="button" value="😲" id="Reaction2">\
<input type="button" value="😫" id="Reaction3">\
<input type="button" value="🙆" id="Reaction4">'


//  `<body />`の先頭に挿入する。
body.insertAdjacentHTML('afterbegin', html);
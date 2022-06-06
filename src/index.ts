//js,cssファイルを指定したscriptタグ、linkタグを追加
const script = document.createElement("script");
script.setAttribute("type", "module");
script.setAttribute("src", chrome.runtime.getURL("camera.js"));
const script2 = document.createElement("script");
script2.setAttribute("type", "module");
script2.setAttribute("src", chrome.runtime.getURL("gui.js"));
const script3 = document.createElement("link");
script3.setAttribute("rel", "stylesheet");
script3.setAttribute("type", "text/css");
script3.setAttribute("href", chrome.runtime.getURL("gui.css"));

// サイトの `<head />` を取得する
const head =
  document.head ||
  document.getElementsByTagName("head")[0] ||
  document.documentElement;

//タグを挿入する
head.insertBefore(script, head.lastChild);
head.insertBefore(script2, head.lastChild);
head.insertBefore(script3, head.lastChild);

// サイトの `<body />` を取得する
const body = document.body;
const html = '<div class="controller">\
<input type="button" value="Reaction Start!" id="ReactionStart">\
</div>';
//  `<body />`の最初に挿入する。
body.insertAdjacentHTML('beforebegin', html);

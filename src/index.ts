//仮想モデルページを新規ウィンドウで開く(仮)
window.open('http://werid-air.main.jp/work/', '', 'top=0,left=0,width=800,height=600');

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
const html = 'test'

//  `<body />`の先頭に挿入する。
body.insertAdjacentHTML('afterbegin', html);